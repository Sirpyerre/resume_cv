import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"

// El script anti-FOUC del tema es is:inline (tiene que correr antes de pintar,
// asi que no puede ser un modulo diferido) y Astro no hashea lo que no procesa.
// Se hashea aqui, leyendo el mismo archivo que BaseLayout inyecta con ?raw:
// el hash se deriva de la fuente y no puede quedar obsoleto al editarla.
const themeInitSource = readFileSync(
  new URL("./src/scripts/theme-init.js", import.meta.url),
  "utf8",
)
const themeInitHash = `sha256-${createHash("sha256").update(themeInitSource).digest("base64")}`

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
  // El sitemap no es una integracion: vive en src/pages/sitemap.xml.js para
  // poder servirse en /sitemap.xml y en un solo archivo. Ver ese archivo.
  integrations: [react(), mdx()],
  // ---------------------------------------------------------------------------
  // CSP con hashes (Astro >=6, estable).
  //
  // Astro calcula el sha256 de cada <script> y <style> inline que emite (los
  // islands de React y el script anti-FOUC del tema) y los publica en un
  // <meta http-equiv="content-security-policy"> por pagina. Eso permite quitar
  // 'unsafe-inline' de script-src: hasta ahora el CSP no frenaba un script
  // inyectado, solo limitaba destinos.
  //
  // El resto de directivas se declaran aqui y no en netlify.toml porque una
  // directiva ausente cae en default-src: si la cabecera dijera
  // default-src 'self' sin script-src, bloquearia los propios inline de Astro
  // pese a que el meta los permite (ambas politicas se aplican a la vez).
  // En netlify.toml solo queda frame-ancestors, que el <meta> no puede expresar.
  // ---------------------------------------------------------------------------
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "form-action 'self' https://formspree.io",
        "img-src 'self' data: https://res.cloudinary.com",
        "font-src 'self' https://fonts.gstatic.com",
        "connect-src 'self' https://formspree.io",
        "manifest-src 'self'",
        "upgrade-insecure-requests",
      ],
      // resources NO incluye 'self' por defecto: hay que listarlo.
      scriptDirective: { resources: ["'self'"], hashes: [themeInitHash] },
      styleDirective: { resources: ["'self'", "https://fonts.googleapis.com"] },
    },
  },
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
