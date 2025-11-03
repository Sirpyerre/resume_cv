import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { seoConfig, getSectionSEO } from '../config/seo';

export const useSEO = (section = 'home', customData = {}) => {
  const { language } = useLanguage();
  
  // Get section-specific SEO data
  const sectionSEO = getSectionSEO(section, language);
  
  // Merge with custom data
  const seoData = {
    ...sectionSEO,
    ...customData,
    url: seoConfig.siteUrl,
    author: seoConfig.author,
    image: seoConfig.siteImage,
    section: section
  };

  // Update document title when section changes
  useEffect(() => {
    if (seoData.title) {
      document.title = seoData.title;
    }
  }, [seoData.title]);

  // Add structured data for current section
  useEffect(() => {
    const addStructuredData = () => {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-section]');
      existingScripts.forEach(script => script.remove());

      // Add new structured data based on section
      if (section === 'projects') {
        const projectsData = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Pedro Rojas - Projects",
          "description": "Backend development projects and labs",
          "author": {
            "@type": "Person",
            "name": "Pedro Rojas Reyes"
          },
          "numberOfItems": 4,
          "itemListElement": [
            {
              "@type": "SoftwareApplication",
              "name": "Fintech Backend Core",
              "description": "Backend platform with layered architecture using Docker and Docker Compose",
              "programmingLanguage": "Go",
              "author": {
                "@type": "Person",  
                "name": "Pedro Rojas Reyes"
              }
            },
            {
              "@type": "SoftwareApplication",
              "name": "Payment Platform",
              "description": "Online payment platform for processing transactions and refunds",
              "programmingLanguage": "Go",
              "author": {
                "@type": "Person",
                "name": "Pedro Rojas Reyes"
              }
            }
          ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-section', section);
        script.textContent = JSON.stringify(projectsData);
        document.head.appendChild(script);
      }
    };

    addStructuredData();
    
    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"][data-section]');
      scripts.forEach(script => script.remove());
    };
  }, [section]);

  return seoData;
};