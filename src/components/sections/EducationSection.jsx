import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx';

export default function EducationSection() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="education" className="py-16 sm:py-20 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4 flex items-center justify-center">
                        <span className="text-green-400 mr-3">📚</span>
                        {t.education.title}
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        {t.education.subtitle}
                    </p>
                </div>

                <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
                    {/* Academic Degrees */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                            {t.education.degrees}
                        </h3>
                        <div className="space-y-6">
                            {t.education.items.degrees.map((degree, index) => (
                                <div key={index} className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
                                    <h4 className="text-lg font-semibold text-green-400 mb-2 leading-tight">
                                        {degree.title}
                                    </h4>
                                    <p className="text-gray-300 font-medium mb-1">
                                        {degree.institution}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {degree.period}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                            {t.education.certifications}
                        </h3>
                        <div className="space-y-6">
                            {t.education.items.certifications.map((cert, index) => (
                                <div key={index} className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
                                    <h4 className="text-lg font-semibold text-green-400 mb-2 leading-tight">
                                        {cert.title}
                                    </h4>
                                    <p className="text-gray-300 text-sm sm:text-base">
                                        {cert.institution}
                                    </p>
                                    {cert.title.includes("progress") || cert.title.includes("progreso") && (
                                        <span className="inline-block mt-2 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                                            {language === 'en' ? 'In Progress' : 'En Progreso'}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}