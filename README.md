# Lucas C. Bedatty Portfolio

Static developer portfolio built with Astro, TypeScript, TailwindCSS, and markdown content collections. The site is designed for a Cloud / DevOps engineer profile and is deployed as static output served by a Cloudflare Worker.

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

`npm run build` also generates the social preview image used by Open Graph and Twitter cards.

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

## Validation

Pull requests targeting `main` run two GitHub Actions workflows:

- `Validation`: installs dependencies, runs `npm run build`, validates `wrangler deploy --dry-run`, and checks required build artifacts
- `Secrets Scan`: runs Gitleaks against the repository history

## Deployment

The Astro config is set to `output: "static"` and the Cloudflare Worker serves the generated `dist` directory.

### Cloudflare Worker

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Version command: `npx wrangler versions upload`
- Root directory: `/`

Worker configuration lives in [`wrangler.jsonc`](/home/b3da/personal/projects/Bedatty-Engineering/profile/wrangler.jsonc).

## Notes

- Styling is dark-mode-first and intentionally minimal.
- Content is markdown-driven to keep maintenance simple.
- JavaScript is kept minimal so the site stays fast and static.
