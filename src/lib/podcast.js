import snapshot from "../data/podcast-feed.json"
import { PODCAST_FEED_URL, parsePodcastFeed } from "./podcast-feed.js"

const FETCH_TIMEOUT_MS = 5000

export const PODCAST_PLATFORMS = [
  {
    id: "spotify",
    name: "Spotify",
    url: "https://open.spotify.com/show/06OAxwHR6ddb3RWKy6EYQh",
  },
  {
    id: "apple",
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/us/podcast/el-developer-de-a-pie/id1888271174",
  },
  {
    id: "youtube",
    name: "YouTube",
    // Sin el parametro ?si=, que es un token de seguimiento de comparticion.
    url: "https://youtube.com/playlist?list=PLbcSmMovjrxK5JhgcejQE-YPlx-wlDvOC",
  },
]

/**
 * Devuelve el feed del podcast para renderizar en build.
 *
 * Intenta el RSS en vivo para que los episodios nuevos aparezcan con solo
 * redesplegar. Si el feed no responde a tiempo, cae al snapshot versionado:
 * un deploy no debe fallar porque un servicio ajeno este caido.
 */
export async function getPodcastFeed() {
  try {
    const response = await fetch(PODCAST_FEED_URL, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const feed = parsePodcastFeed(await response.text())

    if (!feed.episodes.length) {
      throw new Error("feed sin episodios")
    }

    return { ...feed, source: "rss" }
  } catch (error) {
    console.warn(
      `[podcast] RSS no disponible (${error.message}); usando src/data/podcast-feed.json`,
    )
    return { ...snapshot, source: "snapshot" }
  }
}

/**
 * Las notas del episodio en el RSS son un volcado largo, con hashtags y
 * enlaces al final; no caben en una tarjeta. Se recorta en el limite de
 * palabra y se quitan las colas de hashtags y URLs, que solo son ruido aqui.
 */
export function episodeExcerpt(description = "", maxLength = 220) {
  const clean = description
    .replace(/https?:\/\/\S+/g, "")
    .replace(/#\w+/g, "")
    .replace(/\s+/g, " ")
    .trim()

  if (clean.length <= maxLength) return clean

  const cut = clean.slice(0, maxLength)
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`
}
