import React, { useState, useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { posts } from "virtual:blog-posts"
import { SITE_CONFIG } from "../config/site"
import FeaturedPost from "../components/blog/FeaturedPost"
import PostCard from "../components/blog/PostCard"
import BlogSidebar from "../components/blog/BlogSidebar"

const POSTS_PER_PAGE = 8

export default function BlogListPage() {
  const [page, setPage] = useState(1)
  const [activeTags, setActiveTags] = useState([])
  const [search, setSearch] = useState("")

  const featuredPost = posts.find((p) => p.featured) || posts[0]
  const restPosts = posts.filter((p) => p !== featuredPost)

  const filtered = useMemo(() => {
    let result = restPosts
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      )
    }
    if (activeTags.length) {
      result = result.filter((p) => activeTags.some((t) => p.tags?.includes(t)))
    }
    return result
  }, [restPosts, search, activeTags])

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pagePosts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
  const canonicalUrl = `${SITE_CONFIG.SITE_URL}/blog`
  const seoImage = featuredPost?.cover
    ? (featuredPost.cover.startsWith('http') ? featuredPost.cover : `${SITE_CONFIG.SITE_URL}${featuredPost.cover}`)
    : `${SITE_CONFIG.SITE_URL}/hero-section-resize1.png`

  const handleTagClick = (tag, searchValue) => {
    if (searchValue !== undefined) {
      setSearch(searchValue)
      setPage(1)
      return
    }
    if (!tag) return
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
    setPage(1)
  }

  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog — Desarrollo Web Freelance y SEO Local en Puebla",
    description:
      "Guías de desarrollo web freelance, SEO local y emprendimiento para médicos, consultorios y negocios en Puebla.",
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Pedro Rojas — Desarrollo Web Puebla",
      url: SITE_CONFIG.SITE_URL,
    },
    inLanguage: "es-MX",
  }

  const blogItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_CONFIG.SITE_URL}/blog/${post.slug}`,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: "Pedro Rojas Reyes",
          url: SITE_CONFIG.SITE_URL,
        },
      },
    })),
  }

  return (
    <>
      <Helmet>
        <title>Blog — Desarrollo Web Freelance y SEO Local en Puebla | Pedro Rojas</title>
        <meta
          name="description"
          content="Guías de desarrollo web freelance, SEO local y emprendimiento para médicos, consultorios y negocios en Puebla. Sin agencias caras, con resultados reales."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog — Desarrollo Web Freelance y SEO Local en Puebla" />
        <meta
          property="og:description"
          content="Guías de desarrollo web freelance, SEO local y emprendimiento para médicos, consultorios y negocios en Puebla. Sin agencias caras, con resultados reales."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={seoImage} />
        <meta property="og:site_name" content="Pedro Rojas — Desarrollo Web Puebla" />
        <meta property="og:locale" content="es_MX" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog — Desarrollo Web Freelance y SEO Local en Puebla" />
        <meta
          name="twitter:description"
          content="Guías de desarrollo web freelance, SEO local y emprendimiento para médicos, consultorios y negocios en Puebla. Sin agencias caras, con resultados reales."
        />
        <meta name="twitter:image" content={seoImage} />

        <script type="application/ld+json">{JSON.stringify(blogCollectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(blogItemListSchema)}</script>
      </Helmet>

      <div className="bg-crema min-h-screen pt-20">
        {/* Hero header — wider than content (max-w-screen-xl) but not full-width */}
        <div className="max-w-screen-xl mx-auto bg-crema-medio border-t border-b border-crema-oscuro mt-6 mb-10 px-4 sm:px-8">
          <section className="max-w-3xl mx-auto pt-12 pb-12 text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-verde border border-verde/40 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-verde" />
                BLOG · PUEBLA, MÉXICO
              </div>
              <h1 className="font-lora text-4xl sm:text-5xl font-bold text-tinta leading-tight mb-4">
                Desarrollo web freelance,<br />
                SEO local y emprendimiento<br />
                para negocios en{" "}
                <em className="text-verde">Puebla.</em>
              </h1>
              <p className="text-tinta-suave text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                Casos reales, guías prácticas y tips honestos para dueños de PyMEs que quieren un sitio
                web que <em>sí</em> les traiga clientes — sin agencias caras ni promesas vacías.
              </p>
            </section>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          {/* Featured post */}
          {featuredPost && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-tinta flex items-center gap-2">
                  <span className="text-verde font-mono text-sm">&lt;/&gt;</span> Lectura destacada
                </h2>
              </div>
              <FeaturedPost post={featuredPost} />
            </section>
          )}

          {/* Recent posts + sidebar */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main column */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-tinta flex items-center gap-2">
                  <span className="text-verde font-mono text-sm">&lt;/&gt;</span> Recientes
                </h2>
                {filtered.length > 0 && (
                  <span className="text-xs text-tinta-suave/60">
                    Mostrando {(currentPage - 1) * POSTS_PER_PAGE + 1}–
                    {Math.min(currentPage * POSTS_PER_PAGE, filtered.length)} de {filtered.length}
                  </span>
                )}
              </div>

              {pagePosts.length === 0 ? (
                <p className="text-tinta-suave/60 text-sm py-8 text-center">
                  No se encontraron posts con esos filtros.
                </p>
              ) : (
                <div className="space-y-4">
                  {pagePosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1 mt-8">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-lg border border-crema-oscuro text-tinta-suave text-sm flex items-center justify-center hover:border-verde hover:text-verde disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    ‹
                  </button>
                  {getPaginationRange(currentPage, totalPages).map((item, i) =>
                    item === "..." ? (
                      <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-tinta-suave/40 text-sm">
                        ...
                      </span>
                    ) : (
                      <button
                        key={item}
                        onClick={() => setPage(item)}
                        className={`w-9 h-9 rounded-lg border text-sm flex items-center justify-center transition-colors ${
                          currentPage === item
                            ? "border-verde bg-verde text-crema font-bold"
                            : "border-crema-oscuro text-tinta-suave hover:border-verde hover:text-verde"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 rounded-lg border border-crema-oscuro text-tinta-suave text-sm flex items-center justify-center hover:border-verde hover:text-verde disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-72 xl:w-80 shrink-0">
              <BlogSidebar posts={posts} activeTags={activeTags} onTagClick={handleTagClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function getPaginationRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const range = [1]
  if (current > 3) range.push("...")
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    range.push(i)
  }
  if (current < total - 2) range.push("...")
  range.push(total)
  return range
}
