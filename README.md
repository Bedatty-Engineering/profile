# Lucas C. Bedatty Portfolio

Static developer portfolio built with Astro, TypeScript, TailwindCSS, and markdown content collections. The site is designed for a Cloud / DevOps engineer profile and optimized for static hosting.

## Stack

- Astro
- TypeScript
- TailwindCSS
- Markdown content collections

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build the static site:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Content management

### Add a project

Create a markdown file in [`/src/content/projects`](/home/b3da/personal/projects/Bedatty-Engineering/profile/src/content/projects) with this frontmatter shape:

```md
---
title: "Project title"
description: "Short summary"
technologies:
  - AWS
  - Terraform
github_link: "https://github.com/..."
demo_link: "https://example.com"
architecture_notes: "Short architectural summary"
---
```

The body below the frontmatter becomes the project detail page.

### Add a blog post

Create a markdown file in [`/src/content/blog`](/home/b3da/personal/projects/Bedatty-Engineering/profile/src/content/blog) with this frontmatter shape:

```md
---
title: "Post title"
date: 2026-03-09
description: "Short description"
tags:
  - AWS
  - DevOps
---
```

The markdown body is rendered into the blog article page automatically.

## Deployment

The Astro config is set to `output: "static"`, so deployment is straightforward.

### GitHub

- Build with `npm run build`
- Publish the generated [`/dist`](/home/b3da/personal/projects/Bedatty-Engineering/profile/dist) directory through your preferred GitHub workflow or GitHub Pages pipeline

### Cloudflare

- Use the same `npm run build` command
- Deploy the generated `dist` directory to Cloudflare Pages or serve it through a Cloudflare Worker/CDN static asset workflow
- Set the production URL in [`astro.config.mjs`](/home/b3da/personal/projects/Bedatty-Engineering/profile/astro.config.mjs) if the final domain changes

## Notes

- Styling is dark-mode-first and intentionally minimal.
- Content is markdown-driven to keep maintenance simple.
- JavaScript is kept minimal so the site stays fast and static.
