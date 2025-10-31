import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../content/content";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { language, toggleLanguage } = useLanguage();
    const t = content[language];

    const sections = [
        { id: 'hero', label: t.nav.aboutMe },
        { id: 'about', label: t.nav.aboutMe },
        { id: 'tech-stack', label: t.nav.techStack },
        { id: 'contributions', label: t.nav.contributions },
        { id: 'projects', label: t.nav.projects },
        { id: 'experience', label: t.nav.experience },
        { id: 'education', label: t.nav.education },
        { id: 'contact', label: t.nav.contact }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'tech-stack', 'contributions', 'projects', 'experience', 'education', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm text-white z-50 border-b border-slate-700">
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors"
                >
                    &lt;PRR /&gt;
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-6 text-sm">
                    {sections.slice(1).map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`hover:text-green-400 transition-colors px-2 py-1 rounded ${
                                activeSection === section.id ? 'text-green-400' : ''
                            }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="hidden sm:block text-sm hover:text-green-400 transition-colors"
                    >
                        {t.nav.language}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden bg-slate-800 border-t border-slate-700`}>
                <nav className="container mx-auto px-4 sm:px-6 py-4 space-y-4">
                    {sections.slice(1).map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`block w-full text-left text-sm hover:text-green-400 transition-colors py-2 px-4 rounded ${
                                activeSection === section.id ? 'text-green-400 bg-slate-700' : ''
                            }`}
                        >
                            {section.label}
                        </button>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="block sm:hidden w-full text-left text-sm hover:text-green-400 transition-colors py-2 px-4 rounded border-t border-slate-700 mt-4 pt-4"
                    >
                        {t.nav.language}
                    </button>
                </nav>
            </div>
        </header>
    );
}