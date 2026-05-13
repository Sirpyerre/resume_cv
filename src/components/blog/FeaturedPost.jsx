import React from "react"
import { Link } from "react-router-dom"

function CoverPlaceholder({ label }) {
  return (
    <div className="relative w-full h-full min-h-[220px] bg-crema-medio overflow-hidden rounded-lg flex items-end p-3">
      {/* diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D9CEBC 0, #D9CEBC 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
        }}
      />
      {label && (
        <span className="relative z-10 text-[10px] font-bold tracking-widest text-tinta-suave border border-tinta-suave/30 bg-crema/80 px-2 py-1 rounded">
          {label}
        </span>
      )}
    </div>
  )
}

export default function FeaturedPost({ post }) {
  if (!post) return null

  return (
    <div className="border border-crema-oscuro rounded-xl overflow-hidden bg-crema hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        {/* Cover */}
        <div className="md:w-[45%] min-h-[220px]">
          <CoverPlaceholder label={post.coverLabel} />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-widest text-cobre border border-cobre/40 rounded-full px-3 py-1">
              ★ DESTACADO
            </span>
            {post.tags?.slice(0, 1).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[11px] font-bold tracking-widest text-verde border border-verde/40 rounded-full px-3 py-1"
              >
                ● {tag.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="font-lora text-2xl md:text-3xl font-bold text-tinta leading-tight mb-3">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-tinta-suave text-sm leading-relaxed mb-4 line-clamp-3">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-tinta-suave/70 mb-4">
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full bg-tinta-suave/40" />
            <span>⏱ {post.readingTime} min de lectura</span>
            <span className="w-1 h-1 rounded-full bg-tinta-suave/40" />
            <span>por <strong className="text-tinta-suave">Pedro R.</strong></span>
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags?.map((tag) => (
              <span key={tag} className="text-xs text-tinta-suave/60">
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-verde hover:text-verde/80 transition-colors"
            >
              Leer el post →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatDate(dateStr) {
  if (!dateStr) return ""
  const d = new Date(dateStr + "T12:00:00")
  return d.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })
}
