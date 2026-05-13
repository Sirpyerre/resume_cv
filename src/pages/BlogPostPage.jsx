import React from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { posts } from "virtual:blog-posts"
import { SITE_CONFIG } from "../config/site"
import PostContent from "../components/blog/PostContent"
import PostTOC from "../components/blog/PostTOC"
import PostCard from "../components/blog/PostCard"

function formatDate(dateStr) {
  if (!dateStr) return ""
  const d = new Date(dateStr + "T12:00:00")
  return d.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })
}

function ShareButtons({ url, title }) {
  const encoded = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  return (
    <div className="sticky top-24 bg-crema rounded-xl border border-crema-oscuro p-4">
      <p className="text-[10px] font-bold tracking-widest text-tinta-suave/60 mb-3">COMPARTIR</p>
      <div className="flex flex-col gap-2">
        <a
          href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-tinta-suave hover:text-verde transition-colors"
        >
          𝕏 Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-tinta-suave hover:text-verde transition-colors"
        >
          f Facebook
        </a>
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-tinta-suave hover:text-verde transition-colors"
        >
          💬 WhatsApp
        </a>
        <button
          onClick={() => navigator.clipboard?.writeText(url)}
          className="flex items-center gap-2 text-sm text-tinta-suave hover:text-verde transition-colors text-left"
        >
          🔗 Copiar enlace
        </button>
      </div>
    </div>
  )
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const canonicalUrl = `${SITE_CONFIG.SITE_URL}/blog/${post.slug}`
  const related = posts.filter((p) => p.slug !== post.slug && p.tags?.some((t) => post.tags?.includes(t))).slice(0, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Pedro Rojas Reyes",
      url: SITE_CONFIG.SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Pedro Rojas — Desarrollo Web Puebla",
      url: SITE_CONFIG.SITE_URL,
    },
    url: canonicalUrl,
    inLanguage: "es-MX",
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Pedro Rojas — Desarrollo Web Puebla</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Pedro Rojas Reyes" />
        {post.tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-crema min-h-screen pt-20">
        {/* Article header */}
        <header className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-tinta-suave/60 mb-6">
            <Link to="/" className="hover:text-verde transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-verde transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-tinta-suave truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <Link
                key={tag}
                to={`/blog`}
                className="text-[11px] font-bold tracking-widest text-verde border border-verde/40 rounded-full px-3 py-1 hover:bg-verde/10 transition-colors"
              >
                ● {tag.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold text-tinta leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-tinta-suave/70">
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full bg-tinta-suave/30" />
            <span>⏱ {post.readingTime} min de lectura</span>
            <span className="w-1 h-1 rounded-full bg-tinta-suave/30" />
            <span>por <strong className="text-tinta-suave">Pedro R.</strong></span>
          </div>

          <div className="mt-6 border-t border-crema-oscuro" />
        </header>

        {/* Body: content + sidebar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Article body */}
            <article className="flex-1 min-w-0">
              <PostContent html={post.content} />
            </article>

            {/* Sidebar */}
            <aside className="lg:w-64 xl:w-72 shrink-0 space-y-6">
              <PostTOC html={post.content} />
              <ShareButtons url={canonicalUrl} title={post.title} />

              {/* Related posts */}
              {related.length > 0 && (
                <div className="bg-crema rounded-xl border border-crema-oscuro p-4">
                  <p className="text-[10px] font-bold tracking-widest text-tinta-suave/60 mb-3">TAMBIÉN TE PUEDE INTERESAR</p>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        to={`/blog/${r.slug}`}
                        className="block text-sm text-tinta-suave hover:text-verde transition-colors leading-snug"
                      >
                        {r.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

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
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-crema-oscuro">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-verde font-semibold hover:underline"
            >
              ← Volver al blog
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
