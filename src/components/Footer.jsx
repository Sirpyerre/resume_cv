import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-800/50 border-t border-slate-700 py-8 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-gray-400 text-sm text-center sm:text-left">
                        © {currentYear} Pedro Rojas Reyes. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
                        <div className="flex gap-4 mt-2 justify-center sm:justify-start">
                            <a 
                                href="/privacy-policy" 
                                className="text-gray-400 hover:text-green-400 transition-colors text-xs"
                            >
                                {language === 'en' ? 'Privacy Policy' : 'Aviso de Privacidad'}
                            </a>
                            <span className="text-gray-600">•</span>
                            <a 
                                href="/terms-of-service" 
                                className="text-gray-400 hover:text-green-400 transition-colors text-xs"
                            >
                                {language === 'en' ? 'Terms of Service' : 'Términos de Uso'}
                            </a>
                            <span className="text-gray-600">•</span>
                            <a 
                                href="/cookie-policy" 
                                className="text-gray-400 hover:text-green-400 transition-colors text-xs"
                            >
                                {language === 'en' ? 'Cookie Policy' : 'Política de Cookies'}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>
                            {language === 'en' ? 'Built with' : 'Construido con'} ⚡ Vite + React
                        </span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-green-400 hover:text-green-300 transition-colors"
                        >
                            ↑ {language === 'en' ? 'Top' : 'Arriba'}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}