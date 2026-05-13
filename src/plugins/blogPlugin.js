/**
 * Vite plugin that reads all .md files from /posts, parses frontmatter
 * with gray-matter, converts content to HTML with marked, and exposes
 * them as a virtual module: import posts from 'virtual:blog-posts'
 */
import { readFileSync, readdirSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import matter from "gray-matter"
import { marked } from "marked"
import readingTime from "reading-time"

const VIRTUAL_ID = "virtual:blog-posts"
const RESOLVED_ID = "\0virtual:blog-posts"

const __dirname = dirname(fileURLToPath(import.meta.url))
const POSTS_DIR = join(__dirname, "../../posts")

function loadPosts() {
  let files
  try {
    files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"))
  } catch {
    return []
  }

  const posts = files.map((file) => {
    const raw = readFileSync(join(POSTS_DIR, file), "utf-8")
    const { data, content } = matter(raw)
    const html = marked(content)
    const stats = readingTime(content)
    return {
      title: data.title || "",
      date: data.date ? String(data.date) : "",
      description: data.description || "",
      slug: data.slug || file.replace(/\.md$/, ""),
      tags: data.tags || [],
      featured: data.featured || false,
      coverLabel: data.coverLabel || "",
      readingTime: Math.ceil(stats.minutes),
      content: html,
    }
  })

  // Sort newest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  return posts
}

export default function blogPlugin() {
  return {
    name: "vite-plugin-blog",
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id !== RESOLVED_ID) return
      const posts = loadPosts()
      return `export const posts = ${JSON.stringify(posts)}`
    },
  }
}
