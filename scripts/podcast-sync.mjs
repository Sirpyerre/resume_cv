/**
 * Descarga el RSS del podcast y guarda una copia en src/data/podcast-feed.json.
 *
 * Ese JSON SE COMMITEA: es el respaldo que usa el build cuando el feed no
 * responde. El build nunca lo reescribe (el disco de Netlify es efimero y nada
 * se commitea desde ahi), asi que refrescarlo es un paso manual:
 *
 *   npm run podcast:sync
 */
import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { PODCAST_FEED_URL, parsePodcastFeed } from "../src/lib/podcast-feed.js"

const OUT = join(dirname(fileURLToPath(import.meta.url)), "../src/data/podcast-feed.json")

const response = await fetch(PODCAST_FEED_URL)
if (!response.ok) {
  console.error(`Feed respondio ${response.status} ${response.statusText}`)
  process.exit(1)
}

const feed = parsePodcastFeed(await response.text())

if (!feed.episodes.length) {
  console.error("El feed no trajo episodios; no se sobrescribe el respaldo.")
  process.exit(1)
}

writeFileSync(OUT, `${JSON.stringify(feed, null, 2)}\n`)

console.log(`${feed.episodes.length} episodios guardados en src/data/podcast-feed.json`)
for (const e of feed.episodes) {
  console.log(`  - ${e.title} (${e.durationMinutes} min)`)
}
