import { DurableObject } from "cloudflare:workers";

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  PAGE_VIEW_COUNTER: DurableObjectNamespace;
}

type CounterAction = {
  action: "increment" | "read";
  projectIds: string[];
};

function isProjectId(value: unknown): value is string {
  return typeof value === "string" && value.length <= 80 && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

export class PageViewCounter extends DurableObject<Env> {
  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    ctx.storage.sql.exec(`
      CREATE TABLE IF NOT EXISTS project_views (
        project_id TEXT PRIMARY KEY,
        count INTEGER NOT NULL DEFAULT 0
      )
    `);
  }

  async fetch(request: Request): Promise<Response> {
    if (request.method !== "POST" || new URL(request.url).pathname !== "/counts") {
      return new Response("Not found", { status: 404 });
    }

    let payload: unknown;
    try {
      payload = (await request.json()) as CounterAction;
    } catch {
      return new Response("Invalid request", { status: 400 });
    }

    if (!payload || typeof payload !== "object") return new Response("Invalid request", { status: 400 });

    const { action, projectIds } = payload as Partial<CounterAction>;
    if (
      (action !== "increment" && action !== "read") ||
      !Array.isArray(projectIds) ||
      projectIds.length === 0 ||
      projectIds.length > 100 ||
      !projectIds.every(isProjectId) ||
      (action === "increment" && projectIds.length !== 1)
    ) {
      return new Response("Invalid request", { status: 400 });
    }

    const uniqueIds = [...new Set(projectIds)];
    const counts: Record<string, number> = {};

    if (action === "increment") {
      const projectId = uniqueIds[0];
      const row = this.ctx.storage.sql
        .exec<{ count: number }>(
          `INSERT INTO project_views (project_id, count)
           VALUES (?, 1)
           ON CONFLICT(project_id) DO UPDATE SET count = count + 1
           RETURNING count`,
          projectId
        )
        .one();
      counts[projectId] = row.count;
    } else {
      for (const projectId of uniqueIds) {
        const rows = this.ctx.storage.sql
          .exec<{ count: number }>("SELECT count FROM project_views WHERE project_id = ?", projectId)
          .toArray();
        counts[projectId] = rows[0]?.count ?? 0;
      }
    }

    return Response.json(counts, { headers: { "cache-control": "no-store" } });
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const page = await env.ASSETS.fetch(request);
    if (request.method !== "GET" || page.status !== 200 || !page.headers.get("content-type")?.startsWith("text/html")) {
      return page;
    }

    const html = await page.text();
    const projectPageId = html.match(/data-project-view-page="([a-z0-9-]{1,80})"/)?.[1];
    const projectIds = [
      ...new Set([...html.matchAll(/data-project-view-count="([a-z0-9-]{1,80})"/g)].map((match) => match[1]))
    ];

    if (projectPageId && !projectIds.includes(projectPageId)) projectIds.push(projectPageId);
    if (projectIds.length === 0) {
      return new Response(html, { status: page.status, statusText: page.statusText, headers: page.headers });
    }

    try {
      const counterId = env.PAGE_VIEW_COUNTER.idFromName("project-views");
      const counter = env.PAGE_VIEW_COUNTER.get(counterId);
      const countsResponse = await counter.fetch("https://counter.internal/counts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: projectPageId ? "increment" : "read",
          projectIds: projectPageId ? [projectPageId] : projectIds
        })
      });

      if (!countsResponse.ok) {
        return new Response(html, { status: page.status, statusText: page.statusText, headers: page.headers });
      }

      const counts = (await countsResponse.json()) as Record<string, number>;
      const headers = new Headers(page.headers);
      headers.set("cache-control", "no-store");

      return new HTMLRewriter()
        .on("[data-project-view-count]", {
          element(element) {
            const projectId = element.getAttribute("data-project-view-count");
            if (projectId) element.setInnerContent(String(counts[projectId] ?? 0));
          }
        })
        .on("[data-project-view-word]", {
          element(element) {
            const projectId = element.getAttribute("data-project-view-word");
            if (!projectId) return;

            const count = counts[projectId] ?? 0;
            const word = count === 1 ? element.getAttribute("data-singular") : element.getAttribute("data-plural");
            if (word) element.setInnerContent(word);
          }
        })
        .on("[data-project-view-page]", {
          element(element) {
            element.remove();
          }
        })
        .transform(new Response(html, { status: page.status, statusText: page.statusText, headers }));
    } catch {
      return new Response(html, { status: page.status, statusText: page.statusText, headers: page.headers });
    }
  }
};
