import { content } from "../content/content.jsx"

const defaultLocale = "es"

const uiCopy = {
  es: {
    home: "Inicio",
    services: "Servicios",
    portfolio: "Portafolio",
    faq: "FAQ",
    contact: "Contacto",
    blog: "Blog",
    podcast: "Podcast",
    site: "SITIO",
    blogCategories: "CATEGORIAS DEL BLOG",
    backToTop: "Arriba",
    builtWith: "Construido con",
    switchLocale: "EN / English",
    recentPosts: "Publicaciones recientes",
    featuredPost: "Lectura destacada",
  },
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    faq: "FAQ",
    contact: "Contact",
    blog: "Blog",
    podcast: "Podcast",
    site: "SITE",
    blogCategories: "BLOG CATEGORIES",
    backToTop: "Top",
    builtWith: "Built with",
    switchLocale: "ES / Espanol",
    recentPosts: "Recent posts",
    featuredPost: "Featured read",
  },
}

const blogCategories = {
  es: [
    "SEO Local",
    "Casos de Estudio",
    "Desarrollo Web",
    "PyMEs",
    "Emprendimiento",
  ],
  en: [
    "Local SEO",
    "Case Studies",
    "Web Development",
    "SMBs",
    "Entrepreneurship",
  ],
}

export function getDictionary(locale = defaultLocale) {
  return content[locale] ?? content[defaultLocale]
}

export function getUiCopy(locale = defaultLocale) {
  return uiCopy[locale] ?? uiCopy[defaultLocale]
}

/**
 * Netlify sirve dist/<ruta>/index.html unicamente en /<ruta>/ y redirige 301
 * desde /<ruta>. Toda URL que emitamos (canonical, og:url, hreflang, enlaces
 * internos, sitemap) debe llevar la barra final o Google ve una cadena de
 * redirect apuntando a un canonical circular, y no indexa ninguna de las dos.
 * Ver trailingSlash en astro.config.mjs.
 */
export function withTrailingSlash(path = "/") {
  if (!path.startsWith("/")) {
    return path
  }

  return path.endsWith("/") ? path : `${path}/`
}

export function getLocalizedPath(locale = defaultLocale, path = "/") {
  if (locale === "en") {
    return withTrailingSlash(path === "/" ? "/en" : `/en${path}`)
  }

  return withTrailingSlash(path)
}

export function getAlternateLocalePath(locale = defaultLocale, path = "/") {
  return getLocalizedPath(locale === "en" ? "es" : "en", path)
}

export function getSiteLinks(locale = defaultLocale) {
  return {
    home: getLocalizedPath(locale, "/"),
    services: getLocalizedPath(locale, "/services"),
    portfolio: getLocalizedPath(locale, "/portfolio"),
    faq: getLocalizedPath(locale, "/faq"),
    contact: getLocalizedPath(locale, "/contact"),
    blog: getLocalizedPath(locale, "/blog"),
    podcast: getLocalizedPath(locale, "/podcast"),
    privacy: getLocalizedPath(locale, "/privacy-policy"),
    terms: getLocalizedPath(locale, "/terms-of-service"),
    cookies: getLocalizedPath(locale, "/cookie-policy"),
  }
}

export function getBlogCategories(locale = defaultLocale) {
  return blogCategories[locale] ?? blogCategories[defaultLocale]
}
