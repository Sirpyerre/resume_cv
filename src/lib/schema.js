import { SITE_CONFIG } from "../config/site.js"
import { getDictionary } from "./i18n.js"

const CONTEXT = "https://schema.org"
const EMAIL = "contacto@pedrorojas.lat"
const TELEPHONE = "+52-2224122606"
const SAME_AS = ["https://www.linkedin.com/in/sirpyerre", "https://github.com/sirpyerre"]
const DEFAULT_IMAGE = "/hero-section-resize1.png"

const es = (language, spanish, english) => (language === "en" ? english : spanish)

const absolute = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_CONFIG.SITE_URL}${path}`

const PUEBLA_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Puebla",
  addressRegion: "Puebla",
  addressCountry: "MX",
}

/**
 * Los tres paquetes con sus precios en MXN. Viven aqui porque tanto el
 * OfferCatalog del LocalBusiness como el de /services los necesitan.
 */
function buildOffers(language) {
  return [
    {
      name: es(language, "Presencia Esencial", "Essential Presence"),
      description: es(
        language,
        "Sitio web de 3-5 paginas, rapido y optimizado para Google",
        "3-5 page website, fast and Google-optimized",
      ),
      price: "5000",
    },
    {
      name: es(language, "Web App Personalizada", "Custom Web App"),
      description: es(
        language,
        "Sistemas de reservas, cotizadores y portales a medida",
        "Booking systems, quote tools, and custom portals",
      ),
      price: "15000",
    },
    {
      name: es(
        language,
        "Automatización de Procesos y Sistemas Internos",
        "Process Automation and Internal Systems",
      ),
      description: es(
        language,
        "Sistemas web para centralizar información y organizar procesos internos, según el alcance del proyecto.",
        "Web systems to centralize information and organize internal workflows, scoped to each project.",
      ),
      price: "20000",
    },
    {
      name: es(language, "Mantenimiento Mensual", "Monthly Maintenance"),
      description: es(
        language,
        "Soporte tecnico, actualizaciones y monitoreo mensual",
        "Technical support, updates, and monthly monitoring",
      ),
      price: "1500",
    },
  ].map((offer) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: offer.name,
      description: offer.description,
    },
    price: offer.price,
    priceCurrency: "MXN",
  }))
}

export function buildLocalBusiness(language = "es") {
  return {
    "@context": CONTEXT,
    "@type": "LocalBusiness",
    name: "Pedro Rojas — Desarrollo Web y Software a Medida",
    description: es(
      language,
      "Desarrollo web y software a medida para empresas en Puebla, desde sitios profesionales hasta sistemas internos.",
      "Web development and custom software for Puebla businesses, from professional websites to internal systems.",
    ),
    url: absolute("/"),
    telephone: TELEPHONE,
    email: EMAIL,
    founder: {
      "@type": "Person",
      name: "Pedro Rojas Reyes",
      jobTitle: es(language, "Desarrollador Web Freelance", "Freelance Web Developer"),
      url: absolute("/"),
    },
    address: { ...PUEBLA_ADDRESS, postalCode: "72490" },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.0414,
      longitude: -98.2063,
    },
    areaServed: {
      "@type": "City",
      name: "Puebla",
      sameAs: "https://www.wikidata.org/wiki/Q125293",
    },
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Transferencia bancaria, efectivo",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: es(language, "Servicios Web", "Web Services"),
      itemListElement: buildOffers(language),
    },
    sameAs: SAME_AS,
  }
}

export function buildWebSite() {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    name: "Pedro Rojas — Desarrollo Web y Software a Medida en Puebla",
    url: absolute("/"),
    inLanguage: ["es-MX", "en-US"],
    author: {
      "@type": "Person",
      name: "Pedro Rojas Reyes",
    },
  }
}

export function buildPerson(language = "es") {
  return {
    "@context": CONTEXT,
    "@type": "Person",
    name: "Pedro Rojas Reyes",
    jobTitle: es(language, "Desarrollador Web Freelance", "Freelance Web Developer"),
    description: es(
      language,
      "Consultor y desarrollador web en Puebla con mas de 10 anos de experiencia. Especialista en sitios web para negocios locales.",
      "Web consultant and developer in Puebla with 10+ years of experience. Specialist in websites for local businesses.",
    ),
    url: absolute("/"),
    email: EMAIL,
    telephone: TELEPHONE,
    image: absolute(DEFAULT_IMAGE),
    address: PUEBLA_ADDRESS,
    knowsAbout: [
      "Web Development",
      "React",
      "Go",
      "Node.js",
      "SEO",
      "Cloud Infrastructure",
      "Tailwind CSS",
    ],
    sameAs: SAME_AS,
  }
}

/**
 * Lee las preguntas del mismo diccionario que renderiza FAQAccordion, para que
 * el schema no se desincronice del contenido visible.
 */
export function buildFaqPage(language = "es") {
  const items = getDictionary(language)?.faq?.items

  return buildFaqSchema(items)
}

export function buildFaqSchema(items = []) {

  if (!items?.length) {
    return null
  }

  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function buildServiceCatalog(language = "es") {
  return {
    "@context": CONTEXT,
    "@type": "Service",
    serviceType: es(language, "Desarrollo web", "Web development"),
    name: es(language, "Servicios de desarrollo web y software a medida", "Web development and custom software services"),
    description: es(
      language,
      "Desarrollo web, aplicaciones personalizadas y sistemas internos para empresas en Puebla.",
      "Websites, custom applications, and internal systems for businesses in Puebla.",
    ),
    provider: {
      "@type": "LocalBusiness",
      name: "Pedro Rojas — Desarrollo Web y Software a Medida",
      url: absolute("/"),
      address: { ...PUEBLA_ADDRESS, postalCode: "72490" },
    },
    areaServed: {
      "@type": "City",
      name: "Puebla",
      sameAs: "https://www.wikidata.org/wiki/Q125293",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: es(language, "Paquetes", "Packages"),
      itemListElement: buildOffers(language),
    },
  }
}

export function buildServiceDetail({ language = "es", name, description, path, price, priceDescription }) {
  return {
    "@context": CONTEXT,
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: absolute(path),
    provider: {
      "@type": "LocalBusiness",
      name: "Pedro Rojas — Desarrollo Web y Software a Medida",
      url: absolute("/"),
      address: { ...PUEBLA_ADDRESS, postalCode: "72490" },
    },
    areaServed: { "@type": "City", name: "Puebla", sameAs: "https://www.wikidata.org/wiki/Q125293" },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "MXN",
      description: priceDescription ?? es(
        language,
        "Precio inicial; la cotización final depende del alcance acordado.",
        "Starting price; the final quote depends on the agreed scope.",
      ),
    },
  }
}

export function buildPodcastSeries({ language = "es", description, image } = {}) {
  return {
    "@context": CONTEXT,
    "@type": "PodcastSeries",
    name: "El Developer de a Pie",
    description,
    url: absolute("/podcast/"),
    image,
    inLanguage: "es-MX",
    webFeed: "https://anchor.fm/s/1107c3128/podcast/rss",
    author: {
      "@type": "Person",
      name: "Pedro Rojas Reyes",
      url: absolute("/"),
    },
  }
}

export function buildBlogPosting(entry, language = "es", url) {
  const published = new Date(entry.data.date).toISOString()

  return {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    headline: entry.data.title,
    description: entry.data.description,
    image: absolute(entry.data.cover || DEFAULT_IMAGE),
    datePublished: published,
    dateModified: published,
    inLanguage: language === "en" ? "en-US" : "es-MX",
    keywords: [...entry.data.categories, ...entry.data.tags].join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: "Pedro Rojas Reyes",
      url: absolute("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "Pedro Rojas — Desarrollo Web y Software a Medida en Puebla",
      url: absolute("/"),
      logo: {
        "@type": "ImageObject",
        url: absolute("/apple-touch-icon.png"),
      },
    },
  }
}

/**
 * @param {Array<{name: string, path: string}>} crumbs rutas ya localizadas
 */
export function buildBreadcrumbList(crumbs = []) {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  }
}
