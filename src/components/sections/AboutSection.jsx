import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx';

export default function AboutSection() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-crema-medio/50">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-verde mb-4 flex items-center justify-center">
                        <span className="text-verde mr-3">&lt;/&gt;</span>
                        {t.about.title}
                    </h2>
                </div>

                {/* Content */}
                <div className="bg-crema-oscuro/30 rounded-2xl p-6 sm:p-8 md:p-12 border border-crema-oscuro/30">
                    <div className="space-y-6 sm:space-y-8">
                        <p className="text-base sm:text-lg md:text-xl text-tinta-suave leading-relaxed">
                            {t.about.paragraph1}
                        </p>

                        <p className="text-base sm:text-lg md:text-xl text-tinta-suave leading-relaxed">
                            {t.about.paragraph2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
