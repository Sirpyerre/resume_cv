import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import resumeMd from '../content/en/resume.md?raw'
import SEO from '../seo/SEO'


export default function Education(){
return (
        <div>
            <SEO title="Education — Pedro Rojas" />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{resumeMd}</ReactMarkdown>
        </div>
    )
}