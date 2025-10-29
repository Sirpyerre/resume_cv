export const content = {
  en: {
    nav: {
      aboutMe: "About Me",
      techStack: "Tech Stack",
      contributions: "Key Professional Contributions",
      projects: "Personal Projects & Labs",
      experience: "Professional Experience",
      education: "Education & Courses",
      contact: "Contact",
      language: "ES / Español"
    },
    hero: {
      name: "Pedro Rojas Reyes",
      title: "Backend Developer / Cloud Native Engineer",
      description: "Designing and Scaling Microservices with Go, .NET and Kubernetes.",
      specialization: "Specialist in Distributed Architecture, Observability, and Code Quality.",
      downloadResume: "Download Resume (PDF)",
      availability: "Available for: Freelance Projects and Full-Time Opportunities."
    },
    about: {
      title: "About Me",
      paragraph1: "Senior Backend Developer with over 10 years of experience, including 6 years as Backend Developer and 4 years specializing in Go (Golang). Proven experience in the design and development of highly scalable distributed systems and microservices.",
      paragraph2: "Leadership in migration to AWS and Kubernetes, with a key focus on performance optimization and observability (Prometheus/Grafana). Application of Clean Architecture and Code Refactoring patterns to maintain code quality and modularity in C#/.NET and Go. Strong knowledge of CI/CD and Cloud Native processes.",
      languages: "🌐 Languages: Español (Native), Inglés (B2 Conversational)."
    },
    techStack: {
      title: "Tech Stack",
      languagesFrameworks: "Languages & Frameworks",
      cloudDevOps: "Cloud & DevOps",
      databases: "Databases & Messaging"
    },
    contributions: {
      title: "Key Professional Contributions",
      subtitle: "Impact, Leadership, and Results in Backend Engineering",
      projects: [
        {
          title: "Migration from C# .NET Framework 4 to Go with Echo Framework",
          tags: ["Go", "Echo", "AWS S3", "Observability", "QA Leadership"],
          leadership: "Leadership: undefined"
        },
        {
          title: "Design and Creation of GraphQL API for SEO Impact",
          tags: ["GraphQL", "Kubernetes", "Performance", "Solr"],
          leadership: "Leadership: undefined"
        },
        {
          title: "Most Challenging Project: Migration of 3 Legacy Apps to Kubernetes",
          tags: ["Kubernetes", "Go", "Prometheus", "Grafana", "CI/CD Harness"],
          leadership: "Leadership: undefined"
        }
      ]
    },
    projects: {
      title: "Personal Projects & Labs",
      subtitle: "Learning Repositories, Labs and Proprietary Tools",
      items: [
        {
          title: "Fintech Backend (Core)",
          description: "Backend de una plataforma Fintech con Arquitectura en Capas. Implementación de Docker y Docker Compose para orquestación y despliegue rápido. (Laboratorio de Arquitectura)",
          tags: ["Go", "PostgreSQL", "Docker", "Swagger"],
          link: "View Repository >",
          url: "https://github.com/Sirpyerre/fintech-backend"
        },
        {
          title: "Payment Platform",
          description: "Plataforma de pagos en línea para procesar transacciones y reembolsos. Utilizando Wiremock para simular gateways externos y asegurar la robustez. (Laboratorio de Integración)",
          tags: ["Go", "Echo Framework", "PostgreSQL", "Wiremock"],
          link: "View Repository >",
          url: "https://github.com/Sirpyerre/payment-platform"
        },
        {
          title: "FileUploadApi (.NET Clean Architecture)",
          description: "API de carga de archivos moderna con principios de Clean Architecture. Simulación de almacenamiento en AWS S3 (LocalStack) y persistencia con SQL Server. (Laboratorio de Patrones)",
          tags: [".NET 8", "Clean Architecture", "SQL Server", "LocalStack"],
          link: "View Repository >",
          url: "https://github.com/Sirpyerre/uploadFiles"
        },
        {
          title: "Pastee Clipboard (Productivity)",
          description: "Gestor de portapapeles ligero en la bandeja del sistema, diseñado para monitorizar y reutilizar el historial de portapapeles con foco en la productividad. (Herramienta Propia)",
          tags: ["Desktop Application", "C#", "UX"],
          link: "View Repository >",
          url: "https://github.com/Sirpyerre/pasteeclipboard"
        }
      ]
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Key Roles and Responsibilities",
      jobs: [
        {
          title: "Backend Developer",
          company: "OCC Mundial",
          period: "July 2022 - July 2025",
          responsibilities: [
            "Leadership in developing a Kafka-consuming Go Backend application, ensuring exactly-once message delivery and reducing database load.",
            "Design and implementation of a GraphQL API to consolidate and optimize responses from multiple REST APIs, enhancing frontend efficiency.",
            "Proposed and implemented Observability dashboards (Prometheus and Grafana) for real-time monitoring of critical services.",
            "Code Refactoring to increase test coverage to 80% in critical components, improving quality and modularity (C#/Go)."
          ]
        },
        {
          title: "Developer Fullstack",
          company: "BlackInTech",
          period: "March 2019 - June 2022",
          responsibilities: [
            "Creation and deployment of Lambdas with Go and Serverless frameworks on AWS.",
            "Design and implementation of robust APIs using AWS API Gateway and Lambda, adhering to Serverless best practices.",
            "Frontend feature development using React and backend development with Symfony Framework."
          ]
        }
      ]
    },
    education: {
      title: "Education & Courses",
      subtitle: "Academic Background and Certifications",
      degrees: "Academic Degrees",
      certifications: "Certifications & Courses",
      items: {
        degrees: [
          {
            title: "Information Technologies Management. Master's Degree.",
            institution: "Universidad Tecmilenio",
            period: "2016 - 2018"
          },
          {
            title: "IT Engineering. Degree.",
            institution: "Universidad Tecnológica de Puebla",
            period: "2009 - 2015"
          }
        ],
        certifications: [
          {
            title: "Programming with Google Go",
            institution: "University of California, Irvine. (Certificate)"
          },
          {
            title: "LFS250: Kubernetes and Cloud Native Essentials",
            institution: "The Linux Foundation."
          },
          {
            title: "Introduction to DevOps and Site Reliability Engineering",
            institution: "The Linux Foundation. (in progress)"
          }
        ]
      }
    },
    contact: {
      title: "Contact",
      subtitle: "Contact me to discuss your next scalable project or a career opportunity!",
      links: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
        website: "Website",
        youtube: "YouTube"
      }
    }
  },
  es: {
    nav: {
      aboutMe: "Acerca de Mí",
      techStack: "Stack Tecnológico",
      contributions: "Contribuciones Profesionales Clave",
      projects: "Proyectos Personales y Labs",
      experience: "Experiencia Profesional",
      education: "Educación y Cursos",
      contact: "Contacto",
      language: "EN / English"
    },
    hero: {
      name: "Pedro Rojas Reyes",
      title: "Desarrollador Backend / Ingeniero Cloud Native",
      description: "Diseñando y Escalando Microservicios con Go, .NET y Kubernetes.",
      specialization: "Especialista en Arquitectura Distribuida, Observabilidad y Calidad de Código.",
      downloadResume: "Descargar CV (PDF)",
      availability: "Disponible para: Proyectos Freelance y Oportunidades de Tiempo Completo."
    },
    about: {
      title: "Acerca de Mí",
      paragraph1: "Desarrollador Backend Senior con más de 10 años de experiencia, incluyendo 6 años como Desarrollador Backend y 4 años especializándome en Go (Golang). Experiencia comprobada en el diseño y desarrollo de sistemas distribuidos altamente escalables y microservicios.",
      paragraph2: "Liderazgo en migración a AWS y Kubernetes, con un enfoque clave en optimización de rendimiento y observabilidad (Prometheus/Grafana). Aplicación de patrones de Arquitectura Limpia y Refactorización de Código para mantener la calidad y modularidad del código en C#/.NET y Go. Sólido conocimiento de procesos CI/CD y Cloud Native.",
      languages: "🌐 Idiomas: Español (Nativo), Inglés (B2 Conversacional)."
    },
    techStack: {
      title: "Stack Tecnológico",
      languagesFrameworks: "Lenguajes y Frameworks",
      cloudDevOps: "Cloud y DevOps",
      databases: "Bases de Datos y Mensajería"
    },
    contributions: {
      title: "Contribuciones Profesionales Clave",
      subtitle: "Impacto, Liderazgo y Resultados en Ingeniería Backend",
      projects: [
        {
          title: "Migración de C# .NET Framework 4 a Go con Echo Framework",
          tags: ["Go", "Echo", "AWS S3", "Observabilidad", "Liderazgo QA"],
          leadership: "Liderazgo: indefinido"
        },
        {
          title: "Diseño y Creación de API GraphQL para Impacto SEO",
          tags: ["GraphQL", "Kubernetes", "Rendimiento", "Solr"],
          leadership: "Liderazgo: indefinido"
        },
        {
          title: "Proyecto Más Desafiante: Migración de 3 Apps Legacy a Kubernetes",
          tags: ["Kubernetes", "Go", "Prometheus", "Grafana", "CI/CD Harness"],
          leadership: "Liderazgo: indefinido"
        }
      ]
    },
    projects: {
      title: "Proyectos Personales y Labs",
      subtitle: "Repositorios de Aprendizaje, Labs y Herramientas Propias",
      items: [
        {
          title: "Fintech Backend (Core)",
          description: "Backend de una plataforma Fintech con Arquitectura en Capas. Implementación de Docker y Docker Compose para orquestación y despliegue rápido. (Laboratorio de Arquitectura)",
          tags: ["Go", "PostgreSQL", "Docker", "Swagger"],
          link: "Ver Repositorio >",
          url: "https://github.com/Sirpyerre/fintech-backend"
        },
        {
          title: "Plataforma de Pagos",
          description: "Plataforma de pagos en línea para procesar transacciones y reembolsos. Utilizando Wiremock para simular gateways externos y asegurar la robustez. (Laboratorio de Integración)",
          tags: ["Go", "Echo Framework", "PostgreSQL", "Wiremock"],
          link: "Ver Repositorio >",
          url: "https://github.com/Sirpyerre/payment-platform"
        },
        {
          title: "FileUploadApi (Arquitectura Limpia .NET)",
          description: "API de carga de archivos moderna con principios de Clean Architecture. Simulación de almacenamiento en AWS S3 (LocalStack) y persistencia con SQL Server. (Laboratorio de Patrones)",
          tags: [".NET 8", "Clean Architecture", "SQL Server", "LocalStack"],
          link: "Ver Repositorio >",
          url: "https://github.com/Sirpyerre/uploadFiles"
        },
        {
          title: "Pastee Clipboard (Productividad)",
          description: "Gestor de portapapeles ligero en la bandeja del sistema, diseñado para monitorizar y reutilizar el historial de portapapeles con foco en la productividad. (Herramienta Propia)",
          tags: ["Aplicación de Escritorio", "C#", "UX"],
          link: "Ver Repositorio >",
          url: "https://github.com/Sirpyerre/pasteeclipboard"
        }
      ]
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Roles Clave y Responsabilidades",
      jobs: [
        {
          title: "Desarrollador Backend",
          company: "OCC Mundial",
          period: "Julio 2022 - Julio 2025",
          responsibilities: [
            "Liderazgo en el desarrollo de una aplicación Backend Go que consume Kafka, asegurando entrega de mensajes exactly-once y reduciendo la carga de la base de datos.",
            "Diseño e implementación de una API GraphQL para consolidar y optimizar respuestas de múltiples APIs REST, mejorando la eficiencia del frontend.",
            "Propuesta e implementación de dashboards de Observabilidad (Prometheus y Grafana) para monitoreo en tiempo real de servicios críticos.",
            "Refactorización de Código para aumentar la cobertura de pruebas al 80% en componentes críticos, mejorando la calidad y modularidad (C#/Go)."
          ]
        },
        {
          title: "Desarrollador Fullstack",
          company: "BlackInTech",
          period: "Marzo 2019 - Junio 2022",
          responsibilities: [
            "Creación y despliegue de Lambdas con Go y frameworks Serverless en AWS.",
            "Diseño e implementación de APIs robustas usando AWS API Gateway y Lambda, adhiriéndose a las mejores prácticas Serverless.",
            "Desarrollo de características frontend usando React y desarrollo backend con Symfony Framework."
          ]
        }
      ]
    },
    education: {
      title: "Educación y Cursos",
      subtitle: "Formación Académica y Certificaciones",
      degrees: "Grados Académicos",
      certifications: "Certificaciones y Cursos",
      items: {
        degrees: [
          {
            title: "Gestión de Tecnologías de la Información. Maestría.",
            institution: "Universidad Tecmilenio",
            period: "2016 - 2018"
          },
          {
            title: "Ingeniería en TI. Licenciatura.",
            institution: "Universidad Tecnológica de Puebla",
            period: "2009 - 2015"
          }
        ],
        certifications: [
          {
            title: "Programación con Google Go",
            institution: "Universidad de California, Irvine. (Certificado)"
          },
          {
            title: "LFS250: Kubernetes y Fundamentos Cloud Native",
            institution: "The Linux Foundation."
          },
          {
            title: "Introducción a DevOps e Ingeniería de Confiabilidad del Sitio",
            institution: "The Linux Foundation. (en progreso)"
          }
        ]
      }
    },
    contact: {
      title: "Contacto",
      subtitle: "¡Contáctame para discutir tu próximo proyecto escalable o una oportunidad laboral!",
      links: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
        website: "Sitio Web",
        youtube: "YouTube"
      }
    }
  }
};