export const content = {
  en: {
    nav: {
      aboutMe: "About Me",
      services: "Services",
      whyMe: "Why Me",
      contributions: "Success Stories",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      language: "ES / Español"
    },
    hero: {
      name: "Pedro Rojas Reyes",
      title: "I Help Puebla Businesses Get More Clients",
      description: "I create professional, fast, and secure websites that convert visitors into sales.",
      specialization: "Custom solutions that make your business stand out online and attract more customers.",
      downloadResume: "Get a Free Consultation",
      availability: "Serving local businesses in Puebla and beyond."
    },
    about: {
      title: "About Me",
      paragraph1: "I'm Pedro R., a web consultant and developer based in Puebla. My passion is using technology to help local businesses like yours grow. I understand the challenges of small and medium businesses and I know how important it is to have a strong online presence.",
      paragraph2: "With over 10 years of experience in web development and cloud infrastructure, I've worked with companies like OCC Mundial, building high-performance systems. Now, I use that expertise to help local businesses in Puebla get more customers and grow online.",
      languages: "🌐 Languages: Spanish (Native), English (B2 Conversational)."
    },
    techStack: {
      title: "Tech Stack",
      languagesFrameworks: "Languages & Frameworks",
      cloudDevOps: "Cloud & DevOps",
      databases: "Databases & Messaging"
    },
    services: {
      title: "Solutions for Your Business",
      subtitle: "Packages designed to boost your online presence and grow your business",
      packages: [
        {
          name: "Essential Presence",
          price: "Starting at $5,000 MXN",
          description: "A professional and ultra-fast website so your customers can find you. Includes 3-5 pages (Home, Services, Contact) and a form to receive prospects directly to your email.",
          features: [
            "Modern and responsive design (mobile-friendly)",
            "3-5 professional pages",
            "Contact form integrated with email",
            "Google-optimized (Fast SEO)",
            "Hosted on secure cloud infrastructure",
            "1 month of free support"
          ],
          ideal: "Ideal for: Restaurants, Consultants, Local Services, Small Businesses"
        },
        {
          name: "Custom Web App",
          price: "From $15,000 MXN",
          description: "Need more? I integrate an appointment system, online quote calculator, or a customer portal. I turn your manual processes into a digital tool.",
          features: [
            "Custom online booking system",
            "Online quote calculator",
            "Customer/member portal",
            "Inventory or catalog management",
            "Integration with payment systems",
            "Scalable cloud infrastructure"
          ],
          ideal: "Ideal for: Service businesses, Stores, Professionals who need automation"
        },
        {
          name: "Maintenance & Support",
          price: "$1,500 MXN/month",
          description: "Your site always secure and up-to-date. I take care of the technology so you can take care of your business.",
          features: [
            "Monthly security updates",
            "Performance monitoring",
            "Regular backups",
            "Priority technical support",
            "Minor content updates",
            "Peace of mind knowing your site is protected"
          ],
          ideal: "Ideal for: Any business that wants to forget about technical problems"
        }
      ]
    },
    whyMe: {
      title: "Why Choose Me?",
      subtitle: "Your secret weapon in the digital world",
      reasons: [
        {
          title: "Amazon-Level Performance & Security",
          description: "Your site won't be on slow, cheap hosting. I use the same cloud infrastructure as Netflix and Amazon, ensuring your site loads instantly (something Google loves) and is protected against attacks.",
          icon: "shield"
        },
        {
          title: "Real Solutions, Not Just Templates",
          description: "Unlike other designers, I build functionality from scratch. If you need a specific tool for your business, I don't depend on plugins; I create it for you. This gives you total control and flexibility for the future.",
          icon: "code"
        },
        {
          title: "I Understand Local Business",
          description: "I'm not a faceless agency. I'm Pedro, based in Puebla, and I understand the challenges of local small and medium businesses. I speak your language and I'm here to help you grow.",
          icon: "handshake"
        }
      ]
    },
    contributions: {
      title: "Success Stories",
      subtitle: "Real results with leading companies",
      projects: [
        {
          title: "Migration from C# .NET Framework 4 to Go with Echo Framework",
          tags: ["Go", "Echo", "AWS S3", "Observability", "QA Leadership"],
          description: "Migration of a legacy application (ASP.NET Framework 4) to <strong>Go</strong> and <strong>Echo Framework</strong> in a <strong>Cloud Native</strong> environment. This improved performance and resilience. I implemented S3 security policies and roles for credentials. Led the definition of new QA scenarios to ensure the quality and stability of the migrated service.",
          leadership: "Leadership: Proposed and defined new QA testing scenarios, taking ownership of ensuring the quality and stability of the migrated service."
        },
        {
          title: "Design and Creation of GraphQL API for SEO Impact",
          tags: ["GraphQL", "Kubernetes", "Performance", "Solr"],
          description: "Critical redesign of the search flow to optimize speed and delegate filter construction to the backend. Created a <strong>GraphQL API from scratch</strong> to centralize filtering logic, achieving encapsulation of multiple responses in a single efficient query and reducing latency.",
          leadership: "Leadership: Proposed and defined new performance optimization strategies, ensuring the GraphQL API met the needs of both frontend and backend teams."
        },
        {
          title: "Most Challenging Project: Migration of 3 Legacy Apps to Kubernetes",
          tags: ["Kubernetes", "Go", "Prometheus", "Grafana", "CI/CD Harness"],
          description: "Migration of 3 <strong>on-premise</strong> legacy applications to a <strong>Kubernetes</strong> environment. The most critical application (search engine) exhibited latency and <strong>memory leaks</strong>." +
"<ul><li>Performance: Reduced inter-service communication latency by <strong>89%</strong>. Eliminated memory leaks through code profiling and optimization in Go.</li><li>Observability: Implemented Prometheus metrics and Grafana dashboards for real-time monitoring of application health and performance.</li><li>CI/CD: Established a robust CI/CD pipeline using Harness, automating deployments and rollbacks to Kubernetes clusters.</li></ul>",
          leadership: "Leadership: Proposed and defined new observability and performance optimization strategies, ensuring the migrated applications met the needs of both frontend and backend teams."
        }
      ]
    },
    projects: {
      title: "Personal Projects & Labs",
      subtitle: "Learning Repositories, Labs and Proprietary Tools",
      items: [
        {
          title: "Fintech Backend (Core)",
          description: "The project follows a layered architecture to promote separation of concerns and modularity. Primary technologies include Go, PostgreSQL, Docker and Swagger. Application is containerized using Docker and orchestrated with Docker Compose for easy setup and deployment.",
          tags: ["Go", "PostgreSQL", "Docker", "Swagger"],
          link: "View Repository >",
          url: "https://github.com/Sirpyerre/fintech-backend"
        },
        {
          title: "Payment Platform",
          description: "This project is an online payment platform that enables merchants to process payments, retrieve payment details, and process refunds via a simple API. The platform is built using Go and the Echo framework, with PostgreSQL, and Wiremock for simulating external payment gateways.",
          tags: ["Go", "Echo Framework", "PostgreSQL", "Wiremock"],
          link: "View Repository >",
          url: "https://github.com/Sirpyerre/payment-platform"
        },
        {
          title: "FileUploadApi (.NET Clean Architecture)",
          description: "A simple file upload API built with .NET 8, following Clean Architecture principles. The API allows users to register, upload and manage photos, with file storage simulated using AWS S3 (LocalStack) and persistence with SQL Server running in Docker.",
          tags: [".NET 8", "Clean Architecture", "SQL Server", "LocalStack"],
          link: "View Repository >",
          url: "https://github.com/Sirpyerre/uploadFiles"
        },
        {
          title: "Pastee Clipboard (Productivity)",
          description: "Pastee Clipboard is a lightweight clipboard manager that lives in your system tray, allowing you to monitor and reuse your clipboard history with ease. Designed with productivity in mind.",
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
        },
        {
          title: "Full stack Developer",
          company: "LTE Group",
          period: "March 2017 - March 2018",
          responsibilities: [
            "Development and implementation of graphs and reports in CodeIgniter PHP framework.",
            "Development and implementation of an inventory and warehouse management module in Laravel.",
            "Planning and designing a condominium management system in Laravel."
          ]
        },
        {
          title: "Full stack Developer",
          company: "BECITHEW",
          period: "February 2012 - January 2017",
          responsibilities: [
            "Implement the redesign of the mercadojobs.com website.",
            "Planning, designing, and implementing a basic ERP (orders, returns,delivery remissions, and accounts receivable).",
            "Development and implementation of an email marketing module for mercadojobs website.",
            "Developed a PHP library to facilitate communication with Elasticsearch. This library enabled term-based search functionality for autocomplete features."
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
      subtitle: "Ready to grow your business online? Let's talk about how I can help you get more customers!",
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
      services: "Servicios",
      whyMe: "Por Qué Yo",
      contributions: "Casos de Éxito",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto",
      language: "EN / English"
    },
    hero: {
      name: "Pedro Rojas Reyes",
      title: "Ayudo a Negocios en Puebla a Conseguir Más Clientes",
      description: "Creo sitios web profesionales, rápidos y seguros que convierten visitantes en ventas.",
      specialization: "Soluciones personalizadas que hacen que tu negocio destaque en línea y atraiga más clientes.",
      downloadResume: "Obtén una Consulta Gratuita",
      availability: "Sirviendo a negocios locales en Puebla y más allá."
    },
    about: {
      title: "Acerca de Mí",
      paragraph1: "Soy Pedro R., un consultor y desarrollador web basado en Puebla. Mi pasión es usar la tecnología para ayudar a negocios locales como el tuyo a crecer. Entiendo los retos de la pequeña y mediana empresa y sé lo importante que es tener una presencia en línea sólida.",
      paragraph2: "Con más de 10 años de experiencia en desarrollo web e infraestructura en la nube, he trabajado con empresas como OCC Mundial, construyendo sistemas de alto rendimiento. Ahora, uso esa experiencia para ayudar a negocios locales en Puebla a conseguir más clientes y crecer en línea.",
      languages: "🌐 Idiomas: Español (Nativo), Inglés (B2 Conversacional)."
    },
    techStack: {
      title: "Stack Tecnológico",
      languagesFrameworks: "Lenguajes y Frameworks",
      cloudDevOps: "Cloud y DevOps",
      databases: "Bases de Datos y Mensajería"
    },
    services: {
      title: "Soluciones para tu Negocio",
      subtitle: "Paquetes diseñados para impulsar tu presencia en línea y hacer crecer tu negocio",
      packages: [
        {
          name: "Presencia Esencial",
          price: "Desde $5,000 MXN",
          description: "Un sitio web profesional y ultra-rápido para que tus clientes te encuentren. Incluye 3-5 páginas (Inicio, Servicios, Contacto) y un formulario para recibir prospectos directo en tu email.",
          features: [
            "Diseño moderno y responsivo (móvil-friendly)",
            "3-5 páginas profesionales",
            "Formulario de contacto integrado con email",
            "Optimizado para Google (SEO rápido)",
            "Alojamiento en infraestructura en la nube segura",
            "1 mes de soporte gratuito"
          ],
          ideal: "Ideal para: Restaurantes, Consultores, Servicios Locales, Pequeños Negocios"
        },
        {
          name: "Web App Personalizada",
          price: "Desde $15,000 MXN",
          description: "¿Necesitas más? Integro un sistema de citas, un cotizador en línea o un portal para tus clientes. Convierto tus procesos manuales en una herramienta digital.",
          features: [
            "Sistema de reservas en línea personalizado",
            "Cotizador en línea",
            "Portal para clientes/miembros",
            "Gestión de inventarios o catálogos",
            "Integración con sistemas de pago",
            "Infraestructura en la nube escalable"
          ],
          ideal: "Ideal para: Negocios de servicios, Tiendas, Profesionales que necesitan automatización"
        },
        {
          name: "Mantenimiento y Soporte",
          price: "$1,500 MXN/mes",
          description: "Tu sitio siempre seguro y actualizado. Me encargo de la tecnología para que tú te encargues de tu negocio.",
          features: [
            "Actualizaciones de seguridad mensuales",
            "Monitoreo de rendimiento",
            "Respaldos regulares",
            "Soporte técnico prioritario",
            "Actualizaciones menores de contenido",
            "Tranquilidad de saber que tu sitio está protegido"
          ],
          ideal: "Ideal para: Cualquier negocio que quiera olvidarse de problemas técnicos"
        }
      ]
    },
    whyMe: {
      title: "¿Por Qué Elegirme?",
      subtitle: "Tu arma secreta en el mundo digital",
      reasons: [
        {
          title: "Rendimiento y Seguridad Nivel Amazon",
          description: "Tu sitio no estará en un hosting lento y barato. Uso la misma infraestructura en la nube que Netflix y Amazon, garantizando que tu sitio cargue al instante (algo que Google ama) y esté protegido contra ataques.",
          icon: "shield"
        },
        {
          title: "Soluciones Reales, No Solo Plantillas",
          description: "A diferencia de otros diseñadores, yo construyo la funcionalidad desde cero. Si necesitas una herramienta específica para tu negocio, no dependo de plugins; yo la creo para ti. Esto te da control total y flexibilidad a futuro.",
          icon: "code"
        },
        {
          title: "Entiendo el Negocio Local",
          description: "No soy una agencia sin rostro. Soy Pedro, basado en Puebla, y entiendo los retos de las pequeñas y medianas empresas locales. Hablo tu idioma y estoy aquí para ayudarte a crecer.",
          icon: "handshake"
        }
      ]
    },
    contributions: {
      title: "Casos de Éxito",
      subtitle: "Resultados reales con empresas líderes",
      projects: [
        {
          title: "Migración de C# .NET Framework 4 a Go con Echo Framework",
          tags: ["Go", "Echo", "AWS S3", "Observabilidad", "Liderazgo QA"],
          description: "Migración de una aplicación legacy (ASP.NET Framework 4) a <strong>Go</strong> y <strong>Echo Framework</strong> en un entorno <strong>Cloud Native</strong>. Esto mejoró la performance y resiliencia. Implementé políticas de seguridad S3 y roles para credenciales. Lideré la definición de nuevos escenarios de QA para asegurar la calidad y estabilidad del servicio migrado.",
          leadership: "Liderazgo: Propuse y definí nuevos escenarios de prueba QA, tomando propiedad de asegurar la calidad y estabilidad del servicio migrado."
        },
        {
          title: "Diseño y Creación de API GraphQL para Impacto SEO",
          tags: ["GraphQL", "Kubernetes", "Rendimiento", "Solr"],
          description: "Rediseño crítico del flujo de búsqueda para optimizar la velocidad y delegar la construcción de filtros al backend. Creé una API <strong>GraphQL desde cero</strong> para centralizar la lógica de filtrado, logrando encapsular múltiples respuestas en una sola consulta eficiente y reduciendo la latencia.",
          leadership: "Liderazgo: Me convertí en el punto técnico de referencia del proyecto. Lideré la comunicación y la aclaración de roles en un entorno ambiguo frente a colegas senior, fortaleciendo el *ownership* técnico."
        },
        {
          title: "Proyecto Más Desafiante: Migración de 3 Apps Legacy a Kubernetes",
          tags: ["Kubernetes", "Go", "Prometheus", "Grafana", "CI/CD Harness"],
          description: "Migración de 3 aplicaciones legacy <strong>on-premise</strong> a un entorno <strong>Kubernetes</strong>. La aplicación más crítica (motor de búsqueda) presentaba latencia y <strong>memory leaks</strong>." +
"<ul><li>Rendimiento: Reduje la latencia de comunicación entre servicios en un <strong>89%</strong>. Eliminé los <strong>memory leaks</strong> y se redujo significativamente el consumo de CPU/Memoria.</li>" +
"<li>Observabilidad: Implementé un stack de <strong>Prometheus/OpenTelemetry/Grafana</strong> desde cero, obteniendo visibilidad total del rendimiento de la aplicación en producción por primera vez.</li>" +
"<li>Estabilidad: Implementé <strong>pipelines</strong> <strong>CI/CD con Harness</strong> para el despliegue automático en Kubernetes, mejorando la estabilidad.</li></ul>",
          leadership: "Liderazgo: Liderazgo Técnico y Ownership: Tomé la iniciativa en el proyecto de migración (de principio a fin), mejorando la calidad del código, la observabilidad y la documentación."
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
        },
        {
          title: "Desarrollador Full stack",
          company: "LTE Group",
          period: "Marzo 2017 - Marzo 2018",
          responsibilities: [
            "Desarrollo e implementación de gráficos e informes en el framework CodeIgniter PHP.",
            "Desarrollo e implementación de un módulo de gestión de inventarios y almacenes en Laravel.",
            "Planificación y diseño de un sistema de gestión de condominios en Laravel."
          ]
        },
        {
          title: "Desarrollador Full stack",
          company: "BECITHEW",
          period: "Febrero 2012 - Enero 2017",
          responsibilities: [
            "Implementé el rediseño del sitio web mercadojobs.com.",
            "Planificación, diseño e implementación de un ERP básico (órdenes, devoluciones, remisiones de entrega y cuentas por cobrar).",
            "Desarrollo e implementación de un módulo de email marketing para el sitio web mercadojobs.",
            "Desarrollé una biblioteca PHP para facilitar la comunicación con Elasticsearch. Esta biblioteca permitió la funcionalidad de búsqueda basada en términos para características de autocompletado."
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
      subtitle: "¿Listo para hacer crecer tu negocio en línea? ¡Hablemos de cómo puedo ayudarte a conseguir más clientes!",
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