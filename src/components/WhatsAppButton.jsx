import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(true);
    const [showTooltip, setShowTooltip] = useState(false);

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    // Warn in development if WhatsApp number is not configured
    useEffect(() => {
        if (!whatsappNumber || whatsappNumber.trim() === '') {
            console.error('⚠️ WhatsApp number not configured. Please set VITE_WHATSAPP_NUMBER in your .env file');
        }
    }, [whatsappNumber]);
    
    const messages = {
        es: {
            tooltip: '¿Necesitas ayuda?',
            message: 'Hola! Me gustaría consultar sobre sus servicios web.'
        },
        en: {
            tooltip: 'Need help?',
            message: 'Hi! I would like to inquire about your web services.'
        }
    };

    const t = messages[language];

    // Auto-show tooltip after 3 seconds, then hide after 5 seconds
    useEffect(() => {
        const showTimer = setTimeout(() => setShowTooltip(true), 3000);
        const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
        
        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const handleClick = () => {
        if (!whatsappNumber || whatsappNumber.trim() === '') {
            alert(language === 'es' 
                ? '⚠️ Error de configuración: El número de WhatsApp no está configurado. Por favor contacte al administrador del sitio.'
                : '⚠️ Configuration error: WhatsApp number is not configured. Please contact the site administrator.');
            console.error('VITE_WHATSAPP_NUMBER environment variable is not set or is empty');
            return;
        }

        const encodedMessage = encodeURIComponent(t.message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
            {/* Tooltip */}
            <div
                className={`hidden md:block transition-all duration-300 ${
                    showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
                }`}
            >
                <div className="bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl border border-slate-200 whitespace-nowrap">
                    <p className="text-sm font-medium">{t.tooltip}</p>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
                </div>
            </div>

            {/* WhatsApp Button */}
            <button
                onClick={handleClick}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="Contact via WhatsApp"
            >
                {/* Pulse animation */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
                
                {/* Icon */}
                <FaWhatsapp className="w-7 h-7 relative z-10" />

                {/* Notification badge (optional - can be used to show unread messages) */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                    1
                </span>

                {/* Mobile tooltip on long press */}
                <span className="md:hidden absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    WhatsApp
                </span>
            </button>
        </div>
    );
}
