# Remove Blog Feature — Mini Plan

> **For implementers:** one-phase plan. Epics are parallel streams: dispatch every
> epic whose dependencies are met at the same time, one agent per epic, same branch.
> All work lands in the existing PR.

**Goal:** Remove the unused blog feature, its routes, feeds, content, dependencies, and maintenance documentation.

**Scope:** Astro content collections, pages, shared site copy, RSS dependency, repository and editor guidance.

## Streams

| Epic | Delivers | Depends on | Files |
|-------|----------|------------|-------|
| 1.1 | Blog collection, pages, content, feed routes, and copy are removed | none | `src/content/blog/**`, `src/pages/blog/**`, `src/pages/pt/blog/**`, `src/pages/rss.xml.js`, `src/pages/pt/rss.xml.js`, `src/components/pages/BlogListPage.astro`, `src/content.config.ts`, `src/lib/i18n.ts`, `src/lib/site.ts` |
| 1.2 | Package and repo/editor instructions no longer advertise the feature | none | `package.json`, `package-lock.json`, `README.md`, `AGENTS.md`, `.cursor/rules/astro-components.mdc`, `.cursor/rules/astro-project.mdc`, `.cursor/rules/content-collections.mdc` |
| 1.3 | Cross-repository verification confirms no feature routes or imports remain | 1.1, 1.2 | — (verification only) |

---

### Epic 1.1: Remove blog product code

**Goal:** The site no longer builds blog listing/article pages or RSS feeds.
**Scope:** Blog content, routes, collection schema, shared copy, and collection helpers.
**Dependencies:** none
**Done when:** Blog markdown, route files, component, collection schema, blog/RSS copy, and blog-only type signatures are removed; project pages continue to use the shared project collection helpers.
**Status:** Done

#### Task 1.1.1: Remove blog collection and routes

- [x] Done

**Context:** `src/content.config.ts` declares both blog and project collections. English and Portuguese blog routes and RSS endpoints fetch the blog collection. `src/components/pages/BlogListPage.astro` renders the listing.

**Implementation vision:** Delete the blog content and route trees, both RSS route files, and the shared blog listing component. Remove the blog collection/schema while retaining the project collection. Narrow `getCollectionByLocale`, `findTranslatedEntry`, and `getSectionPath` to project entries and remove blog and RSS labels from localized site copy.

**Files:**
- Delete: `src/content/blog/*.md`
- Delete: `src/pages/blog/index.astro`
- Delete: `src/pages/blog/[slug].astro`
- Delete: `src/pages/pt/blog/index.astro`
- Delete: `src/pages/pt/blog/[slug].astro`
- Delete: `src/pages/rss.xml.js`
- Delete: `src/pages/pt/rss.xml.js`
- Delete: `src/components/pages/BlogListPage.astro`
- Modify: `src/content.config.ts`
- Modify: `src/lib/i18n.ts`
- Modify: `src/lib/site.ts`

**Verification:** `rg -n -i 'blog|rss' src` returns no product-code references, and `npm run build` succeeds after integration.

**Done when:** Astro builds all remaining routes without blog or RSS output and project localization works.

### Epic 1.2: Remove blog maintenance references

**Goal:** Repository guidance and dependencies describe only supported site features.
**Scope:** npm dependencies, README, agent guidance, and Cursor rules.
**Dependencies:** none
**Done when:** The RSS package is removed from manifest and lockfile, and repository/editor docs contain no blog setup instructions or blog-only examples.
**Status:** Done

#### Task 1.2.1: Remove blog documentation and RSS dependency

- [x] Done

**Context:** `README.md`, `AGENTS.md`, and `.cursor/rules/` still document blog collections and RSS routes. `@astrojs/rss` is present in the npm manifest and lockfile.

**Implementation vision:** Delete obsolete blog authoring and schema guidance, update the project-only collection instructions, and uninstall the RSS integration so its direct and unused transitive dependencies leave the lockfile.

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `README.md`
- Modify: `AGENTS.md`
- Modify: `.cursor/rules/astro-components.mdc`
- Modify: `.cursor/rules/astro-project.mdc`
- Modify: `.cursor/rules/content-collections.mdc`

**Verification:** `npm ls @astrojs/rss` reports the package absent; `rg -n -i 'blog|rss' README.md AGENTS.md .cursor` returns no supported-feature references.

**Done when:** Package metadata and repository guidance no longer direct contributors to create or maintain blog content or feeds.

### Epic 1.3: Verify blog removal

**Goal:** The built static site contains no blog routes or RSS feeds and the existing project pages remain available.
**Scope:** Integration checks across the repository and production build output.
**Dependencies:** 1.1, 1.2
**Done when:** The production build succeeds, generated blog/RSS routes are absent, project routes remain, and `git diff --check` passes.
**Status:** Done

#### Task 1.3.1: Verify generated routes and repository references

- [x] Done

**Context:** Removing a content folder alone would leave unused routes, package dependencies, and contributor instructions behind.

**Implementation vision:** Run the repo's build acceptance gate. Search source, configuration, and maintained docs for blog/RSS references, then inspect `dist/` to ensure no blog pages or feeds were emitted while project pages remain present.

**Files:**
- Test: `npm run build`
- Test: repository search and generated `dist/` route inspection

**Verification:** `npm run build`; inspect `dist/` for `/projects/` routes and confirm no blog route or RSS artifact exists.

**Done when:** Build and source checks pass, with all project pages intact and no blog or feed routes generated.
