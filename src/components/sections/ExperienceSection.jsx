import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx';

export default function ExperienceSection() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800/50">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4 flex items-center justify-center">
                        <span className="text-green-400 mr-3">✅</span>
                        {t.experience.title}
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        {t.experience.subtitle}
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8 sm:space-y-12">
                    {t.experience.jobs.map((job, index) => (
                        <div key={index} className="relative">
                            {/* Timeline Line */}
                            {index !== t.experience.jobs.length - 1 && (
                                <div className="absolute left-6 top-8 w-0.5 h-full bg-green-400/20 hidden sm:block"></div>
                            )}
                            
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                {/* Timeline Dot */}
                                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                    <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                                </div>
                                
                                {/* Content */}
                                <div className="flex-1 bg-slate-700/30 rounded-2xl p-6 sm:p-8 border border-slate-600/30">
                                    <div className="mb-4 sm:mb-6">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                            <span className="text-green-400 font-medium text-base sm:text-lg">
                                                {job.company}
                                            </span>
                                            <span className="text-gray-400 text-sm sm:text-base">
                                                {job.period}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <ul className="space-y-3 sm:space-y-4">
                                        {job.responsibilities.map((responsibility, respIndex) => (
                                            <li key={respIndex} className="flex items-start gap-3">
                                                <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                                                <span className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                                    {responsibility}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}