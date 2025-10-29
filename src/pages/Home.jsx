import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
import SEO from "../seo/SEO.jsx"

import homeMD from '../content/en/home.md?raw';

export default function Home() {
    return (
        <div>
            <SEO title="Pedro Rojas Reyes - Backend Developer" description="Backend developer specialized in Go, Kubernetes, AWS and scalable systems." />
            <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {homeMD}
                </ReactMarkdown>
            </div>
        </div>
    )
}