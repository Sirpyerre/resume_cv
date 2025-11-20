// Section-specific SEO content for both languages
export const sectionSEO = {
  en: {
    about: {
      title: "About Me - Pedro Rojas Reyes | Web Developer Puebla",
      description: "Web consultant and developer in Puebla with 10+ years of experience. I help local businesses grow online with professional websites and custom solutions.",
      keywords: "About Pedro Rojas, Web Developer Puebla, Puebla Web Consultant, Business Website Developer, Local Web Services"
    },
    services: {
      title: "Web Services - Pedro Rojas Reyes | Puebla",
      description: "Professional web services for Puebla businesses: essential websites, custom web applications, and ongoing maintenance. Get more clients online.",
      keywords: "Web Services Puebla, Website Development Packages, Custom Web Apps, Website Maintenance, Business Web Solutions"
    },
    portfolio: {
      title: "Portfolio - Pedro Rojas Reyes | Successful Projects",
      description: "See my portfolio of successful web projects for local businesses. Real results: increased visibility, more clients, and automated processes.",
      keywords: "Web Portfolio, Success Stories, Client Projects, Business Websites, Web Development Examples Puebla"
    },
    contact: {
      title: "Contact - Pedro Rojas Reyes | Free Consultation",
      description: "Get a free consultation for your business website project. Located in Puebla, serving local businesses throughout Mexico.",
      keywords: "Contact Web Developer, Free Consultation Puebla, Hire Web Developer Mexico, Business Website Quote, Web Services Contact"
    }
  },
  es: {
    about: {
      title: "Acerca de Mí - Pedro Rojas Reyes | Desarrollador Web Puebla",
      description: "Consultor y desarrollador web en Puebla con más de 10 años de experiencia. Ayudo a negocios locales a crecer en línea con sitios web profesionales y soluciones personalizadas.",
      keywords: "Acerca de Pedro Rojas, Desarrollador Web Puebla, Consultor Web Puebla, Desarrollador Sitios Negocios, Servicios Web Locales"
    },
    services: {
      title: "Servicios Web - Pedro Rojas Reyes | Puebla",
      description: "Servicios web profesionales para negocios en Puebla: sitios esenciales, aplicaciones web personalizadas y mantenimiento continuo. Consigue más clientes en línea.",
      keywords: "Servicios Web Puebla, Paquetes Desarrollo Web, Apps Web Personalizadas, Mantenimiento Sitios Web, Soluciones Web Negocios"
    },
    portfolio: {
      title: "Portafolio - Pedro Rojas Reyes | Proyectos Exitosos",
      description: "Conoce mi portafolio de proyectos web exitosos para negocios locales. Resultados reales: mayor visibilidad, más clientes y procesos automatizados.",
      keywords: "Portafolio Web, Casos de Éxito, Proyectos Clientes, Sitios Web Negocios, Ejemplos Desarrollo Web Puebla"
    },
    contact: {
      title: "Contacto - Pedro Rojas Reyes | Consulta Gratuita",
      description: "Obtén una consulta gratuita para el proyecto web de tu negocio. Ubicado en Puebla, atendiendo negocios locales en todo México.",
      keywords: "Contacto Desarrollador Web, Consulta Gratis Puebla, Contratar Desarrollador Web México, Cotización Sitio Web, Contacto Servicios Web"
    }
  }
};

// Helper function to get section SEO data
export const getSectionSEO = (section, language = 'en') => {
  return sectionSEO[language]?.[section] || sectionSEO.en[section] || {};
};