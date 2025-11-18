export const content = {
  en: {
    nav: {
      aboutMe: "About Me",
      services: "Services",
      whyMe: "Why Me",
      portfolio: "Portfolio",
      contributions: "Portfolio",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      language: "ES / Español"
    },
    hero: {
      name: "Pedro Rojas Reyes",
      title: "I Help Puebla Businesses Get More Clients and Automate",
      description: "I create professional, fast, and secure websites that convert visitors into sales.",
      specialization: "Custom solutions that make your business stand out online and attract more customers.",
      downloadResume: "Schedule an Exploratory Call",
      availability: "Serving local businesses in Puebla and beyond."
    },
    about: {
      title: "About Me",
      paragraph1: "I'm Pedro R., a web consultant and developer based in Puebla. My passion is using technology to help local businesses like yours grow. I understand the challenges of small and medium businesses and I know how important it is to have a strong online presence.",
      paragraph2: "With over 10 years of experience in web development and cloud infrastructure, I've worked with companies like OCC Mundial, building high-performance systems. Now, I use that expertise to help local businesses in Puebla get more customers and grow online.",
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
          title: "Your Site: Fast and Always Available",
          description: "Forget about slow hosting that makes your customers wait. I use modern infrastructure that guarantees instant loading and maximum stability. Your website will always be ready to sell and optimized so Google prefers it over the competition.",
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
    portfolio: {
      title: "My Creative Showcase",
      subtitle: "Real results for businesses and SMEs. Innovative projects, impactful designs, and solutions that set standards.",
      projects: [
        {
          title: "Nuu Dee Consulting",
          description: "A modern and ultra-fast website (Next.js) for a visa processing consultancy. The design focuses on a clear call-to-action and establishing authority, generating instant credibility and capturing new prospects.",
          image: "/hero-section-resize1.png",
          url: "https://consultorianuudee.com",
          tags: ["Next.js", "SEO", "Conversions"]
        },
        {
          title: "Local Restaurant",
          description: "Responsive website with online menu and reservation system. Increased visibility by 200% in local searches and reduced phone inquiries by 60%.",
          image: "/images/portfolio/restaurant.jpg",
          url: "#",
          tags: ["React", "Online Reservations", "Local SEO"]
        },
        {
          title: "Professional Services",
          description: "Corporate website with customer portal and automated quote system. Reduced response time from 48 to 2 hours.",
          image: "/images/portfolio/services.jpg",
          url: "#",
          tags: ["Custom Portal", "Automation", "CRM"]
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
      portfolio: "Portafolio",
      contributions: "Portafolio",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto",
      language: "EN / English"
    },
    hero: {
      name: "Pedro Rojas Reyes",
      title: "Ayudo a Negocios en Puebla a Conseguir Más Clientes y Automatizar",
      description: "Creo sitios web profesionales, rápidos y seguros que convierten visitantes en ventas.",
      specialization: "Soluciones personalizadas que hacen que tu negocio destaque en línea y atraiga más clientes.",
      downloadResume: "Agenda una Llamada Exploratoria",
      availability: "Sirviendo a negocios locales en Puebla y más."
    },
    about: {
      title: "Acerca de Mí",
      paragraph1: "Soy Pedro R., un consultor y desarrollador web basado en Puebla. Mi pasión es usar la tecnología para ayudar a negocios locales como el tuyo a crecer. Entiendo los retos de la pequeña y mediana empresa y sé lo importante que es tener una presencia en línea sólida.",
      paragraph2: "Con más de 10 años de experiencia en desarrollo web e infraestructura en la nube, he trabajado con empresas como OCC Mundial, construyendo sistemas de alto rendimiento. Ahora, uso esa experiencia para ayudar a negocios locales en Puebla a conseguir más clientes y crecer en línea.",
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
          title: "Tu Sitio: Rápido y Siempre Disponible",
          description: "Olvídate de los hostings lentos que hacen esperar a tus clientes. Uso infraestructura moderna que garantiza una carga instantánea y máxima estabilidad. Tu página siempre estará lista para vender y optimizada para que Google la prefiera sobre la competencia.",
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
    portfolio: {
      title: "Mi Muestra Creativa",
      subtitle: "Resultados reales para negocios y Pymes. Proyectos innovadores, diseños de impacto y soluciones que definen estándares.",
      projects: [
        {
          title: "Consultoría Nuu Dee",
          description: "Un sitio web moderno y ultra-rápido (Next.js) para una consultoría de trámites de visa. El diseño se enfoca en un llamado a la acción claro y en establecer autoridad, generando credibilidad al instante y capturando nuevos prospectos.",
          image: "/images/portfolio/consultoria-nuudee.jpg",
          url: "https://consultorianuudee.com",
          tags: ["Next.js", "SEO", "Conversiones"]
        },
        {
          title: "Restaurante Local",
          description: "Sitio web responsivo con menú en línea y sistema de reservas. Aumentó la visibilidad en 200% en búsquedas locales y redujo consultas telefónicas en 60%.",
          image: "/images/portfolio/restaurant.jpg",
          url: "#",
          tags: ["React", "Reservas Online", "SEO Local"]
        },
        {
          title: "Servicios Profesionales",
          description: "Sitio corporativo con portal de clientes y sistema de cotización automatizado. Redujo tiempo de respuesta de 48 a 2 horas.",
          image: "/images/portfolio/services.jpg",
          url: "#",
          tags: ["Portal Custom", "Automatización", "CRM"]
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