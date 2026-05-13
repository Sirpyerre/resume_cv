import React, { useEffect, useState } from "react"

function extractHeadings(html) {
  const matches = [...html.matchAll(/<h([23])[^>]*>(.*?)<\/h\1>/gi)]
  return matches.map((m) => ({
    level: parseInt(m[1], 10),
    text: m[2].replace(/<[^>]+>/g, ""),
    id: m[2]
      .replace(/<[^>]+>/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim()
      .replace(/\s+/g, "-"),
  }))
}

export default function PostTOC({ html }) {
  const [active, setActive] = useState("")
  const headings = extractHeadings(html || "")

  useEffect(() => {
    if (!headings.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-80px 0px -60% 0px" }
    )
    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [html])

  if (!headings.length) return null

  return (
    <nav className="bg-crema rounded-xl border border-crema-oscuro p-4 sticky top-24">
      <p className="text-[10px] font-bold tracking-widest text-tinta-suave/60 mb-3">CONTENIDO</p>
      <ul className="space-y-1.5">
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ paddingLeft: level === 3 ? "0.75rem" : "0" }}>
            <a
              href={`#${id}`}
              className={`block text-sm transition-colors hover:text-verde ${
                active === id ? "text-verde font-semibold" : "text-tinta-suave"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
