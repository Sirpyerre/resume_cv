import React from "react"
import { Link } from "react-router-dom"

function CoverImage({ src, alt, label, to }) {
  const imageBoxClass = "relative w-full h-full min-h-[220px] overflow-hidden rounded-lg"

  if (src) {
    return (
      <Link
        to={to}
        className="group block w-full h-full bg-crema rounded-xl p-3"
        aria-label={`Abrir post: ${alt}`}
      >
        <div className={imageBoxClass}>
          <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
          {label && (
            <span className="absolute bottom-3 left-3 z-10 text-[10px] font-bold tracking-widest text-tinta-suave border border-tinta-suave/30 bg-crema/80 px-2 py-1 rounded">
              {label}
            </span>
          )}
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={to}
      className="group block w-full h-full bg-crema rounded-xl p-3"
      aria-label={`Abrir post: ${alt}`}
    >
      <div className={`${imageBoxClass} bg-crema-oscuro flex items-center justify-center`}>
        {/* diagonal stripe pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(217, 206, 188, 0.95) 0px, rgba(217, 206, 188, 0.95) 8px, rgba(245, 240, 232, 0.4) 8px, rgba(245, 240, 232, 0.4) 16px)",
          }}
        />
        {label && (
          <span className="relative z-10 text-[10px] font-bold tracking-widest text-tinta-suave border border-tinta-suave/30 bg-crema/80 px-2 py-1 rounded">
            {label}
          </span>
        )}
      </div>
    </Link>
  )
}

export default function FeaturedPost({ post }) {
  if (!post) return null

  return (
    <div className="border border-crema-oscuro rounded-xl overflow-hidden bg-crema hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        {/* Cover */}
        <div className="md:w-[45%] min-h-[220px]">
          <CoverImage src={post.cover} alt={post.title} label={post.coverLabel} to={`/blog/${post.slug}`} />
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
          <h2 className="font-lora text-2xl md:text-3xl font-bold leading-tight mb-3">
            <Link
              to={`/blog/${post.slug}`}
              className="text-tinta hover:text-verde transition-colors"
            >
              {post.title}
            </Link>
          </h2>

          {/* Description */}
          <p className="text-tinta-suave text-sm leading-relaxed mb-4 line-clamp-3">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-tinta-suave/70 mb-4">
            <span>{formatDate(post.date)}</span>
            <span>⏱ {post.readingTime} min de lectura</span>
            <span>por <strong className="text-tinta-suave">Pedro R.</strong></span>
          </div>

          {/* Hashtags + CTA — same row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-tinta-suave border border-tinta-suave/30 rounded-full px-2.5 py-0.5"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-verde hover:text-verde/80 transition-colors whitespace-nowrap"
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
