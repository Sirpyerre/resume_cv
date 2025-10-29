import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx';

export default function AboutSection() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800/50">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4 flex items-center justify-center">
                        <span className="text-green-400 mr-3">&lt;/&gt;</span>
                        {t.about.title}
                    </h2>
                </div>

                {/* Content */}
                <div className="bg-slate-700/30 rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-600/30">
                    <div className="space-y-6 sm:space-y-8">
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                            {t.about.paragraph1}
                        </p>
                        
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                            {t.about.paragraph2}
                        </p>
                        
                        <div className="pt-4 sm:pt-6 border-t border-slate-600/50">
                            <p className="text-sm sm:text-base text-blue-400 flex items-center">
                                <span className="mr-2">🌐</span>
                                {t.about.languages}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}