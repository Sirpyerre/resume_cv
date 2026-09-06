# pedrorojas.lat — Freelance Web Developer Portfolio

Personal portfolio and service landing page for **Pedro Rojas Reyes**, a web consultant and developer based in Puebla, México. Built to showcase services, portfolio projects, and drive client conversions for local businesses.

Live site: [pedrorojas.lat](https://pedrorojas.lat)

## About

A bilingual (ES/EN) static site built with Astro. Pages are prerendered to HTML at build time, and only the interactive pieces ship JavaScript as React islands. The design follows a light/dark theme with the palette and typography of the [Geeky](https://themewagon.github.io/geeky-nextjs/) theme, keeping the original forest-green accent.

Previously a React 18 + Vite single-page app with React Router and React Helmet; migrated to Astro for prerendered HTML, real per-page SEO, and a much smaller JS payload.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Astro 7 (static output) |
| Interactive components | React 19 islands |
| Content | Astro content collections (Markdown/MDX, Zod schema) |
| Styling | Tailwind CSS 3, CSS custom properties for theming |
| Fonts | Merriweather Sans (headings) + Raleway (body) |
| SEO | Native `<head>` metadata, JSON-LD, `@astrojs/sitemap` |
| Forms | Formspree |
| Image CDN | Cloudinary |
| Hosting | Netlify |

**Node ≥ 22.12 is required** (Astro 7). The version is pinned in `.nvmrc`, `package.json` (`engines`), and `netlify.toml` (`NODE_VERSION`).

## Architecture

```
src/
  pages/            Rutas (ES en la raiz, EN bajo /en)
  layouts/          BaseLayout: <head>, tema, navbar, footer
  components/
    pages/          Composicion por pagina (.astro)
    site/           Secciones estaticas (.astro)
    islands/        Componentes React hidratados
    legal/          Aviso de privacidad, terminos, cookies
    seo/            JsonLd.astro
  content/blog/     Posts en Markdown
  lib/              i18n, helpers de blog, builders de schema.org
```

Routing is file-based. Spanish lives at the root (`/services`) and English under a prefix (`/en/services`), configured with `i18n.routing.prefixDefaultLocale: false`.

Only seven components ship JavaScript: `SiteNavbar`, `ThemeToggle`, `ContactForm`, `FAQAccordion`, `PortfolioCarousel`, `ConsentBanner`, and `WhatsAppButton`. Everything else is static HTML.

## Theming

Colors are declared as RGB channels in CSS custom properties (`src/index.css`) and referenced from `tailwind.config.cjs` through `<alpha-value>`, so Tailwind opacity modifiers such as `text-tinta-suave/70` keep working while the whole palette can be swapped at runtime.

Theme resolution order:

1. A stored choice in `localStorage` wins, applied by a blocking inline script in `<head>` so there is no flash of the wrong theme.
2. With no stored choice, `prefers-color-scheme` drives it through a plain CSS media query — no JavaScript involved.

The accent shifts from `#2D6A4F` in light to `#4CAF80` in dark: the darker green only reaches 2.7:1 against the dark background and fails WCAG AA. All text pairs meet AA in both themes.

## SEO

- Per-page `<title>`, description, canonical, and Open Graph tags
- Self-referencing `hreflang` for both locales plus a per-page `x-default`
- JSON-LD: `LocalBusiness` (with Puebla geo data), `WebSite`, `Person`, `FAQPage`, `Service`, `BlogPosting`, `BreadcrumbList` — built in `src/lib/schema.js`
- Sitemap generated at build time as `sitemap-index.xml`; `robots.txt` points to it
- `trailingSlash: "never"` keeps sitemap URLs, canonicals, and internal links consistent

## Getting Started

```bash
npm install
npm run dev
```

| Script | Purpose |
|---|---|
| `npm run dev` | Dev server with HMR (localhost:4321) |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve `dist/` as Netlify will |
| `npm run gsc:report` | Google Search Console report |

Verify changes against `npm run preview` rather than the dev server: the sitemap and the final HTML only exist in a real build.

> If islands render empty after dependencies change, the Vite cache is stale. Stop the dev server, `rm -rf node_modules/.vite .astro`, and restart.

## Environment Variables

Copy `.env.example` to `.env` and fill it in:

```
VITE_FORMSPREE_FORM_ID=xxxxxxxx    # contact form endpoint
VITE_WHATSAPP_NUMBER=521XXXXXXXXXX # country code + number, no + or spaces
```

Both values are public by design and end up in the built HTML, so they are listed in `SECRETS_SCAN_OMIT_KEYS` in `netlify.toml`. Without that, Netlify's secret scanner fails the build when it finds them in `dist/`. Any new variable whose value reaches the output needs the same treatment.

In production these are set under Netlify → Site settings → Environment variables.

## Deployment

Netlify builds with `npm run build` and publishes `dist/`. Configuration, redirects, and the Node version live in `netlify.toml`.

This project is npm-only. Do not add `yarn.lock` — Netlify switches to Yarn when it sees one and the deploy breaks.
