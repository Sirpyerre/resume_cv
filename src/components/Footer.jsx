import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-crema-medio/50 border-t border-crema-oscuro py-8 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-tinta-suave text-sm text-center sm:text-left">
                        © {currentYear} Pedro Rojas Reyes. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
                        <div className="flex gap-4 mt-2 justify-center sm:justify-start">
                            <a
                                href="/privacy-policy"
                                className="text-tinta-suave hover:text-verde transition-colors text-xs"
                            >
                                {language === 'en' ? 'Privacy Policy' : 'Aviso de Privacidad'}
                            </a>
                            <span className="text-crema-oscuro">•</span>
                            <a
                                href="/terms-of-service"
                                className="text-tinta-suave hover:text-verde transition-colors text-xs"
                            >
                                {language === 'en' ? 'Terms of Service' : 'Términos de Uso'}
                            </a>
                            <span className="text-crema-oscuro">•</span>
                            <a
                                href="/cookie-policy"
                                className="text-tinta-suave hover:text-verde transition-colors text-xs"
                            >
                                {language === 'en' ? 'Cookie Policy' : 'Política de Cookies'}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-tinta-suave">
                        <span>
                            {language === 'en' ? 'Built with' : 'Construido con'} ⚡ Vite + React
                        </span>
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
