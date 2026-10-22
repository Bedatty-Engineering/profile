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
    seo_title: z.string(),
    seo_description: z.string(),
    schema_type: z.enum(["SoftwareSourceCode", "Organization"]).default("SoftwareSourceCode"),
    schema_name: z.string().optional(),
    technologies: z.array(z.string()),
    github_link: z.string().url().optional(),
    demo_link: z.string().url().optional(),
    architecture_notes: z.string()
  })
});

export const collections = { projects };
