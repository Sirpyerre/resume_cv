import React from "react";

export default function ProjectCard({title, desc, tech=[], repo}) {
    return (
        <article className="border rounded p-4 shadow-sm">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="mt-2 text-sm">{desc}</p>
            <div className="mt-3 text-xs">
                {
                    tech.map(t => (
                        <span key={t} className="inline-block mr-2">{t}</span>
                    ))
                }
            </div>
            <div className="mt-3">
                <a href={repo} target="_black" rel="noreferrer" className="text-sm underline">
                    Repository
                </a>
            </div>
        </article>
    )
}