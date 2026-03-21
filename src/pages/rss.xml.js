import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { localizedSite } from "../lib/site";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => data.locale === "en")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: localizedSite.en.rss.title,
    description: localizedSite.en.rss.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.data.pathSlug}/`
    }))
  });
}
