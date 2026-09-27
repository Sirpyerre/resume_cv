# OpenGraph Image Guidelines

Specs for the social preview image used in `og:image` and `twitter:image`.

## Dimensions
- **Recommended size**: 1200px × 630px
- **Aspect ratio**: 1.91:1
- **File format**: JPG or PNG
- **File size**: Under 1MB

The site's current hero image is 617 × 641, while blog covers have different dimensions. `BaseLayout.astro` omits fixed `og:image:width` and `og:image:height` values so it does not publish dimensions that disagree with the selected image. For a future share-card asset, use the recommended 1200 × 630 dimensions and declare its actual dimensions if the metadata becomes image-specific.

## Content Suggestions
- Professional photo
- Name: "Pedro Rojas Reyes"
- Title: "Desarrollador Web Freelance — Puebla, México"
- Value proposition: sitios web para médicos, consultorios y negocios locales
- Website URL

## File Location

The current default is `/public/hero-section-resize1.png`, referenced from two places that must stay in sync:

- `src/layouts/BaseLayout.astro` — the `image` prop default
- `src/lib/schema.js` — `DEFAULT_IMAGE`, used by the JSON-LD builders

Blog posts override it with their own `cover` from the frontmatter.

## Brand Colors

Match the site palette defined in `src/index.css`:

| Role | Light | Dark |
|---|---|---|
| Background | `#FFFFFF` | `#1A1A1A` |
| Surface | `#F2F2F2` | `#242424` |
| Headings | `#222222` | `#F5F5F5` |
| Accent | `#2D6A4F` | `#4CAF80` |

Headings use Merriweather Sans; body copy uses Raleway.

Because the image renders against both themes on social platforms, avoid a transparent background — bake in a solid one.

## Tools for Creation
- Canva (canva.com)
- Figma (figma.com)
- Adobe Photoshop
- GIMP (free alternative)
