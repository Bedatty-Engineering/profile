import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    locale: z.enum(["en", "pt"]),
    translationKey: z.string(),
    pathSlug: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string())
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    locale: z.enum(["en", "pt"]),
    translationKey: z.string(),
    pathSlug: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    github_link: z.string().url(),
    demo_link: z.string().url().optional(),
    architecture_notes: z.string()
  })
});

export const collections = { blog, projects };
