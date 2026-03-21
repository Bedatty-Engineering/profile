import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
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
  type: "content",
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
