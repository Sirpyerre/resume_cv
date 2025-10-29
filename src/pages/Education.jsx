import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import educationMd from '../content/en/education.md?raw'
import SEO from '../seo/SEO.jsx'


export default function Education(){
return (
        <div>
            <SEO title="Education — Pedro Rojas" />
            <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{educationMd}</ReactMarkdown>
            </div>
        </div>
    )
}