import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// El blog y el podcast solo existen en espanol. Sus rutas /en/* se sirven
// pero declaran su canonical hacia la version ES, asi que no entran al sitemap.
const EN_SPANISH_ONLY = /\/en\/(?:blog\/.+|podcast)$/

export default defineConfig({
  site: "https://pedrorojas.lat",
  // Netlify sirve dist/<ruta>/index.html en /<ruta> sin barra final. Fijarlo en
  // "never" alinea el sitemap con los canonical y los enlaces internos, que ya
  // se emiten sin barra; de lo contrario el sitemap apunta a URLs que redirigen.
  trailingSlash: "never",
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => !EN_SPANISH_ONLY.test(page),
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    envPrefix: ["PUBLIC_", "VITE_"],
  },
})
