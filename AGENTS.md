# LamdaSoft Agent Instructions

## Project Overview

The public website of **LamdaSoft**, a Tunisian agency selling web, mobile and
digitalisation work to small and medium businesses. Built on the
[AstroWind](https://github.com/onwidget/astrowind) template (MIT).

**Stack:** Astro v6 | Tailwind CSS v4 | TypeScript 5.9 | MDX | Sharp

Deployed to GitHub Pages on every push to `main` (`.github/workflows/actions.yaml`).

## Non-negotiable content rules

The agency is new and has no clients yet, so **trust is the site's scarcest
resource** — in small Tunisian cities one caught exaggeration ends a reputation.
These rules are product requirements, not style preferences:

1. **Never invent proof.** No client names, logos, testimonials, project counts,
   years-in-business, team sizes, or ratings. If a number or name isn't real,
   it doesn't ship — leave a visible `TODO` instead.
2. **Demos are labelled as demos.** Portfolio items say
   « Projet de démonstration ». Never imply a demo was paid client work.
3. **No compliance or certification claims.** For hosting, the approved wording
   is « Déploiement cloud, avec option d'hébergement de vos données en Tunisie ».
   Do not write « conforme », INPDP, or any certification the agency lacks.
4. **French only.** Arabic and English come later; don't add locales unprompted.
5. **Services stay generic.** Describe capabilities, never name a target
   business type (no "pour avocats", "pour agences de location").
6. **WhatsApp is the only conversion path.** Every CTA opens `wa.me`. No contact
   forms. Numbers and addresses live in `src/contact.ts` — nowhere else.

Business strategy behind these rules (niches, sales scripts, pricing) lives
outside this repo in `plans/first-client-plan.md`.

## Quick Reference

| Command           | Purpose                             |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Production build to `./dist/`       |
| `npm run preview` | Preview production build locally    |
| `npm run check`   | Run astro check + ESLint + Prettier |
| `npm run fix`     | Auto-fix ESLint + Prettier issues   |

**Node.js requirement:** >= 22.12.0

## Architecture

### Directory Structure

```
src/
  assets/styles/tailwind.css   # Tailwind v4 config (themes, utilities, plugins)
  components/
    common/        # Shared: Image, Metadata, Analytics, ToggleTheme
    ui/            # Primitives: Button, Headline, WidgetWrapper, ItemGrid
    widgets/       # Page sections: Hero, Features, Pricing, Header, Footer
    blog/          # Blog: SinglePost, List, Pagination, Tags
    CustomStyles.astro  # CSS variables for colors and fonts
  content.config.ts    # Content Collections schema (Astro v6 location)
  data/post/           # Blog posts (.md, .mdx)
  layouts/             # Layout.astro, PageLayout.astro, MarkdownLayout.astro
  pages/               # File-based routing
  utils/               # blog.ts, images.ts, permalinks.ts, frontmatter.ts
  config.yaml          # Site configuration (loaded as virtual module)
  navigation.ts        # Navigation structure
  types.d.ts           # TypeScript type definitions
vendor/integration/    # Custom Astro integration for config loading
```

### Path Aliases

Use `~/` to import from `src/`:

```typescript
import Image from '~/components/common/Image.astro';
import { SITE } from 'astrowind:config';
```

### Configuration System

Site config lives in `src/config.yaml` and is loaded as a Vite virtual module `astrowind:config` by the custom integration in `vendor/integration/`. Exports: `SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`, `ANALYTICS`.

## Tailwind CSS v4

Configuration is CSS-first in `src/assets/styles/tailwind.css`:

- **Theme tokens:** `@theme { --color-primary: var(--aw-color-primary); ... }`
- **Custom utilities:** `@utility bg-page { ... }`
- **Dark mode:** Class-based via `@variant dark (&:where(.dark, .dark *))`
- **Plugins:** `@plugin "@tailwindcss/typography"`
- **Custom variant:** `@custom-variant intersect (&:not([no-intersect]))`

CSS variables for colors/fonts are defined in `src/components/CustomStyles.astro` with light/dark theme variants.

The Vite plugin `@tailwindcss/vite` is configured in `astro.config.ts` (not as an Astro integration).

### Class Merging

Components use `twMerge` from `tailwind-merge` v3 for conditional class composition.

## Content Collections

Defined in `src/content.config.ts` using the Astro v6 Content Layer API with `glob()` loader. Posts are in `src/data/post/` as `.md` or `.mdx` files.

Post frontmatter: `title` (required), `publishDate`, `updateDate`, `draft`, `excerpt`, `image`, `category`, `tags`, `author`, `metadata`.

## Component Patterns

- Props extend interfaces from `~/types`
- Use `class:list` for conditional classes
- Use `twMerge()` when accepting className overrides
- Use named slots for layout composition
- Widget components accept standardized props (see `~/types`)

## Image Handling

`src/components/common/Image.astro` supports:

- Local images via `astro:assets` (optimized by Sharp)
- Remote images via Unpic CDN
- Allowed domains (for providers Unpic can't detect, processed by Sharp): `cdn.pixabay.com`

Hero images use `loading="eager"` and `fetchpriority="high"`.

## Verification Checklist

After changes, always verify:

1. `npm run build` succeeds
2. `npm run check` passes (astro check + ESLint + Prettier)
3. Visual check in browser: homepage, blog, dark mode, mobile menu
