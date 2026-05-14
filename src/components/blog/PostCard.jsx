import React from "react"
import { Link } from "react-router-dom"

function CoverThumbnail({ src, alt, label }) {
  if (src) {
    return (
      <div className="relative w-[140px] min-w-[140px] h-full min-h-[110px] overflow-hidden rounded-lg">
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
        {label && (
          <span className="absolute bottom-2 left-2 z-10 text-[9px] font-bold tracking-widest text-tinta-suave border border-tinta-suave/30 bg-crema/80 px-1.5 py-0.5 rounded leading-tight">
            {label}
          </span>
        )}
      </div>
    )
  }
  return (
    <div className="relative w-[140px] min-w-[140px] h-full min-h-[110px] bg-crema-medio overflow-hidden rounded-lg flex items-end p-2">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D9CEBC 0, #D9CEBC 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
        }}
      />
      {label && (
        <span className="relative z-10 text-[9px] font-bold tracking-widest text-tinta-suave border border-tinta-suave/30 bg-crema/80 px-1.5 py-0.5 rounded leading-tight">
          {label}
        </span>
      )}
    </div>
  )
}

function formatDate(dateStr) {
  if (!dateStr) return ""
  const d = new Date(dateStr + "T12:00:00")
  return d.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })
}

export default function PostCard({ post }) {
  if (!post) return null

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex gap-4 p-4 rounded-xl border border-crema-oscuro bg-crema hover:shadow-md transition-all"
    >
      <CoverThumbnail src={post.cover} alt={post.title} label={post.coverLabel} />

      <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
        {/* Top meta */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {post.tags?.slice(0, 1).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold tracking-widest text-verde border border-verde/40 rounded-full px-2 py-0.5"
            >
              ● {tag.toUpperCase()}
            </span>
          ))}
          <span className="text-xs text-tinta-suave/60">{formatDate(post.date)}</span>
          <span className="text-xs text-tinta-suave/60">{post.readingTime} min lectura</span>
        </div>

        {/* Title */}
        <h3 className="font-lora text-base sm:text-lg font-bold text-tinta leading-snug mb-2 group-hover:text-verde transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-tinta-suave/70 leading-relaxed mb-3 line-clamp-2">
          {post.description}
        </p>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <span key={tag} className="text-[11px] text-tinta-suave/50">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
