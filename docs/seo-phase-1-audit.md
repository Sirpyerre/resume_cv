# SEO técnico — Fase 1

## Auditoría de rutas heredadas

El router de React anterior exponía estas rutas: `/`, `/privacy-policy`,
`/terms-of-service`, `/cookie-policy`, `/blog` y `/blog/:slug`. Astro conserva
esas rutas. Netlify/Astro normaliza las páginas a barra final; `netlify.toml`
incluye redirects `301` para las variantes históricas `/Blog` y `/Blog/:slug`,
y para los nombres anteriores de sitemap (`/sitemap-index.xml` y
`/sitemap-0.xml`). No se añadió ningún redirect a un destino supuesto.

Las páginas de servicios, portafolio, FAQ y contacto son rutas propias de la
versión actual; en la app anterior esas secciones vivían en la página de inicio.

## Estado técnico en el código

- `src/pages/sitemap.xml.js` produce `/sitemap.xml`, excluye `/404` y omite las
  rutas legales `noindex` y las páginas inglesas que canonicalizan al español.
- `public/robots.txt` permite rastreo y anuncia el sitemap canónico.
- `BaseLayout.astro` genera canonical, hreflang, Open Graph y Twitter; las rutas
  sin equivalente usan canonical español. La página 404 no publica canonical ni
  hreflang y conserva `noindex`.
- JSON-LD base y específico se genera desde `src/lib/schema.js` y las páginas
  que lo necesitan. Los títulos y descripciones de la home y los posts usan
  texto dirigido a visitantes, no detalles de implementación.
- Los metadatos Open Graph ya no declaran dimensiones fijas que no coinciden
  con las imágenes seleccionadas.

## Search Console

El reporte `npm run gsc:report` consulta rendimiento de búsqueda usando una
credencial de solo lectura. Enviar `https://pedrorojas.lat/sitemap.xml` se hace
en la interfaz de Search Console: propiedad `sc-domain:pedrorojas.lat` →
**Sitemaps** → enviar `sitemap.xml`. Después de que Google procese el sitemap,
revisar **Páginas** y exportar los errores de URL antigua para confirmar si hace
falta algún redirect adicional. El reporte de rendimiento no incluye esos
errores de indexación.
