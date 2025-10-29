import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import educationMd from '../content/en/education.md?raw'
import SEO from '../seo/SEO.jsx'


export default function Education(){
return (
        <div className="container mx-auto px-6 py-12">
            <SEO title="Education — Pedro Rojas" />
            <div className="prose prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{educationMd}</ReactMarkdown>
            </div>
        </div>
    )
}