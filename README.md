# pedrorojas.lat — Freelance Web Developer Portfolio

Personal portfolio and service landing page for **Pedro Rojas Reyes**, a web consultant and developer based in Puebla, México. Built to showcase services, portfolio projects, and drive client conversions for local businesses.

Live site: [pedrorojas.lat](https://pedrorojas.lat)

## About

A bilingual (ES/EN) single-page application focused on conversion and mobile-first UX. Features a service-oriented hero, project carousel, about section, and direct contact via WhatsApp and email.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 7 |
| SEO | React Helmet Async |
| Icons | React Icons 5 |
| Fonts | Lora (Google Fonts) |
| Image CDN | Cloudinary |
| Hosting | — |

## Features

- Bilingual content (Spanish / English) via Context API
- Mobile-first hero with service cards and WhatsApp CTA
- Project carousel with live screenshots
- About section with photo and "Why Me" trust cards
- Services section with pricing packages
- Contact section
- Cookie consent banner
- Optimized sitemap and SEO meta tags

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Environment Variables

Create a `.env` file at the root:

```
VITE_WHATSAPP_NUMBER=521XXXXXXXXXX
```
