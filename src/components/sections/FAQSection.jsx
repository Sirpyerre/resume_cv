import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { content } from '../../content/content.jsx';

export default function FAQSection() {
    const { language } = useLanguage();
    const t = content[language];
    const [openIndex, setOpenIndex] = useState(null);

    const faq = t.faq;

    return (
        <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 bg-crema">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold text-tinta mb-4">
                        {faq.title}
                    </h2>
                    <p className="text-tinta-suave">{faq.subtitle}</p>
                </div>

                <div className="space-y-3">
                    {faq.items.map((item, index) => (
                        <div key={index} className="border border-crema-oscuro rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-4 flex justify-between items-center bg-crema-medio hover:bg-crema-oscuro/30 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-tinta pr-4">{item.question}</span>
                                <span className={`text-verde text-xl flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                                    +
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 bg-crema border-t border-crema-oscuro">
                                    <p className="text-tinta-suave leading-relaxed">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
