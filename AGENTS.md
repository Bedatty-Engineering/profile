# AGENTS.md — Lucas Bedatty Portfolio

Guidelines for AI agents working in this repository.

---

## Project Overview

Static portfolio site for a Senior DevOps / Cloud Engineer. Built with **Astro v5**, **Tailwind CSS v3**, and **MDX**. Deployed as fully static output to `https://lucasbedatty.dev`.

---

## Commands

```bash
npm run dev      # local dev server (http://localhost:4321)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

No test runner is configured. Validate changes by running `npm run build` — a zero-error build is the acceptance gate.

---

## Repository Structure

```
src/
  components/      # Reusable .astro UI components
  content/
    blog/          # Blog posts (.md)
    projects/      # Project entries (.md)
  layouts/         # BaseLayout.astro, PostLayout.astro
  lib/
    site.ts        # All site-level constants (name, links, skills)
  pages/           # File-based routing (.astro, .js)
  styles/
    global.css     # Tailwind layers + global component classes
  content.config.ts  # Zod schemas for content collections
  env.d.ts         # Astro type references
astro.config.mjs   # Astro config (site URL, integrations)
tailwind.config.mjs # Tailwind theme (custom tokens + fonts)
```

---

## Design System

### Custom Color Tokens

| Token    | Hex / Value                     | Use                        |
|----------|---------------------------------|----------------------------|
| `ink`    | `#060816`                       | Page background            |
| `mist`   | `#8D9CB8`                       | Body copy, secondary text  |
| `cloud`  | `#78E6FF`                       | Primary accent, links      |
| `aurora` | `#6EE7B7`                       | Success, availability      |
| `steel`  | `#C7D2FE`                       | Metadata, dates, flags     |
| `line`   | `rgba(148,163,184,0.16)`        | Borders                    |
| `panel`  | `rgba(8,12,29,0.72)`            | Card backgrounds           |

Fonts: `Inter` (sans) and `JetBrains Mono` (mono).

### Global Component Classes

Defined in `src/styles/global.css` — always prefer these over repeating Tailwind chains:

| Class              | Description                                  |
|--------------------|----------------------------------------------|
| `.shell`           | Glass-effect card with border + glow shadow  |
| `.section-title`   | Mono uppercase eyebrow label                 |
| `.section-heading` | Large section heading                        |
| `.copy-muted`      | Muted body paragraph                         |
| `.button-primary`  | Filled CTA button                            |
| `.button-secondary`| Ghost CTA button                             |
| `.prose-cloud`     | Rich text styles for blog/project content    |
| `.panel-card`      | Hover-animated content card                  |
| `.tag-chip`        | Small pill label (technologies, tags)        |
| `.terminal-*`      | Terminal UI component classes                |

---

## Conventions

### Site Metadata
All personal data (name, email, GitHub, LinkedIn, description, skill groups) lives in `src/lib/site.ts`. **Never hardcode** these values in components or pages — always import from `site.ts`.

### Content Collections
- Collections are declared in `src/content.config.ts` with Zod schemas.
- Fetch entries with `getCollection("blog")` or `getCollection("projects")` — never read markdown files directly.
- Blog schema requires: `title`, `date` (ISO string), `description`, `tags[]`.
- Projects schema requires: `title`, `description`, `technologies[]`, `github_link` (URL); `demo_link` is optional.

### Astro Components
- Type component props with `interface Props` in the frontmatter fence.
- Frontmatter order: imports → data fetching → derived values.
- Dynamic routes (`[slug].astro`) must export `getStaticPaths()`.
- Internal links always use trailing slashes: `/blog/${post.id}/`.

### TypeScript
- Use TypeScript for all logic files. No plain `.js` files under `src/`.
- `astro.config.mjs` and `tailwind.config.mjs` are intentionally `.mjs` — leave them as is.

### Styling
- Use Tailwind utility classes for layout and spacing.
- Use global component classes (above) for recurring UI patterns.
- Do **not** add arbitrary colors — use only the defined token palette.
- Dark-only site — no light mode support needed.

---

## Content Guidelines

### Adding a Blog Post
Create `src/content/blog/<slug>.md` with valid frontmatter:
```yaml
---
title: "Post Title"
date: 2025-01-15
description: "One-sentence summary (≤ 160 chars)"
tags: ["AWS", "Terraform"]
---
```

### Adding a Project
Create `src/content/projects/<slug>.md` with valid frontmatter:
```yaml
---
title: "Project Name"
description: "What it does and why it matters"
technologies: ["EKS", "Karpenter", "Terraform"]
github_link: "https://github.com/Bedatty-Engineering/..."
architecture_notes: "Key design decisions and trade-offs"
---
```

### Adding a New Page
Create `src/pages/<name>.astro`. Wrap content with `<BaseLayout>` and pass `title` and `description` props.

---

## What to Avoid

- Do not install UI component libraries (shadcn, daisyUI, etc.) — the design system is custom.
- Do not add client-side JavaScript frameworks (React, Vue, Svelte) — this is an Astro-only project.
- Do not add a database or server-side API routes — the site is fully static.
- Do not modify `astro.config.mjs` site URL without updating DNS/deployment config.
- Do not create new Tailwind arbitrary color values — extend `tailwind.config.mjs` tokens instead.
