import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../contexts/LanguageContext";
import { SITE_CONFIG } from "../../config/site";
import { content } from "../../content/content";

const seoContent = {
    en: {
        title: "Pedro Rojas — Freelance Web Developer in Puebla, México",
        description: "Freelance web developer in Puebla. Websites for doctors, clinics, and local businesses. Fast, Google-optimized sites from $5,000 MXN. Free consultation.",
        keywords: "freelance web developer Puebla, website for doctors Puebla, medical clinic website Puebla, web development Mexico, local business website Puebla, website design Puebla",
        siteName: "Pedro Rojas — Web Services Puebla",
        locale: "en_US",
        alternateLocale: "es_MX"
    },
    es: {
        title: "Pedro Rojas — Desarrollador Web Freelance en Puebla, México",
        description: "Desarrollador web freelance en Puebla. Sitios para médicos, consultorios y negocios locales. Rápidos, bien posicionados en Google. Desde $5,000 MXN.",
        keywords: "desarrollador web freelance Puebla, desarrollo web para médicos Puebla, sitio web para consultorio Puebla, página web para doctor Puebla, diseño web Puebla, páginas web para negocios Puebla, desarrollo web México, SEO local Puebla",
        siteName: "Pedro Rojas — Servicios Web Puebla",
        locale: "es_MX",
        alternateLocale: "en_US"
    }
};

function LocalBusinessSchema({ language }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Pedro Rojas — Desarrollo Web",
        "description": language === "es"
            ? "Desarrollo web profesional para negocios en Puebla. Sitios rápidos, seguros y optimizados para Google."
            : "Professional web development for businesses in Puebla. Fast, secure, and SEO-optimized sites.",
        "url": SITE_CONFIG.SITE_URL,
        "telephone": "+52-2224122606",
        "email": "contacto@pedrorojas.lat",
        "founder": {
            "@type": "Person",
            "name": "Pedro Rojas Reyes",
            "jobTitle": language === "es" ? "Desarrollador Web Freelance" : "Freelance Web Developer",
            "url": SITE_CONFIG.SITE_URL
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Puebla",
            "addressRegion": "Puebla",
            "addressCountry": "MX",
            "postalCode": "72490"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0414,   // coordenadas del centro de Puebla
            "longitude": -98.2063
        },
        "areaServed": {
            "@type": "City",
            "name": "Puebla",
            "sameAs": "https://www.wikidata.org/wiki/Q125293"
        },
        "priceRange": "$$",
        "currenciesAccepted": "MXN",
        "paymentAccepted": "Transferencia bancaria, efectivo",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": language === "es" ? "Servicios Web" : "Web Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": language === "es" ? "Presencia Esencial" : "Essential Presence",
                        "description": language === "es"
                            ? "Sitio web de 3-5 páginas, rápido y optimizado para Google"
                            : "3-5 page website, fast and Google-optimized"
                    },
                    "price": "5000",
                    "priceCurrency": "MXN"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": language === "es" ? "Web App Personalizada" : "Custom Web App",
                        "description": language === "es"
                            ? "Sistemas de reservas, cotizadores y portales a medida"
                            : "Booking systems, quote tools, and custom portals"
                    },
                    "price": "15000",
                    "priceCurrency": "MXN"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": language === "es" ? "Mantenimiento Mensual" : "Monthly Maintenance",
                        "description": language === "es"
                            ? "Soporte técnico, actualizaciones y monitoreo mensual"
                            : "Technical support, updates, and monthly monitoring"
                    },
                    "price": "1500",
                    "priceCurrency": "MXN"
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "ratingCount": "5",
            "bestRating": "5",
            "worstRating": "1"
        },
        "sameAs": [
            "https://www.linkedin.com/in/sirpyerre",
            "https://github.com/sirpyerre"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
    );
}

function PersonSchema({ language }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Pedro Rojas Reyes",
        "jobTitle": language === "es" ? "Desarrollador Web Freelance" : "Freelance Web Developer",
        "description": language === "es"
            ? "Consultor y desarrollador web en Puebla con más de 10 años de experiencia. Especialista en sitios web para negocios locales."
            : "Web consultant and developer in Puebla with 10+ years of experience. Specialist in websites for local businesses.",
        "url": SITE_CONFIG.SITE_URL,
        "email": "contacto@pedrorojas.lat",
        "telephone": "+52-2224122606",
        "image": `${SITE_CONFIG.SITE_URL}/hero-section-resize1.png`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Puebla",
            "addressRegion": "Puebla",
            "addressCountry": "MX"
        },
        "knowsAbout": ["Web Development", "React", "Go", "Node.js", "SEO", "Cloud Infrastructure", "Tailwind CSS"],
        "sameAs": [
            "https://www.linkedin.com/in/sirpyerre",
            "https://github.com/sirpyerre"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

function FAQSchema({ language }) {
    const faqs = content[language]?.faq?.items;
    if (!faqs) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

function WebSiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Pedro Rojas — Desarrollo Web Puebla",
        "url": SITE_CONFIG.SITE_URL,
        "inLanguage": ["es-MX", "en-US"],
        "author": {
            "@type": "Person",
            "name": "Pedro Rojas Reyes"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function SEO({
    customTitle,
    customDescription,
    customKeywords,
    author = "Pedro Rojas Reyes",
    image = "/hero-section-resize1.png",
    url = SITE_CONFIG.SITE_URL,
    type = "website"
}) {
    const { language } = useLanguage();
    const content = seoContent[language];

    const title = customTitle || content.title;
    const description = customDescription || content.description;
    const keywords = customKeywords || content.keywords;
    const formattedTitle = customTitle
        ? `${customTitle} | Pedro Rojas — Desarrollo Web Puebla`
        : content.title;

    return (
        <>
            <Helmet>
                <html lang={language === "es" ? "es-MX" : "en-US"} />
                <title>{formattedTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#2D6A4F" />

                <meta name="geo.region" content="MX-PUE" />
                <meta name="geo.placename" content="Puebla, México" />
                <meta name="geo.position" content="19.0414;-98.2063" />
                <meta name="ICBM" content="19.0414, -98.2063" />

                <meta property="og:locale" content={content.locale} />
                <meta property="og:locale:alternate" content={content.alternateLocale} />

                <meta property="og:type" content={type} />
                <meta property="og:title" content={formattedTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={`${url}${image}`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Pedro Rojas — Desarrollo Web Puebla" />
                <meta property="og:url" content={url} />
                <meta property="og:site_name" content={content.siteName} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={formattedTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${url}${image}`} />

                <link rel="alternate" hrefLang="x-default" href={url} />
                <link rel="alternate" hrefLang="es-MX" href={url} />
                <link rel="alternate" hrefLang="en-US" href={url} />
                <link rel="canonical" href={url} />
            </Helmet>

            {/* JSON-LD schemas — fuera de Helmet, Helmet no acepta componentes React como hijos */}
            <LocalBusinessSchema language={language} />
            <WebSiteSchema />
            <PersonSchema language={language} />
            <FAQSchema language={language} />
        </>
    );
}