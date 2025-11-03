export const seoConfig = {
  // Site Information
  siteTitle: "Pedro Rojas Reyes - Senior Backend Developer",
  siteDescription: "Senior Backend Developer with 10+ years experience in Go, .NET, Kubernetes, and Cloud Native technologies. Specializing in scalable microservices and distributed systems.",
  siteUrl: "https://pedrorojas.dev", // Update with your actual domain
  siteImage: "/og-image.jpg",
  author: "Pedro Rojas Reyes",
  
  // Social Media
  social: {
    twitter: "@pedrorojas", // Update with your actual Twitter handle
    github: "https://github.com/Sirpyerre",
    linkedin: "https://linkedin.com/in/pedrorojas", // Update with your actual LinkedIn
    email: "pedro@example.com" // Update with your actual email
  },

  // Section-specific SEO data
  sections: {
    home: {
      title: "Pedro Rojas Reyes - Senior Backend Developer",
      description: "Senior Backend Developer specializing in Go, .NET, Kubernetes, and Cloud Native technologies. Available for freelance projects and full-time opportunities.",
      keywords: "Backend Developer, Go, Golang, .NET, Kubernetes, Cloud Native, Microservices, AWS, Docker"
    },
    about: {
      title: "About Me - Pedro Rojas Reyes",
      description: "Learn about my 10+ years of experience as a Senior Backend Developer, specializing in Go, .NET, and cloud native technologies.",
      keywords: "About Pedro Rojas, Backend Developer Experience, Go Developer, .NET Developer"
    },
    projects: {
      title: "Projects - Pedro Rojas Reyes",
      description: "Explore my personal projects and labs including Fintech backends, payment platforms, and clean architecture implementations.",
      keywords: "Go Projects, .NET Projects, Fintech Backend, Payment Platform, Clean Architecture"
    },
    experience: {
      title: "Professional Experience - Pedro Rojas Reyes", 
      description: "My professional experience at OCC Mundial and BlackInTech, leading backend development and cloud migrations.",
      keywords: "Professional Experience, OCC Mundial, BlackInTech, Backend Development, Kafka, GraphQL"
    },
    education: {
      title: "Education & Certifications - Pedro Rojas Reyes",
      description: "My academic background and professional certifications including Google Go, Kubernetes, and DevOps training.",
      keywords: "Education, Certifications, Google Go Certificate, Kubernetes Training, DevOps"
    },
    contact: {
      title: "Contact - Pedro Rojas Reyes",
      description: "Get in touch to discuss your next scalable project or career opportunities in backend development.",
      keywords: "Contact Pedro Rojas, Hire Backend Developer, Go Developer for Hire, .NET Developer"
    }
  },

  // Language-specific configurations
  languages: {
    en: {
      locale: "en_US",
      lang: "en",
      dir: "ltr"
    },
    es: {
      locale: "es_ES", 
      lang: "es",
      dir: "ltr"
    }
  }
};

// Helper function to get section-specific SEO data
export const getSectionSEO = (section, language = 'en') => {
  const sectionData = seoConfig.sections[section];
  const langConfig = seoConfig.languages[language];
  
  if (!sectionData) {
    return {
      title: seoConfig.siteTitle,
      description: seoConfig.siteDescription,
      ...langConfig
    };
  }

  return {
    ...sectionData,
    ...langConfig
  };
};