import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { site } from "../src/lib/site.ts";

const profileUrl = new URL(site.credly);
const profilePath = profileUrl.pathname.split("/").slice(0, 3).join("/");
const walletUrl = new URL(`${profilePath}/badges?sort=rank`, profileUrl.origin);
const outputPath = resolve("src/data/credly-badges.json");
const headers = {
  Accept: "application/json, text/plain, */*",
  "X-Requested-With": "XMLHttpRequest"
};

function getIssuer(badge) {
  const entities = badge.issuer?.entities ?? [];
  return entities.find((item) => item.primary)?.entity?.name ?? entities[0]?.entity?.name ?? "Credly";
}

function getImageUrl(badge) {
  const candidate = badge.badge_template?.image_url ?? badge.image_url ?? badge.image?.url;
  if (!candidate) return undefined;

  const imageUrl = new URL(candidate);
  if (imageUrl.protocol !== "https:" || imageUrl.hostname !== "images.credly.com") {
    throw new Error(`Credly returned an unexpected badge image host: ${imageUrl.hostname}`);
  }

  return imageUrl.toString();
}

function normalizeBadge(badge) {
  if (!/^[\da-f-]{36}$/i.test(badge.id ?? "")) {
    throw new Error("Credly returned a badge without a valid public ID.");
  }

  const template = badge.badge_template;
  if (!template?.name) throw new Error(`Credly badge ${badge.id} is missing its name.`);

  return {
    id: badge.id,
    name: template.name,
    issuer: getIssuer(badge),
    description: template.description ?? "",
    issuedAt: badge.issued_at_date ?? null,
    expiresAt: badge.expires_at_date ?? null,
    imageUrl: getImageUrl(badge),
    url: `https://www.credly.com/badges/${badge.id}`,
    skills: (template.skills ?? [])
      .filter((skill) => skill?.name)
      .map((skill) => ({
        name: skill.name,
        slug: /^[a-z0-9-]+$/i.test(skill.vanity_slug ?? "") ? skill.vanity_slug : undefined
      }))
  };
}

async function fetchPublicBadges() {
  let nextUrl = walletUrl;
  const rawBadges = [];

  while (nextUrl) {
    if (nextUrl.origin !== "https://www.credly.com") {
      throw new Error("Credly returned a pagination URL outside its public site.");
    }

    const response = await fetch(nextUrl, { headers });
    if (!response.ok) {
      const error = new Error(`Credly returned HTTP ${response.status} while loading the public badge wallet.`);
      error.status = response.status;
      throw error;
    }

    const payload = await response.json();
    if (!Array.isArray(payload.data)) {
      throw new Error("Credly returned an unexpected response for the public badge wallet.");
    }

    rawBadges.push(...payload.data);
    nextUrl = payload.metadata?.next_page_url ? new URL(payload.metadata.next_page_url, nextUrl) : null;
  }

  return rawBadges
    .filter((badge) => badge.public === true && badge.is_private_badge !== true && badge.state === "accepted")
    .map(normalizeBadge);
}

async function readCachedSnapshot() {
  try {
    const snapshot = JSON.parse(await readFile(outputPath, "utf8"));
    return Array.isArray(snapshot.badges) ? snapshot : null;
  } catch {
    return null;
  }
}

async function saveSnapshot(badges) {
  const snapshot = {
    profileUrl: site.credly,
    fetchedAt: new Date().toISOString(),
    badges
  };

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`);
}

try {
  const badges = await fetchPublicBadges();
  await saveSnapshot(badges);
  console.log(`Synced ${badges.length} public Credly badges.`);
} catch (error) {
  if ([401, 403, 404].includes(error.status)) {
    await saveSnapshot([]);
    console.warn("Credly profile is unavailable publicly; removed the saved badge data.");
    process.exit(0);
  }

  const cached = await readCachedSnapshot();
  if (!cached) throw error;

  console.warn(`Credly sync failed; using the last saved public snapshot. ${error.message}`);
}
