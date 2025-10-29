import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx';

export default function ContributionsSection() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="contributions" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800/50">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4 flex items-center justify-center">
                        <span className="text-green-400 mr-3">🏆</span>
                        {t.contributions.title}
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        {t.contributions.subtitle}
                    </p>
                </div>

                {/* Contributions Grid */}
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {t.contributions.projects.map((project, index) => (
                        <div key={index} className="bg-slate-700/30 rounded-2xl p-6 sm:p-8 border border-slate-600/30 hover:border-green-400/30 transition-colors">
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                                {project.title}
                            </h3>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm border border-green-500/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Leadership */}
                            <p className="text-gray-500 italic text-sm">
                                {project.leadership}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}