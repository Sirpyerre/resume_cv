import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
import SEO from "../seo/SEO.jsx"

import resumeMD from './content/en/resume.md?raw'

export default function Home() {
    return (
        <div>
            <SEO title="Pedro Rojas Reyes - Backend Developer" description="Backend developer specialized in Go, Kubernetes, AWS and scalable systems." />
            <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {resumeMD}
                </ReactMarkdown>
            </div>
        </div>
    )
}