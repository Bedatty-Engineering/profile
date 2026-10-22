import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    locale: z.enum(["en", "pt"]),
    translationKey: z.string(),
    pathSlug: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    github_link: z.string().url().optional(),
    demo_link: z.string().url().optional(),
    architecture_notes: z.string()
  })
});

export const collections = { projects };
