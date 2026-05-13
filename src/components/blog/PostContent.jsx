import React from "react"

export default function PostContent({ html }) {
  return (
    <div
      className="prose prose-lg max-w-none
        prose-headings:font-lora prose-headings:text-tinta
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-tinta-suave prose-p:leading-relaxed
        prose-a:text-verde prose-a:no-underline hover:prose-a:underline
        prose-strong:text-tinta
        prose-li:text-tinta-suave
        prose-blockquote:border-l-verde prose-blockquote:text-tinta-suave
        prose-code:text-cobre prose-code:bg-crema-medio prose-code:px-1 prose-code:rounded
        prose-hr:border-crema-oscuro"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
