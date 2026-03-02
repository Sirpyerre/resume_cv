import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ConsentBanner() {
    const { language } = useLanguage();
    const [showBanner, setShowBanner] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consentGiven = localStorage.getItem('cookieConsent');
        if (!consentGiven) {
            // Show banner after a short delay for better UX
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        closeBanner();
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        // Clear any existing cookies if needed
        closeBanner();
    };

    const closeBanner = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowBanner(false);
            setIsClosing(false);
        }, 300);
    };

    if (!showBanner) return null;

    const content = {
        es: {
            title: "🍪 Este sitio utiliza cookies",
            message: "Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas para mejorar tu experiencia. Puedes aceptar todas o solo las esenciales.",
            acceptAll: "Aceptar Todas",
            rejectAll: "Solo Esenciales",
            moreInfo: "Más Información"
        },
        en: {
            title: "🍪 This site uses cookies",
            message: "We use essential cookies for site functionality and analytics cookies to improve your experience. You can accept all or only essential cookies.",
            acceptAll: "Accept All",
            rejectAll: "Essential Only",
            moreInfo: "More Info"
        }
    };

    const t = content[language];

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
                isClosing ? 'translate-y-full' : 'translate-y-0'
            }`}
        >
            {/* Overlay for mobile */}
            <div className="fixed inset-0 bg-tinta/40 backdrop-blur-sm md:hidden" onClick={closeBanner} />

            {/* Banner */}
            <div className="relative bg-crema-medio border-t-2 border-verde shadow-2xl">
                <div className="container mx-auto px-4 py-4 sm:py-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Text Content */}
                        <div className="flex-1">
                            <h3 className="text-tinta font-bold text-base sm:text-lg mb-2">
                                {t.title}
                            </h3>
                            <p className="text-tinta-suave text-sm sm:text-base leading-relaxed">
                                {t.message}
                            </p>
                            <a
                                href="/cookie-policy"
                                className="inline-block mt-2 text-verde hover:text-verde/80 text-xs sm:text-sm underline transition-colors"
                            >
                                {t.moreInfo}
                            </a>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:flex-shrink-0">
                            <button
                                onClick={handleReject}
                                className="px-6 py-2.5 bg-crema-oscuro hover:bg-crema-oscuro/80 text-tinta rounded-lg font-medium transition-all duration-300 border border-crema-oscuro text-sm sm:text-base"
                            >
                                {t.rejectAll}
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2.5 bg-verde hover:bg-verde/90 text-crema rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-verde/30 transform hover:scale-105 text-sm sm:text-base"
                            >
                                {t.acceptAll}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Close button (mobile) */}
                <button
                    onClick={closeBanner}
                    className="absolute top-2 right-2 md:hidden text-tinta-suave hover:text-tinta transition-colors p-2"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
