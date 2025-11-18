import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
    const navigate = useNavigate();
    const { language } = useLanguage();

    const content = {
        es: {
            title: "404",
            subtitle: "Página No Encontrada",
            message: "Lo sentimos, la página que estás buscando no existe o ha sido movida.",
            homeButton: "Volver al Inicio",
            contactButton: "Ir a Contacto"
        },
        en: {
            title: "404",
            subtitle: "Page Not Found",
            message: "Sorry, the page you're looking for doesn't exist or has been moved.",
            homeButton: "Back to Home",
            contactButton: "Go to Contact"
        }
    };

    const t = content[language];

    return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                {/* 404 Number */}
                <h1 className="text-9xl sm:text-[12rem] font-bold text-green-400 mb-4 animate-pulse">
                    {t.title}
                </h1>

                {/* Subtitle */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    {t.subtitle}
                </h2>

                {/* Message */}
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {t.message}
                </p>

                {/* Decorative elements */}
                <div className="flex justify-center gap-4 mb-8">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-4 bg-green-400 hover:bg-green-300 text-slate-900 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/50"
                    >
                        {t.homeButton}
                    </button>
                    <button
                        onClick={() => navigate('/#contact')}
                        className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold text-lg transition-all duration-300 border border-slate-600 hover:border-green-400"
                    >
                        {t.contactButton}
                    </button>
                </div>

                {/* Code decoration */}
                <div className="mt-12 text-gray-500 text-sm font-mono">
                    <span className="text-green-400">&lt;</span>
                    error
                    <span className="text-green-400">&gt;</span>
                    Page not found
                    <span className="text-green-400">&lt;/</span>
                    error
                    <span className="text-green-400">&gt;</span>
                </div>
            </div>
        </div>
    );
}
