import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { localizedSite, site } from "../../lib/site";

export async function GET() {
  const posts = (await getCollection("blog", ({ data }) => data.locale === "pt")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: localizedSite.pt.rss.title,
    description: localizedSite.pt.rss.description,
    site: site.domain,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/pt/blog/${post.data.pathSlug}/`
    }))
  });
}
