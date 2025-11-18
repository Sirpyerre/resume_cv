import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

export default function ContributionsSection() {
    const { language } = useLanguage();
    const t = content[language];
    const [currentIndex, setCurrentIndex] = useState(0);

    const portfolio = t.portfolio || { projects: [] };
    const currentProject = portfolio.projects[currentIndex];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === portfolio.projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? portfolio.projects.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="contributions" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        {language === 'es' ? 'Mi Portafolio' : 'My Portfolio'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {portfolio.title || t.contributions.title}
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        {portfolio.subtitle || t.contributions.subtitle}
                    </p>
                </div>

                {/* Carousel Container */}
                {portfolio.projects.length > 0 && (
                    <div className="relative">
                        {/* Main Card */}
                        <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 lg:p-12 border border-slate-700/50 backdrop-blur-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                {/* Image Side */}
                                <div className="order-2 lg:order-1">
                                    <div className="relative aspect-video bg-slate-700/30 rounded-xl overflow-hidden group">
                                        {/* Placeholder for image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                                            <div className="text-center p-8">
                                                <div className="text-6xl mb-4">🌐</div>
                                                <p className="text-lg font-medium">{currentProject.title}</p>
                                                <p className="text-sm mt-2 opacity-70">
                                                    {currentProject.url === '#' 
                                                        ? (language === 'es' ? 'Proyecto confidencial' : 'Confidential project')
                                                        : currentProject.url}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 transition-all duration-300"></div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="order-1 lg:order-2 space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {currentProject.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {currentProject.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {currentProject.tags.map((tag, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 bg-slate-700/50 text-green-400 rounded-full text-sm border border-slate-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    {currentProject.url !== '#' && (
                                        <a
                                            href={currentProject.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-green-400 text-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-slate-700 hover:border-green-400 group"
                                        >
                                            {language === 'es' ? 'Ver Sitio en Vivo' : 'View Live Site'}
                                            <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows - Desktop */}
                        <button
                            onClick={prevSlide}
                            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 items-center justify-center bg-slate-800 hover:bg-green-400 text-white hover:text-slate-900 rounded-full transition-all duration-300 border border-slate-700 hover:border-green-400 shadow-lg"
                            aria-label={language === 'es' ? 'Proyecto anterior' : 'Previous project'}
                        >
                            <FaChevronLeft className="text-xl" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 items-center justify-center bg-slate-800 hover:bg-green-400 text-white hover:text-slate-900 rounded-full transition-all duration-300 border border-slate-700 hover:border-green-400 shadow-lg"
                            aria-label={language === 'es' ? 'Siguiente proyecto' : 'Next project'}
                        >
                            <FaChevronRight className="text-xl" />
                        </button>

                        {/* Mobile Navigation Arrows */}
                        <div className="flex md:hidden gap-4 justify-center mt-6">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 flex items-center justify-center bg-slate-800 hover:bg-green-400 text-white hover:text-slate-900 rounded-full transition-all duration-300 border border-slate-700"
                                aria-label={language === 'es' ? 'Proyecto anterior' : 'Previous project'}
                            >
                                <FaChevronLeft className="text-lg" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 flex items-center justify-center bg-slate-800 hover:bg-green-400 text-white hover:text-slate-900 rounded-full transition-all duration-300 border border-slate-700"
                                aria-label={language === 'es' ? 'Siguiente proyecto' : 'Next project'}
                            >
                                <FaChevronRight className="text-lg" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Dots Navigation */}
                {portfolio.projects.length > 1 && (
                    <div className="flex justify-center gap-3 mt-8">
                        {portfolio.projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? 'w-8 h-3 bg-green-400'
                                        : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                                }`}
                                aria-label={`${language === 'es' ? 'Ir al proyecto' : 'Go to project'} ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Counter */}
                {portfolio.projects.length > 0 && (
                    <div className="text-center mt-6">
                        <p className="text-slate-400 text-sm">
                            {currentIndex + 1} / {portfolio.projects.length}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}