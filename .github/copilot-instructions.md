# Copilot instructions for this repository

## Build, test, and lint

```bash
npm install
npm run dev
npm run sitemap
npm run build
npm run preview
```

- `npm run build` runs `vite build && node scripts/prerender.mjs`, so production builds include both the Vite bundle and a Puppeteer-based prerender pass.
- Netlify uses `npm run sitemap && npm run build` from `netlify.toml`.
- There is currently **no** `test` script, test runner, or lint script in `package.json`, so there is no full-test, single-test, or lint command to run in this repo.

## High-level architecture

- This is a React 18 + Vite single-page portfolio site with a few legal subpages. `src/main.jsx` mounts or hydrates the app under `BrowserRouter` and `HelmetProvider`.
- `src/App.jsx` is the top-level composition layer. It wraps the app in `LanguageProvider`, renders shared chrome (`Navbar`, `Footer`, `ConsentBanner`, `WhatsAppButton`), and routes `/` to a fixed landing-page section sequence: `HeroSection`, `AboutSection`, `ServicesSection`, `ContributionsSection`, `FAQSection`, `ContactSection`. Legal pages live in `src/pages/*.jsx`.
- Bilingual UI content is mostly centralized in `src/content/content.jsx` as `content.en` / `content.es`. Components generally read `const { language } = useLanguage()` and then `const t = content[language]` or one nested branch such as `content[language].services`.
- SEO is split across runtime and build time:
  - `src/components/seo/SEOSimple.jsx` injects meta tags plus JSON-LD schemas with `react-helmet-async`.
  - `src/utils/seo-generator.js` regenerates `public/sitemap.xml` and `public/robots.txt`.
  - `scripts/prerender.mjs` serves `dist/`, opens it with Puppeteer, waits for the homepage to render, and rewrites `dist/index.html` with prerendered HTML.
- Environment-driven contact flows are wired directly in UI components:
  - `VITE_WHATSAPP_NUMBER` is used by the navbar, hero CTA, and floating WhatsApp button.
  - `VITE_FORMSPREE_FORM_ID` is used by `ContactSection`; without it, the form intentionally simulates a successful submission in-browser instead of sending a real request.

## Key conventions

- Keep both locales in sync when editing visible copy. Most homepage strings live in `src/content/content.jsx`, but the legal pages and some utility UI (`ConsentBanner`, `WhatsAppButton`, SEO copy) keep bilingual text inline in their own files instead of pulling from `content.jsx`.
- Preserve section IDs and their cross-file wiring. The navbar scroll spy, section jump links, prerender script, and some CTA buttons depend on IDs like `hero`, `about`, `services`, `contributions`, `faq`, and `contact`.
- Do not assume every file in `src/components/sections` is live. The homepage currently mounts only the sections imported in `src/App.jsx`; older section components such as standalone portfolio/experience/projects/tech-stack variants exist but are not part of the current route tree.
- Use the shared Tailwind design tokens instead of ad-hoc color names. Custom palette entries like `crema`, `crema-medio`, `crema-oscuro`, `tinta`, `tinta-suave`, `verde`, and `cobre` are defined in `tailwind.config.cjs` and show up across the site.
- Follow the repo formatting conventions from `.prettierrc`: no semicolons, double quotes, LF line endings, 2-space indentation, and trailing commas where valid in ES5.
