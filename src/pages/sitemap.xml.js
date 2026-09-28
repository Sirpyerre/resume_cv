import { getCollection } from "astro:content"
import { SITE_CONFIG } from "../config/site.js"
import { sortBlogEntries } from "../lib/blog.js"
import { withTrailingSlash } from "../lib/i18n.js"

/**
 * Sitemap propio, en /sitemap.xml y en un solo archivo.
 *
 * Se hace a mano en vez de con @astrojs/sitemap porque esa integracion siempre
 * escribe `<base>-index.xml` + `<base>-0.xml` (su opcion filenameBase solo
 * cambia el prefijo, no el patron), asi que no puede producir un /sitemap.xml
 * plano. Eso obligaba a un indice intermedio que solo apuntaba a otro archivo
 * —el sitemap que GSC ya tiene enviado es /sitemap.xml— y ademas la integracion
 * corre en `astro:build:done`, de modo que en `astro dev` el sitemap no existia.
 * Siendo una ruta normal, ahora funciona igual en dev, preview y produccion.
 *
 * El límite del protocolo son 50.000 URLs por archivo; el sitio tiene menos de 50.
 */

// El podcast no tiene versión inglesa propia y canonicaliza a español.
const EN_SPANISH_ONLY = /^\/en\/podcast$/
// Legal pages are intentionally noindex in their page layouts and should not
// be advertised to search engines through the sitemap.
const NOINDEX_ROUTES = new Set([
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/en/privacy-policy",
  "/en/terms-of-service",
  "/en/cookie-policy",
])

/** "./en/services.astro" -> "/en/services";  "./index.astro" -> "/" */
function fileToRoute(file) {
  const route = file
    .replace(/^\.\//, "/")
    .replace(/\.astro$/, "")
    .replace(/\/index$/, "")
  return route === "" ? "/" : route
}

export async function GET() {
  const posts = sortBlogEntries(await getCollection("blog"))
  const postDates = new Map(posts.map((p) => [p.id, new Date(p.data.date)]))

  // Descubre las paginas estaticas leyendo src/pages, para que una pagina nueva
  // entre al sitemap sola. Las rutas dinamicas se expanden abajo con la coleccion.
  const staticRoutes = Object.keys(import.meta.glob("./**/*.astro"))
    .map(fileToRoute)
    .filter((route) => !route.includes("[") && route !== "/404" && !NOINDEX_ROUTES.has(route))

  const blogRoutes = [
    ...posts
      .filter((post) => post.data.language !== "en")
      .map((post) => ({ route: `/blog/${post.id}`, lastmod: postDates.get(post.id) })),
    ...posts
      .filter((post) => post.data.language === "en")
      .map((post) => ({ route: `/en/blog/${post.id}`, lastmod: postDates.get(post.id) })),
  ]

  const entries = [...staticRoutes.map((route) => ({ route })), ...blogRoutes]
    .filter(({ route }) => !EN_SPANISH_ONLY.test(route))
    .map(({ route, lastmod }) => ({
      loc: `${SITE_CONFIG.SITE_URL}${withTrailingSlash(route)}`,
      lastmod,
    }))
    .sort((a, b) => a.loc.localeCompare(b.loc))

  const urls = entries
    .map(({ loc, lastmod }) =>
      lastmod
        ? `  <url><loc>${loc}</loc><lastmod>${lastmod.toISOString()}</lastmod></url>`
        : `  <url><loc>${loc}</loc></url>`,
    )
    .join("\n")

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  )
}
