import { DurableObject } from "cloudflare:workers";

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  PAGE_VIEW_COUNTER: DurableObjectNamespace;
}

export class PageViewCounter extends DurableObject<Env> {
  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    ctx.storage.sql.exec(`
      CREATE TABLE IF NOT EXISTS page_views (
        path TEXT PRIMARY KEY,
        count INTEGER NOT NULL DEFAULT 0
      )
    `);
  }

  async fetch(request: Request): Promise<Response> {
    if (request.method !== "POST" || new URL(request.url).pathname !== "/increment") {
      return new Response("Not found", { status: 404 });
    }

    const path = await request.text();
    if (!path.startsWith("/") || path.length > 512 || path.includes("?") || path.includes("#")) {
      return new Response("Invalid page path", { status: 400 });
    }

    const row = this.ctx.storage.sql
      .exec<{ count: number }>(
        `INSERT INTO page_views (path, count)
         VALUES (?, 1)
         ON CONFLICT(path) DO UPDATE SET count = count + 1
         RETURNING count`,
        path
      )
      .one();

    return new Response(String(row.count), {
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" }
    });
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const page = await env.ASSETS.fetch(request);
    if (request.method !== "GET" || page.status !== 200 || !page.headers.get("content-type")?.startsWith("text/html")) {
      return page;
    }

    try {
      const path = new URL(request.url).pathname;
      const counterId = env.PAGE_VIEW_COUNTER.idFromName("site-page-views");
      const counter = env.PAGE_VIEW_COUNTER.get(counterId);
      const countResponse = await counter.fetch("https://counter.internal/increment", {
        method: "POST",
        body: path
      });

      if (!countResponse.ok) return page;

      const count = await countResponse.text();
      const headers = new Headers(page.headers);
      headers.set("cache-control", "no-store");

      return new HTMLRewriter()
        .on("[data-page-view-count]", {
          element(element) {
            element.setInnerContent(count);
          }
        })
        .transform(new Response(page.body, { status: page.status, statusText: page.statusText, headers }));
    } catch {
      return page;
    }
  }
};
