import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx'

export default function ContactSection() {
    const { language } = useLanguage();
    const t = content[language];

    const socialLinks = [
        {
            name: t.contact.links.email,
            href: "mailto:pedro@example.com",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
            )
        },
        {
            name: t.contact.links.github,
            href: "https://github.com/Sirpyerre",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd"/>
                </svg>
            )
        },
        {
            name: t.contact.links.linkedin,
            href: "https://linkedin.com/in/pedrorojas",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: t.contact.links.website,
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
            )
        },
        {
            name: t.contact.links.youtube,
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        }
    ];

    return (
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800/50">
            <div className="container mx-auto max-w-4xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4 flex items-center justify-center">
                        <span className="text-green-400 mr-3">📧</span>
                        {t.contact.title}
                    </h2>
                </div>

                {/* Contact Content */}
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-slate-700/40 hover:bg-slate-600/40 border border-slate-600/30 hover:border-green-400/50 rounded-xl transition-all duration-300 hover:-translate-y-1 text-white hover:text-green-400"
                        >
                            {link.icon}
                            <span className="font-medium text-sm sm:text-base">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Additional Contact Info */}
                <div className="mt-12 sm:mt-16 text-center">
                    <div className="bg-slate-700/30 rounded-2xl p-6 sm:p-8 border border-slate-600/30">
                        <p className="text-gray-400 text-base sm:text-lg mb-4">
                            {language === 'en' 
                                ? 'Prefer direct contact?' 
                                : '¿Prefieres contacto directo?'
                            }
                        </p>
                        <a
                            href="mailto:pedro@example.com"
                            className="inline-flex items-center px-6 sm:px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors duration-200 text-sm sm:text-base"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            pedro@example.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}