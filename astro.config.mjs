import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// El blog y el podcast solo existen en espanol. Sus rutas /en/* se sirven
// pero declaran su canonical hacia la version ES, asi que no entran al sitemap.
// [^/]+ en vez de .+ para que el grupo no se coma la barra final de la URL.
const EN_SPANISH_ONLY = /\/en\/(?:blog\/[^/]+|podcast)\/?$/

export default defineConfig({
  site: "https://pedrorojas.lat",
  // Netlify sirve dist/<ruta>/index.html SOLO en /<ruta>/ y redirige 301 desde
  // /<ruta> (verificado con curl contra produccion en todas las rutas salvo la
  // home). Con "never" el sitemap y los canonical apuntaban a la forma sin barra
  // que redirige, mientras Google aterrizaba en la forma con barra cuyo canonical
  // apuntaba de vuelta: cadena de redirect + canonical circular, y nada se
  // indexaba. La barra final no se puede quitar con reglas de netlify.toml
  // porque Netlify normaliza la barra ANTES de aplicar los redirects.
  trailingSlash: "always",
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
