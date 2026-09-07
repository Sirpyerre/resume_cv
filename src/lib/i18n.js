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

export function getLocalizedPath(locale = defaultLocale, path = "/") {
  if (locale === "en") {
    return path === "/" ? "/en" : `/en${path}`
  }

  return path
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
    privacy: getLocalizedPath(locale, "/privacy-policy"),
    terms: getLocalizedPath(locale, "/terms-of-service"),
    cookies: getLocalizedPath(locale, "/cookie-policy"),
  }
}

export function getBlogCategories(locale = defaultLocale) {
  return blogCategories[locale] ?? blogCategories[defaultLocale]
}
