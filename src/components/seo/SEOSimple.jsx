import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../contexts/LanguageContext";
import { SITE_CONFIG } from "../../config/site";

// SEO content for both languages
const seoContent = {
    en: {
        title: "Pedro Rojas Reyes - Web Developer for Puebla Businesses",
        description: "I help local businesses in Puebla get more clients with professional, fast, and secure websites. Custom web solutions, automation, and ongoing support for growing businesses.",
        keywords: "Web Developer Puebla, Website Design Puebla, Web Development Mexico, Business Website, Local Business Web Design, React Developer, Custom Web Applications, SEO Puebla, Freelance Web Developer",
        siteName: "Pedro Rojas Reyes - Web Services",
        locale: "en_US"
    },
    es: {
        title: "Pedro Rojas Reyes - Desarrollo Web para Negocios en Puebla",
        description: "Ayudo a negocios locales en Puebla a conseguir más clientes con sitios web profesionales, rápidos y seguros. Soluciones web personalizadas, automatización y soporte continuo para empresas en crecimiento.",
        keywords: "Desarrollador Web Puebla, Diseño Web Puebla, Desarrollo Web México, Sitio Web para Negocios, Diseño Web para Empresas Locales, Desarrollador React, Aplicaciones Web Personalizadas, SEO Puebla, Desarrollador Web Freelance",
        siteName: "Pedro Rojas Reyes - Servicios Web",
        locale: "es_ES"
    }
};

export default function SEO({
    customTitle,
    customDescription,
    customKeywords,
    author = "Pedro Rojas Reyes",
    image = "/og-image.jpg",
    url = SITE_CONFIG.SITE_URL,
    type = "website"
}) {
    const { language } = useLanguage();
    const content = seoContent[language];
    
    // Use custom values or fall back to language-specific defaults
    const title = customTitle || content.title;
    const description = customDescription || content.description;
    const keywords = customKeywords || content.keywords;
    const formattedTitle = customTitle ? `${customTitle} | ${content.title}` : content.title;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <html lang={language} />
            <title>{formattedTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Language and Regional Settings */}
            <meta property="og:locale" content={content.locale} />
            {language === 'es' && <meta property="og:locale:alternate" content="en_US" />}
            {language === 'en' && <meta property="og:locale:alternate" content="es_ES" />}
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={formattedTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}${image}`} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={content.siteName} />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={formattedTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${url}${image}`} />
            
            {/* Alternate Language Links */}
            <link rel="alternate" hrefLang="en" href={`${url}?lang=en`} />
            <link rel="alternate" hrefLang="es" href={`${url}?lang=es`} />
            <link rel="alternate" hrefLang="x-default" href={url} />
            
            {/* Additional Meta Tags */}
            <meta name="theme-color" content="#0f172a" />
            <link rel="canonical" href={url} />
        </Helmet>
    )
}