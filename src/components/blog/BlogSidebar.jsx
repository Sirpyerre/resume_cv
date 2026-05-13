import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function BlogSidebar({ posts, activeTags, onTagClick }) {
  const [search, setSearch] = useState("")

  // Aggregate categories (tags) with counts
  const tagCounts = {}
  posts.forEach((p) => {
    p.tags?.forEach((t) => {
      tagCounts[t] = (tagCounts[t] || 0) + 1
    })
  })
  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    onTagClick && onTagClick(null, e.target.value)
  }

  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="bg-crema rounded-xl border border-crema-oscuro p-4">
        <p className="text-[10px] font-bold tracking-widest text-tinta-suave/60 mb-3">BUSCAR</p>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-tinta-suave/40 text-sm">🔍</span>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="¿Qué buscas?"
            className="w-full pl-8 pr-3 py-2 text-sm border border-crema-oscuro rounded-lg bg-crema-medio placeholder:text-tinta-suave/40 text-tinta focus:outline-none focus:ring-1 focus:ring-verde"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-crema rounded-xl border border-crema-oscuro p-4">
        <p className="text-[10px] font-bold tracking-widest text-tinta-suave/60 mb-3">CATEGORÍAS</p>
        <ul className="space-y-2">
          {sortedTags.map(([tag, count]) => {
            const isActive = activeTags?.includes(tag)
            return (
              <li key={tag}>
                <button
                  onClick={() => onTagClick && onTagClick(tag)}
                  className={`flex justify-between items-center w-full text-sm transition-colors ${
                    isActive ? "text-verde font-semibold" : "text-tinta-suave hover:text-verde"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-verde" : "bg-crema-oscuro"}`} />
                    {capitalize(tag)}
                  </span>
                  <span className="text-xs text-tinta-suave/50">{count}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Popular tags */}
      <div className="bg-crema rounded-xl border border-crema-oscuro p-4">
        <p className="text-[10px] font-bold tracking-widest text-tinta-suave/60 mb-3">TAGS POPULARES</p>
        <div className="flex flex-wrap gap-2">
          {sortedTags.slice(0, 8).map(([tag]) => (
            <button
              key={tag}
              onClick={() => onTagClick && onTagClick(tag)}
              className={`text-xs px-2 py-1 rounded border transition-colors ${
                activeTags?.includes(tag)
                  ? "border-verde bg-verde/10 text-verde"
                  : "border-crema-oscuro text-tinta-suave hover:border-verde hover:text-verde"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-tinta rounded-xl p-5 text-crema">
        <p className="text-[10px] font-bold tracking-widest text-crema/50 mb-2">¿TU PYME EN PUEBLA?</p>
        <p className="font-lora text-base font-bold leading-snug mb-4">
          Agenda una consulta gratis y te digo qué necesita tu negocio.
        </p>
        <Link
          to="/#contact"
          className="inline-flex items-center gap-1 bg-verde text-crema text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-verde/90 transition-colors"
        >
          Contactar →
        </Link>
      </div>
    </aside>
  )
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
