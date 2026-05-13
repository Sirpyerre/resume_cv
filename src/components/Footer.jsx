import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const blogCategories = [
  { label: 'Casos de Estudio', tag: 'caso' },
  { label: 'Desarrollo Web', tag: 'desarrollo' },
  { label: 'PyMEs', tag: 'pymes' },
  { label: 'SEO Local', tag: 'seo' },
  { label: 'Emprendimiento', tag: 'emprendimiento' },
]

export default function Footer() {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-tinta text-crema py-12 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <p className="text-xl font-bold text-crema mb-2">Pedro.</p>
                        <p className="text-crema/60 text-sm leading-relaxed mb-3 max-w-xs">
                            {language === 'en'
                                ? 'Web consultant and developer in Puebla, México. I build fast sites that help local businesses get more clients.'
                                : 'Consultor y desarrollador web en Puebla, México. Construyo sitios rápidos que ayudan a negocios locales a conseguir clientes.'}
                        </p>
                        <p className="text-crema/40 text-xs flex items-center gap-1">
                            📍 Puebla, México
                        </p>
                    </div>

                    {/* Site links */}
                    <div>
                        <p className="text-[10px] font-bold tracking-widest text-crema/40 mb-4">
                            {language === 'en' ? 'SITE' : 'SITIO'}
                        </p>
                        <ul className="space-y-2 text-sm text-crema/70">
                            <li><Link to="/#about" className="hover:text-verde transition-colors">{language === 'en' ? 'About' : 'Sobre Mí'}</Link></li>
                            <li><Link to="/#services" className="hover:text-verde transition-colors">{language === 'en' ? 'Services' : 'Servicios'}</Link></li>
                            <li><Link to="/#contributions" className="hover:text-verde transition-colors">{language === 'en' ? 'Portfolio' : 'Portafolio'}</Link></li>
                            <li><Link to="/blog" className="hover:text-verde transition-colors">Blog</Link></li>
                            <li><Link to="/#faq" className="hover:text-verde transition-colors">FAQ</Link></li>
                            <li><Link to="/#contact" className="hover:text-verde transition-colors">{language === 'en' ? 'Contact' : 'Contacto'}</Link></li>
                        </ul>
                    </div>

                    {/* Blog categories */}
                    <div>
                        <p className="text-[10px] font-bold tracking-widest text-crema/40 mb-4">
                            {language === 'en' ? 'BLOG CATEGORIES' : 'CATEGORÍAS DEL BLOG'}
                        </p>
                        <ul className="space-y-2 text-sm text-crema/70">
                            {blogCategories.map((c) => (
                                <li key={c.tag}>
                                    <Link to="/blog" className="hover:text-verde transition-colors">
                                        {c.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-crema/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-crema/40">
                    <div className="text-center sm:text-left">
                        <p>© {currentYear} Pedro Rojas · Puebla, México. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
                        <div className="flex gap-4 mt-1.5 justify-center sm:justify-start">
                            <a href="/privacy-policy" className="hover:text-verde transition-colors">
                                {language === 'en' ? 'Privacy Policy' : 'Aviso de Privacidad'}
                            </a>
                            <span className="text-crema/20">•</span>
                            <a href="/terms-of-service" className="hover:text-verde transition-colors">
                                {language === 'en' ? 'Terms of Service' : 'Términos de Uso'}
                            </a>
                            <span className="text-crema/20">•</span>
                            <a href="/cookie-policy" className="hover:text-verde transition-colors">
                                {language === 'en' ? 'Cookie Policy' : 'Política de Cookies'}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>{language === 'en' ? 'Built with' : 'Construido con'} ⚡ Vite + React</span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-verde hover:text-verde/80 transition-colors"
                        >
                            ↑ {language === 'en' ? 'Top' : 'Arriba'}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

