export function sortBlogEntries(entries) {
  return [...entries].sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  })
}

export function formatPostDate(date, locale = "es-MX") {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

export function getReadingTime(body = "") {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}
