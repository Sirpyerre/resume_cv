/**
 * Parseo del RSS del podcast.
 *
 * Solo se extraen cinco campos por episodio, asi que no vale la pena sumar una
 * dependencia de XML: alcanza con lectores acotados que entienden CDATA.
 * Vive aparte de podcast.js para que el script de sync pueda reutilizarlo sin
 * arrastrar nada de Astro.
 */

export const PODCAST_FEED_URL = "https://anchor.fm/s/1107c3128/podcast/rss"

function decodeEntities(value) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
}

function stripTags(value) {
  return decodeEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim()
}

/** Lee <tag>…</tag>, soportando CDATA y atributos. */
function readTag(xml, tag) {
  const match = xml.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, "i"),
  )
  if (!match) return ""
  const raw = match[1].trim()
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/)
  return (cdata ? cdata[1] : raw).trim()
}

/** Convierte "00:19:08" o "1148" a minutos enteros. */
export function durationToMinutes(value = "") {
  if (!value) return null
  const parts = value.split(":").map(Number)
  if (parts.some(Number.isNaN)) return null

  const seconds =
    parts.length === 3
      ? parts[0] * 3600 + parts[1] * 60 + parts[2]
      : parts.length === 2
        ? parts[0] * 60 + parts[1]
        : parts[0]

  return Math.max(1, Math.round(seconds / 60))
}

export function parsePodcastFeed(xml) {
  const channel = xml.slice(xml.indexOf("<channel"))
  const items = [...channel.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map((m) => m[0])

  const episodes = items.map((item) => {
    const title = stripTags(readTag(item, "title"))
    const description = stripTags(
      readTag(item, "description") || readTag(item, "itunes:summary"),
    )
    const pubDate = readTag(item, "pubDate")

    return {
      title,
      description,
      url: readTag(item, "link"),
      date: pubDate ? new Date(pubDate).toISOString() : null,
      durationMinutes: durationToMinutes(readTag(item, "itunes:duration")),
    }
  })

  // El feed llega del mas nuevo al mas viejo, pero no conviene confiar en ello.
  episodes.sort((a, b) => new Date(b.date ?? 0) - new Date(a.date ?? 0))

  return {
    title: stripTags(readTag(channel, "title")),
    description: stripTags(readTag(channel, "description")),
    episodes: episodes.filter((e) => e.title && e.url),
    fetchedAt: new Date().toISOString(),
  }
}
