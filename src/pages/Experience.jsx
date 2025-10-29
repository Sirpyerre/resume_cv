import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import occ from "../content/en/occ.md?raw"
import bt from "../content/en/blackintech.md?raw"
import SEO from "../seo/SEO.jsx"

export default function Experience(){
return (
    <div className="container mx-auto px-6 py-12">
        <SEO title="Experience — Pedro Rojas" />
        <div className="prose prose-invert max-w-none space-y-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{occ}</ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{bt}</ReactMarkdown>
        </div>
    </div>
    )
}