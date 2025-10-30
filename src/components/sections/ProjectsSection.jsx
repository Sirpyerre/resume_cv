import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx';

export default function ProjectsSection() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4 flex items-center justify-center">
                        <span className="text-green-400 mr-3">🔬</span>
                        {t.projects.title}
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        {t.projects.subtitle}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                    {t.projects.items.map((project, index) => (
                        <div key={index} className="bg-slate-700/30 rounded-2xl p-6 sm:p-8 border border-slate-600/30 hover:border-green-400/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                                    {project.title}
                                </h3>
                                {project.title === "Payment Platform" && (
                                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                                        Featured
                                    </div>
                                )}
                            </div>
                            
                           <p
                               className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                               dangerouslySetInnerHTML={{ __html: project.description }}></p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 bg-slate-600/40 text-gray-300 rounded-full text-xs sm:text-sm border border-slate-500/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Link */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base font-medium"
                            >
                                {project.link}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}