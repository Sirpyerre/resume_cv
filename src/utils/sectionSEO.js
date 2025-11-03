// Section-specific SEO content for both languages
export const sectionSEO = {
  en: {
    about: {
      title: "About Me - Pedro Rojas Reyes",
      description: "Learn about my 10+ years of experience as a Senior Backend Developer, specializing in Go, .NET, and cloud native technologies.",
      keywords: "About Pedro Rojas, Backend Developer Experience, Go Developer, .NET Developer, Software Engineer Background"
    },
    projects: {
      title: "Projects - Pedro Rojas Reyes",
      description: "Explore my personal projects and labs including Fintech backends, payment platforms, and clean architecture implementations in Go and .NET.",
      keywords: "Go Projects, .NET Projects, Fintech Backend, Payment Platform, Clean Architecture, Open Source Projects"
    },
    experience: {
      title: "Professional Experience - Pedro Rojas Reyes",
      description: "My professional experience at OCC Mundial and BlackInTech, leading backend development, cloud migrations, and microservices architecture.",
      keywords: "Professional Experience, OCC Mundial, BlackInTech, Backend Development, Kafka, GraphQL, Kubernetes Migration"
    },
    education: {
      title: "Education & Certifications - Pedro Rojas Reyes",
      description: "My academic background and professional certifications including Google Go, Kubernetes, and DevOps training from top institutions.",
      keywords: "Education, Certifications, Google Go Certificate, Kubernetes Training, DevOps, Universidad Tecmilenio"
    },
    contact: {
      title: "Contact - Pedro Rojas Reyes",
      description: "Get in touch to discuss your next scalable project or career opportunities in backend development with Go, .NET, and cloud technologies.",
      keywords: "Contact Pedro Rojas, Hire Backend Developer, Go Developer for Hire, .NET Developer, Freelance Developer"
    }
  },
  es: {
    about: {
      title: "Acerca de Mí - Pedro Rojas Reyes",
      description: "Conoce mis más de 10 años de experiencia como Desarrollador Backend Senior, especializado en Go, .NET y tecnologías cloud native.",
      keywords: "Acerca de Pedro Rojas, Experiencia Desarrollador Backend, Desarrollador Go, Desarrollador .NET, Antecedentes Ingeniero Software"
    },
    projects: {
      title: "Proyectos - Pedro Rojas Reyes", 
      description: "Explora mis proyectos personales y laboratorios incluyendo backends Fintech, plataformas de pagos e implementaciones de arquitectura limpia en Go y .NET.",
      keywords: "Proyectos Go, Proyectos .NET, Backend Fintech, Plataforma Pagos, Arquitectura Limpia, Proyectos Open Source"
    },
    experience: {
      title: "Experiencia Profesional - Pedro Rojas Reyes",
      description: "Mi experiencia profesional en OCC Mundial y BlackInTech, liderando desarrollo backend, migraciones cloud y arquitectura de microservicios.",
      keywords: "Experiencia Profesional, OCC Mundial, BlackInTech, Desarrollo Backend, Kafka, GraphQL, Migración Kubernetes"
    },
    education: {
      title: "Educación y Certificaciones - Pedro Rojas Reyes",
      description: "Mi formación académica y certificaciones profesionales incluyendo Google Go, Kubernetes y DevOps de instituciones reconocidas.",
      keywords: "Educación, Certificaciones, Certificado Google Go, Entrenamiento Kubernetes, DevOps, Universidad Tecmilenio"
    },
    contact: {
      title: "Contacto - Pedro Rojas Reyes",
      description: "Contáctame para discutir tu próximo proyecto escalable o oportunidades laborales en desarrollo backend con Go, .NET y tecnologías cloud.",
      keywords: "Contacto Pedro Rojas, Contratar Desarrollador Backend, Desarrollador Go Freelance, Desarrollador .NET, Desarrollador Independiente"
    }
  }
};

// Helper function to get section SEO data
export const getSectionSEO = (section, language = 'en') => {
  return sectionSEO[language]?.[section] || sectionSEO.en[section] || {};
};