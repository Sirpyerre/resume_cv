import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
    title = "Pedro Rojas Reyes - Senior Backend Developer",
    description = "Senior Backend Developer with 10+ years experience in Go, .NET, Kubernetes, and Cloud Native technologies. Specializing in scalable microservices and distributed systems.",
    keywords = "Backend Developer, Go, Golang, .NET, Kubernetes, Cloud Native, Microservices, AWS, Docker, GraphQL, REST API, Software Engineer, Full Stack Developer",
    author = "Pedro Rojas Reyes",
    image = "/og-image.jpg",
    url = "https://pedrorojas.dev",
    type = "website",
    section = null,
    lang = "en"
}) {
    const siteTitle = "Pedro Rojas Reyes - Senior Backend Developer";
    const formattedTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
    const canonicalUrl = section ? `${url}#${section}` : url;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <html lang={lang} />
            <title>{formattedTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            
            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={formattedTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}${image}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Pedro Rojas Reyes Portfolio" />
            <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={formattedTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${url}${image}`} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:creator" content="@pedrorojas" />
            <meta name="twitter:site" content="@pedrorojas" />
            
            {/* Additional SEO Meta Tags */}
            <meta name="theme-color" content="#0f172a" />
            <meta name="msapplication-TileColor" content="#0f172a" />
            <meta name="application-name" content="Pedro Rojas Portfolio" />
            <meta name="apple-mobile-web-app-title" content="Pedro Rojas" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="format-detection" content="telephone=no" />
            
            {/* Structured Data for Professional Profile */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Pedro Rojas Reyes",
                    "jobTitle": "Senior Backend Developer",
                    "description": description,
                    "url": url,
                    "image": `${url}${image}`,
                    "sameAs": [
                        "https://github.com/Sirpyerre",
                        "https://linkedin.com/in/pedrorojas",
                        "mailto:pedro@example.com"
                    ],
                    "knowsAbout": [
                        "Go Programming",
                        "Golang",
                        ".NET Framework",
                        "Kubernetes",
                        "Docker",
                        "Microservices",
                        "Cloud Native",
                        "AWS",
                        "GraphQL",
                        "REST APIs",
                        "Software Architecture",
                        "Backend Development"
                    ],
                    "alumniOf": [
                        {
                            "@type": "CollegeOrUniversity",
                            "name": "Universidad Tecmilenio"
                        },
                        {
                            "@type": "CollegeOrUniversity", 
                            "name": "Universidad Tecnológica de Puebla"
                        }
                    ],
                    "hasCredential": [
                        {
                            "@type": "EducationalOccupationalCredential",
                            "name": "Programming with Google Go",
                            "credentialCategory": "Certificate",
                            "recognizedBy": {
                                "@type": "Organization",
                                "name": "University of California, Irvine"
                            }
                        },
                        {
                            "@type": "EducationalOccupationalCredential",
                            "name": "LFS250: Kubernetes and Cloud Native Essentials",
                            "credentialCategory": "Certificate",
                            "recognizedBy": {
                                "@type": "Organization",
                                "name": "The Linux Foundation"
                            }
                        }
                    ],
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Freelance / Available for Hire"
                    }
                })}
            </script>

            {/* Website Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Pedro Rojas Reyes - Portfolio",
                    "description": description,
                    "url": url,
                    "author": {
                        "@type": "Person",
                        "name": "Pedro Rojas Reyes"
                    },
                    "inLanguage": lang === 'es' ? 'es-ES' : 'en-US',
                    "copyrightYear": new Date().getFullYear(),
                    "genre": "Professional Portfolio"
                })}
            </script>

            {/* Preconnect to external domains for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://github.com" />
            <link rel="dns-prefetch" href="https://linkedin.com" />
        </Helmet>
    )
}