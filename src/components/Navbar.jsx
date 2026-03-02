import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../content/content";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { language, toggleLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    const t = content[language];

    const navLinks = [
        { id: 'services', label: t.nav.services },
        { id: 'contributions', label: t.nav.contributions },
        { id: 'about', label: t.nav.aboutMe },
    ];

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/', { replace: true });
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const handleWhatsApp = () => {
        if (!whatsappNumber) return;
        const msg = encodeURIComponent(
            language === 'es'
                ? 'Hola! Me gustaría consultar sobre sus servicios web.'
                : 'Hi! I would like to inquire about your web services.'
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'services', 'why-me', 'contributions', 'contact'];
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

    // Close menu on outside click
    useEffect(() => {
        if (!isMenuOpen) return;
        const handleClick = (e) => {
            if (!e.target.closest('header')) setIsMenuOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 bg-crema/95 backdrop-blur-sm text-tinta z-50 border-b border-crema-oscuro">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <button
                    onClick={() => scrollToSection('hero')}
                    className="text-xl font-bold text-tinta hover:text-verde transition-colors"
                >
                    Pedro.
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1 text-sm">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors hover:text-verde ${
                                activeSection === link.id
                                    ? 'bg-verde/10 text-verde'
                                    : 'text-tinta-suave'
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Language Toggle — desktop only */}
                    <button
                        onClick={toggleLanguage}
                        className="hidden lg:block text-xs text-tinta-suave hover:text-verde transition-colors font-medium tracking-wide"
                    >
                        {t.nav.language}
                    </button>

                    {/* Contact CTA — desktop */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hidden lg:inline-flex items-center gap-1 bg-verde text-crema px-5 py-2 rounded-lg font-semibold text-sm hover:bg-verde/90 transition-colors"
                    >
                        {t.nav.contactBtn} →
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-tinta focus:outline-none p-1"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                } overflow-hidden bg-crema border-t border-crema-oscuro`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
                    <p className="text-xs font-bold tracking-widest text-tinta-suave/60 mb-3">
                        {t.nav.mobileMenuTitle}
                    </p>
                    <div className="border-t border-crema-oscuro mb-4" />

                    <nav className="space-y-1 mb-5">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`flex items-center justify-between w-full text-left py-3 px-2 rounded-lg text-base font-medium transition-colors hover:text-verde ${
                                    activeSection === link.id ? 'text-verde' : 'text-tinta'
                                }`}
                            >
                                {link.label}
                                <svg className="w-4 h-4 text-tinta-suave/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        ))}
                    </nav>

                    {/* Mobile CTAs */}
                    <div className="flex flex-col gap-3 pb-2">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full bg-verde text-crema py-3.5 rounded-lg font-bold text-base hover:bg-verde/90 transition-colors active:scale-[0.98]"
                        >
                            {t.nav.bookCta} →
                        </button>
                        <button
                            onClick={handleWhatsApp}
                            className="w-full inline-flex items-center justify-center gap-2 border-2 border-verde text-verde py-3.5 rounded-lg font-bold text-base hover:bg-verde/5 transition-colors active:scale-[0.98]"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            {t.nav.whatsappCta}
                        </button>

                        {/* Language toggle in mobile menu */}
                        <button
                            onClick={toggleLanguage}
                            className="text-sm text-tinta-suave hover:text-verde transition-colors pt-1"
                        >
                            {t.nav.language}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
