import { price } from "../config/pricing.js"

export const content = {
  en: {
    hero: {
      name: "Pedro Rojas Reyes",
      badge: "Custom software & web · Puebla, México",
      selectorTitle: "Pick how you want to stop losing time and customers",
      headlinePart1: "Get your business out of",
      headlinePart2: "Excel and WhatsApp",
      description: "I build the system your team needs: orders, inventory, appointments, quotes, or collections in one place. Less manual work, fewer errors, more time to sell.",
      ctaPrimary: "Get your system quote",
      ctaSecondary: "See real cases",
      socialProofCount: "10+ years",
      socialProofText: "building systems for companies that cannot afford to fail",
      starBadge: "Biggest results",
      starName: "From Excel to your system",
      starDesc: "A web system built around your process: role-based users, reports, and training included.",
      starPrice: `From ${price.system} MXN`,
      starTime: "3 to 5 weeks",
      starCta: "I want out of Excel",
      starHref: "/en/services/business-process-automation-puebla/",
      webName: "Website that sells",
      webDesc: `Site + WhatsApp + Google Business. From ${price.web} MXN.`,
      supportName: "Monthly support",
      supportDesc: `Hosting, backups, and changes. From ${price.supportWeb} MXN/month.`,
      whatsappQuestion: "Questions before deciding?",
      whatsappText: "Message me today and I will reply the same day.",
      whatsappCta: "Message me on WhatsApp",
      whatsappMessage: "Hi! I want to get my business out of Excel and WhatsApp. Can you help me see how?",
      title: "Systems and websites that solve how your business works",
      specialization: "I help businesses in Puebla replace manual work and win more customers online.",
      downloadResume: "Schedule an Exploratory Call",
      availability: "Serving local businesses in Puebla and beyond."
    },
    about: {
      title: "About Me",
      role: "Web and Software Consultant",
      location: "Puebla, México",
      experience: "10+ years of experience",
      paragraph1: "I'm Pedro R., a web and software consultant based in Puebla. I help businesses strengthen their online presence and explore digital systems for processes that have become difficult to manage manually.",
      paragraph2: "With over 10 years of experience in web development and cloud infrastructure, I've worked with companies like OCC Mundial, building high-performance systems. Now, I use that expertise to help local businesses in Puebla get more customers and grow online.",
    },
    services: {
      title: "Services and pricing",
      subtitle: "Start with the problem that costs you most: a system for your operation, a website that brings customers, or support so you can sleep well.",
      packages: [
        {
          name: "From Excel to your system",
          badge: "Flagship",
          featured: true,
          price: `From ${price.system} MXN`,
          time: "3 to 5 weeks",
          description: "A web system for one of your business processes: orders, inventory, appointments, quotes, or collections. Role-based users, reports, and training for your team.",
          href: "/en/services/business-process-automation-puebla/",
          extraHref: "/en/services/custom-software-puebla/",
          extraLabel: "Need a custom web app?",
          cta: "I want out of Excel",
          ctaMessage: `Hi, I want to get my business out of Excel. I am interested in From Excel to your system (from ${price.system} MXN).`,
          features: [
            "Orders, inventory, appointments, quotes, or collections",
            "Role-based users and permissions",
            "Reports you no longer build by hand",
            "Training for your team",
            "Integrations with payments, invoicing, or WhatsApp when in scope"
          ],
          ideal: "For teams losing hours between spreadsheets, email, and chats."
        },
        {
          name: "Website that sells",
          price: `From ${price.web} MXN`,
          time: "1 to 2 weeks",
          description: "A 3 to 5 page site built so people find you and message you: WhatsApp built in, Google Business Profile set up, and a contact form.",
          href: "/en/services/web-development-puebla/",
          cta: "I want more customers",
          ctaMessage: `Hi, I want a website that sells. I am interested in Website that sells (from ${price.web} MXN).`,
          features: [
            "3 to 5 responsive pages",
            "WhatsApp button and flow",
            "Google Business Profile set up",
            "Contact form",
            "Basic SEO and fast loading",
            "1 month of support"
          ],
          ideal: "For businesses and professionals who want to be found and contacted."
        },
        {
          name: "Monthly support",
          price: `From ${price.supportWeb} MXN/month (website)`,
          priceAlt: `${price.supportSystemFrom} to ${price.supportSystemTo} MXN/month (system)`,
          time: "Recurring",
          description: "I make sure everything keeps running: hosting, backups, updates, and 2 hours of changes per month.",
          href: "/en/services/website-maintenance/",
          cta: "I want peace of mind",
          ctaMessage: "Hi, I would like information about monthly support for my website or system.",
          features: [
            "Hosting and backups",
            "Security updates",
            "2 hours of changes per month",
            "Performance monitoring",
            "Priority technical support"
          ],
          ideal: "For anyone who does not want to worry about the technical side."
        }
      ]
    },
    credibility: {
      title: "I have built systems for companies like…",
      subtitle: "Real cases, no names. If one sounds familiar, tell me about yours.",
      familiarLabel: "Sound familiar?",
      problemLabel: "The problem",
      didLabel: "What I did",
      resultLabel: "The result",
      cases: [
        {
          metric: "8 h → 15 min",
          company: "Identity verification and trust company",
          title: "A dashboard that brings all the information into one place",
          quote: "Each review went from 6–8 hours to 15–20 minutes.",
          problem: "To review each person, the team queried several external services one by one and combined the results by hand. A single review could take 6 to 8 hours.",
          did: "I built an internal system that queries all those sources automatically and shows the information on a single screen. The team no longer jumps between tools: they see everything, assess, and decide.",
          results: ["Each review went from 6–8 hours to 15–20 minutes.", "The same team handles many more cases per day.", "Fewer errors from copying and pasting data by hand."],
          familiar: "If your team loses hours checking several systems, spreadsheets, or portals to build a report, that can be automated.",
          stack: "React · PHP (Mezzio/Laminas) · Go · MongoDB · AWS Lambda",
          cta: "I want to automate my reports",
          message: "Hi, my team loses hours gathering information from several systems. I want to see if it can be automated (From Excel to your system)."
        },
        {
          metric: "−40% errors",
          company: "Nationwide job platform",
          title: "A faster page that ranks better on Google",
          quote: "40% fewer load errors and better Google ranking.",
          problem: "The job listings page, one of the most visited, had to request data from several systems before displaying. It was slow, sometimes never finished loading, and Google penalized it.",
          did: "I built an intermediate layer that gathers all the data in a single request and groups repeated queries so the same thing is never fetched twice.",
          results: ["40% fewer load errors.", "Faster pages for users.", "Better Google ranking."],
          familiar: "A slow page loses visitors and customers. If your site is slow to load or does not show up on Google, it can be optimized.",
          stack: "Go · GraphQL",
          cta: "I want a faster website",
          message: "Hi, my website is slow or does not show up on Google. I am interested in Website that sells."
        },
        {
          metric: "0 rework",
          company: "Digital payments company",
          title: "Clarify the rules before coding: less rework, lower cost",
          quote: "I found a bug already in production that affected more customers than anyone thought.",
          problem: "When adding a new payment method, the business rules were unclear: who decides which methods each customer sees? Every change raised new questions and development moved blind.",
          did: "Before coding further, I built a table of all possible scenarios and reviewed it with the business team until every rule was defined and documented.",
          results: ["Clear rules validated by the business.", "Development finished with no rework.", "An existing production bug came to light."],
          familiar: "Many projects get more expensive because code is written before the process is understood. That is why I first define with you how your business works, then build.",
          stack: "",
          cta: "I want to define my process first",
          message: "Hi, I want to define my process properly before building a system (From Excel to your system)."
        },
        {
          metric: "Payments that stay up",
          company: "Digital payments company",
          title: "Connect systems with external services safely and reliably",
          quote: "Payments keep working even when the external service fails.",
          problem: "The company needed to connect its billing system to an external fraud-prevention service without stopping payments if that service failed or exposing customers' personal data.",
          did: "I built a reusable component that talks to the anti-fraud service, retries automatically on failure, and never stores sensitive data in logs. I planned and documented everything before writing code.",
          results: ["A production-ready, reusable connection.", "Payments keep working even if the external service has problems.", "Customers' personal data stays protected."],
          familiar: "If your business needs to connect with invoicing, online payments, WhatsApp, or your inventory system, I can integrate it safely.",
          stack: "",
          cta: "I want to connect my systems",
          message: "Hi, I need to connect my business with invoicing, payments, WhatsApp, or inventory (From Excel to your system)."
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
          title: "Your system does what your business needs",
          description: "I start from how you work, not from a template. If you need a specific tool, I build it for you, so you get control, flexibility, and a system that grows with your business.",
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
      subtitle: "Real projects, real results — from local businesses to developer communities.",
      projects: [
        {
          title: "Nuu Dee Consulting",
          description: "Professional website for a US tourist visa consulting service and artisanal products (seasoned salt) in Oaxaca's Mixtec Region. Conversion-focused design with fast loading and strong local presence in Huajuapan de León.",
          image: "https://res.cloudinary.com/dtbpucouh/image/upload/v1772485267/portfoli-freelance/site-consultoria-empresarial_ttuais.png",
          url: "https://consultorianuudee.com",
          tags: ["Next.js", "Local SEO", "Conversions"]
        },
        {
          title: "PHP Mexico Community",
          description: "Migration of the PHP Mexico community site from a Symfony/PHP stack to a modern Node.js + React architecture. Hosted on GitHub Pages — eliminating AWS server costs entirely while improving performance and maintainability for the community.",
          image: "https://res.cloudinary.com/dtbpucouh/image/upload/v1772485267/portfoli-freelance/phpmexico-site_xm9uqc.png",
          url: "https://phpmexico.mx/",
          tags: ["React", "Node.js", "Migration", "GitHub Pages"]
        },
        {
          title: "ACL Ingeniería",
          description: "Website redesign for Grupo ACL, a Puebla-based company specializing in preventive and corrective maintenance for industries, offices, and homes. Information architecture was reorganized and service presentation improved using the client's existing website builder — no platform migration required.",
          image: "https://res.cloudinary.com/dtbpucouh/image/upload/v1778698049/acl-ing-preview_hwjuva.png",
          url: "https://aclingenieria.com.mx",
          tags: ["Jimdo", "Web Redesign", "UX/Content"]
        },
          {
          title: "Centro de Estudios Puebla",
          description: "Website redesign for Centro de Estudios Puebla, a private school with 30 years of history offering education from preschool to high school. The institution's digital presence was modernized by reorganizing its academic information and improving the experience for parents, using Wix as the client's existing platform.",
          image: "https://res.cloudinary.com/dtbpucouh/image/upload/v1778698327/centro-de-estudios-puebla-web_rt7fdh.png",
          url: "https://www.centrodeestudiospuebla.com/",
          tags: ["Wix", "Web Redesign", "UX/Content", "Education"]
          }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Clear answers to the most common questions before starting your project.",
      items: [
        {
          question: "How much does a professional website cost?",
          answer: `A website that sells (3–5 pages, WhatsApp, Google Business Profile, and contact form) starts at ${price.web} MXN. Systems that replace Excel and WhatsApp start at ${price.system} MXN; the final quote depends on modules, users, integrations, and process complexity. Monthly support starts at ${price.supportWeb} MXN/month (website) and ${price.supportSystemFrom}–${price.supportSystemTo} MXN/month (system).`
        },
        {
          question: "How long does it take to build my website?",
          answer: "Website that sells is delivered in 1 to 2 weeks. Systems that replace Excel typically take 3 to 5 weeks depending on complexity. The timeline starts once we agree on the scope and you provide the content (texts and images)."
        },
        {
          question: "What does Website that sells include?",
          answer: "It includes: modern responsive design (works on mobile and desktop), 3–5 professional pages, WhatsApp integration, Google Business Profile set up, a contact form, basic SEO optimization so Google can find you, secure cloud hosting, and 1 month of free technical support."
        },
        {
          question: "Do you work with businesses outside Puebla?",
          answer: "Yes! While I'm based in Puebla and specialize in local businesses, I work with clients across Mexico and internationally. All communication and meetings can be done remotely via video call."
        },
        {
          question: "Do I need technical knowledge to hire you?",
          answer: "Not at all. You just need to know what your business needs — I take care of everything technical. I'll guide you through every step in plain language, no tech jargon."
        }
      ]
    },
    podcast: {
      pageTitle: "Podcast | El Developer de a Pie",
      eyebrow: "PODCAST",
      title: "El Developer de a Pie",
      tagline: "Conversations from the real trenches of a developer career.",
      description: "A podcast for people in the actual trenches, not the polished LinkedIn highlight reel. Job hunting, layoffs, interviews that make no sense, and what nobody tells you about working in tech.",
      listenOn: "Listen on your platform",
      episodesTitle: "Episodes",
      episodesSubtitle: "Newest first.",
      listenCta: "Listen to episode",
      empty: "No episodes available right now.",
    },
    contact: {
      title: "Contact",
      subtitle: "Ready to leave Excel behind and win more customers? Tell me about your business and what you want to solve; I will reply on WhatsApp.",
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
    hero: {
      name: "Pedro Rojas Reyes",
      badge: "Software a medida y web · Puebla, México",
      selectorTitle: "Elige cómo quieres dejar de perder tiempo y clientes",
      headlinePart1: "Saca tu negocio del",
      headlinePart2: "Excel y WhatsApp",
      description: "Construyo el sistema que tu equipo necesita: pedidos, inventario, citas, cotizaciones o cobranza en un solo lugar. Menos trabajo manual, menos errores, más tiempo para vender.",
      ctaPrimary: "Cotiza tu sistema",
      ctaSecondary: "Mira casos reales",
      socialProofCount: "10+ años",
      socialProofText: "construyendo sistemas para empresas que no pueden fallar",
      starBadge: "Lo que más resultados da",
      starName: "Del Excel a tu sistema",
      starDesc: "Un sistema web hecho para tu proceso: usuarios por rol, reportes y capacitación incluida.",
      starPrice: `Desde ${price.system} MXN`,
      starTime: "3 a 5 semanas",
      starCta: "Quiero salir del Excel",
      starHref: "/services/automatizacion-procesos-puebla/",
      webName: "Web que vende",
      webDesc: `Sitio + WhatsApp + Google Business. Desde ${price.web} MXN.`,
      supportName: "Soporte mensual",
      supportDesc: `Hosting, respaldos y cambios. Desde ${price.supportWeb} MXN/mes.`,
      whatsappQuestion: "¿Dudas antes de decidir?",
      whatsappText: "Escríbeme hoy y te respondo el mismo día.",
      whatsappCta: "Escríbeme por WhatsApp",
      whatsappMessage: "¡Hola! Quiero sacar mi negocio del Excel y WhatsApp. ¿Me ayudas a ver cómo?",
      title: "Sistemas y sitios que resuelven cómo trabaja tu negocio",
      specialization: "Ayudo a empresas en Puebla a dejar las tareas manuales y a conseguir más clientes en línea.",
      downloadResume: "Agenda una Llamada Exploratoria",
      availability: "Sirviendo a negocios locales en Puebla y más."
    },
    about: {
      title: "Acerca de Mí",
      role: "Consultor de Software y Desarrollo Web",
      location: "Puebla, México",
      experience: "10+ años de experiencia",
      paragraph1: "Soy Pedro R., consultor de software y desarrollador web en Puebla. Ayudo a empresas a fortalecer su presencia digital y a explorar sistemas para procesos que ya son difíciles de gestionar manualmente.",
      paragraph2: "Con más de 10 años de experiencia en desarrollo web e infraestructura en la nube, he trabajado con empresas como OCC Mundial, construyendo sistemas de alto rendimiento. Ahora, uso esa experiencia para ayudar a negocios locales en Puebla a conseguir más clientes y crecer en línea.",
    },
    services: {
      title: "Servicios y precios",
      subtitle: "Empieza por el problema que más te cuesta: un sistema para tu operación, una web que te traiga clientes, o soporte para dormir tranquilo.",
      packages: [
        {
          name: "Del Excel a tu sistema",
          badge: "Estrella",
          featured: true,
          price: `Desde ${price.system} MXN`,
          time: "3 a 5 semanas",
          description: "Un sistema web para un proceso de tu negocio: pedidos, inventario, citas, cotizaciones o cobranza. Usuarios por rol, reportes y capacitación para tu equipo.",
          href: "/services/automatizacion-procesos-puebla/",
          extraHref: "/services/software-a-medida-puebla/",
          extraLabel: "¿Necesitas una web app a medida?",
          cta: "Quiero salir del Excel",
          ctaMessage: `Hola, quiero sacar mi negocio del Excel. Me interesa Del Excel a tu sistema (desde ${price.system} MXN).`,
          features: [
            "Pedidos, inventario, citas, cotizaciones o cobranza",
            "Usuarios por rol y permisos",
            "Reportes que ya no armas a mano",
            "Capacitación para tu equipo",
            "Integraciones con pagos, facturación o WhatsApp según el alcance"
          ],
          ideal: "Para equipos que pierden horas entre hojas de cálculo, correos y chats."
        },
        {
          name: "Web que vende",
          price: `Desde ${price.web} MXN`,
          time: "1 a 2 semanas",
          description: "Sitio de 3 a 5 páginas pensado para que te encuentren y te escriban: WhatsApp integrado, Google Business Profile configurado y formulario de contacto.",
          href: "/services/desarrollo-web-puebla/",
          cta: "Quiero más clientes",
          ctaMessage: `Hola, quiero una web que venda. Me interesa Web que vende (desde ${price.web} MXN).`,
          features: [
            "3 a 5 páginas con diseño responsivo",
            "Botón y flujo de WhatsApp",
            "Google Business Profile configurado",
            "Formulario de contacto",
            "SEO básico y carga rápida",
            "1 mes de soporte"
          ],
          ideal: "Para negocios y profesionales que quieren que los encuentren y los contacten."
        },
        {
          name: "Soporte mensual",
          price: `Desde ${price.supportWeb} MXN/mes (web)`,
          priceAlt: `${price.supportSystemFrom} a ${price.supportSystemTo} MXN/mes (sistema)`,
          time: "Recurrente",
          description: "Yo me encargo de que todo siga funcionando: hosting, respaldos, actualizaciones y 2 horas de cambios al mes.",
          href: "/services/mantenimiento-web/",
          cta: "Quiero estar tranquilo",
          ctaMessage: "Hola, quiero información sobre el soporte mensual para mi sitio o sistema.",
          features: [
            "Hosting y respaldos",
            "Actualizaciones de seguridad",
            "2 horas de cambios al mes",
            "Monitoreo de rendimiento",
            "Soporte técnico prioritario"
          ],
          ideal: "Para quien no quiere preocuparse por la parte técnica."
        }
      ]
    },
    credibility: {
      title: "He construido sistemas para empresas como…",
      subtitle: "Casos reales, sin nombres. Si algo te suena familiar, cuéntame el tuyo.",
      familiarLabel: "¿Te suena familiar?",
      problemLabel: "El problema",
      didLabel: "Lo que hice",
      resultLabel: "El resultado",
      cases: [
        {
          metric: "8 h → 15 min",
          company: "Empresa de verificación de identidad y confianza",
          title: "Un panel que reúne toda la información en un solo lugar",
          quote: "Cada revisión pasó de 6–8 horas a 15–20 minutos.",
          problem: "Para revisar a cada persona, el equipo consultaba varios servicios externos uno por uno y juntaba los resultados a mano. Una sola revisión podía llevar entre 6 y 8 horas.",
          did: "Desarrollé un sistema interno que consulta todas esas fuentes de forma automática y muestra la información en una sola pantalla. El equipo ya no salta entre herramientas: ve todo, evalúa y decide.",
          results: ["Cada revisión pasó de 6–8 horas a 15–20 minutos.", "El mismo equipo atiende muchos más casos al día.", "Menos errores por copiar y pegar datos a mano."],
          familiar: "Si tu equipo pierde horas consultando varios sistemas, hojas de Excel o portales para armar un reporte, eso se puede automatizar.",
          stack: "React · PHP (Mezzio/Laminas) · Go · MongoDB · AWS Lambda",
          cta: "Quiero automatizar mis reportes",
          message: "Hola, mi equipo pierde horas juntando información de varios sistemas. Quiero ver si se puede automatizar (Del Excel a tu sistema)."
        },
        {
          metric: "−40% errores",
          company: "Plataforma de empleo de alcance nacional",
          title: "Una página más rápida que posiciona mejor en Google",
          quote: "40% menos errores de carga y mejor posicionamiento en Google.",
          problem: "La página de vacantes, una de las más visitadas, tenía que pedir información a varios sistemas antes de mostrarse. Era lenta, a veces no terminaba de cargar y Google la penalizaba.",
          did: "Creé una capa intermedia que reúne toda la información en una sola petición y agrupa las consultas repetidas para no pedir dos veces lo mismo.",
          results: ["40% menos errores de carga.", "Páginas más rápidas para los usuarios.", "Mejor posicionamiento en Google."],
          familiar: "Una página lenta pierde visitantes y clientes. Si tu sitio tarda en cargar o no aparece en Google, se puede optimizar.",
          stack: "Go · GraphQL",
          cta: "Quiero un sitio más rápido",
          message: "Hola, mi sitio es lento o no aparece en Google. Me interesa Web que vende."
        },
        {
          metric: "0 retrabajo",
          company: "Empresa de pagos digitales",
          title: "Aclarar las reglas antes de programar: menos retrabajo, menos costo",
          quote: "Descubrí un error que ya existía en producción y afectaba a más clientes de los que se creía.",
          problem: "Al agregar un nuevo método de pago, las reglas del negocio no estaban claras: ¿quién decide qué métodos ve cada cliente? Cada cambio generaba dudas nuevas y el desarrollo avanzaba a ciegas.",
          did: "Antes de seguir programando, armé una tabla con todos los escenarios posibles y la revisé con el equipo de negocio hasta tener cada regla definida y documentada.",
          results: ["Reglas claras y validadas por el negocio.", "El desarrollo se terminó sin retrabajo.", "Un error existente en producción salió a la luz."],
          familiar: "Muchos proyectos se encarecen porque se programa antes de entender el proceso. Por eso, primero defino contigo cómo funciona tu negocio y después construyo.",
          stack: "",
          cta: "Quiero definir mi proceso primero",
          message: "Hola, quiero definir bien mi proceso antes de construir un sistema (Del Excel a tu sistema)."
        },
        {
          metric: "Cobros que no se caen",
          company: "Empresa de pagos digitales",
          title: "Conectar sistemas con servicios externos de forma segura y confiable",
          quote: "Los cobros siguen funcionando aunque el servicio externo falle.",
          problem: "La empresa necesitaba conectar su sistema de cobros con un servicio externo de prevención de fraude, sin detener pagos si ese servicio fallaba ni exponer datos personales de los clientes.",
          did: "Desarrollé un componente reutilizable que se comunica con el servicio antifraude, reintenta automáticamente si algo falla y nunca guarda información sensible en los registros. Lo planifiqué y documenté por completo antes de escribir código.",
          results: ["Una conexión lista para producción y reutilizable.", "Los cobros siguen funcionando aunque el servicio externo tenga problemas.", "Los datos personales de los clientes quedan protegidos."],
          familiar: "Si tu negocio necesita conectarse con tu facturación, pagos en línea, WhatsApp o tu sistema de inventario, puedo integrarlo de forma segura.",
          stack: "",
          cta: "Quiero conectar mis sistemas",
          message: "Hola, necesito conectar mi negocio con facturación, pagos, WhatsApp o inventario (Del Excel a tu sistema)."
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
          title: "Tu sistema hace lo que tu negocio necesita",
          description: "Parto de cómo trabajas tú, no de una plantilla. Si necesitas una herramienta específica, la construyo para ti: tienes control, flexibilidad y un sistema que crece con tu negocio.",
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
      subtitle: "Proyectos reales, resultados reales — de negocios locales a comunidades de desarrolladores.",
      projects: [
        {
          title: "Consultoría Nuu Dee",
          description: "Sitio web profesional para consultoría de visa americana de turista y productos artesanales (sal condimentada) en la Región Mixteca de Oaxaca. Diseño enfocado en conversión, carga ultrarrápida y presencia digital en Huajuapan de León.",
          image: "https://res.cloudinary.com/dtbpucouh/image/upload/v1772485267/portfoli-freelance/site-consultoria-empresarial_ttuais.png",
          url: "https://consultorianuudee.com",
          tags: ["Next.js", "SEO Local", "Conversiones"]
        },
        {
          title: "Comunidad PHP México",
          description: "Migración del sitio de la comunidad PHP México de Symfony/PHP a una arquitectura moderna con Node.js y React. Alojado en GitHub Pages, eliminando los costos de servidor en AWS y mejorando el rendimiento y mantenimiento para toda la comunidad.",
          image: "https://res.cloudinary.com/dtbpucouh/image/upload/v1772485267/portfoli-freelance/phpmexico-site_xm9uqc.png",
          url: "https://phpmexico.mx/",
          tags: ["React", "Node.js", "Migración", "GitHub Pages"]
        },
        {
          title: "ACL Ingeniería",
          description: "Rediseño del sitio web para Grupo ACL, empresa poblana de mantenimiento preventivo y correctivo para industrias, oficinas y hogares. Se reorganizó la arquitectura de la información y se mejoró la presentación de servicios utilizando el constructor existente del cliente, sin necesidad de migrar de plataforma.",
          image: "https://res.cloudinary.com/dtbpucouh/image/upload/v1778698049/acl-ing-preview_hwjuva.png",
          url: "https://aclingenieria.com.mx",
          tags: ["Jimdo", "Rediseño Web", "UX/Contenido"]
        },
         {
          title: "Centro de Estudios Puebla",
          description: "Rediseño del sitio web para el Centro de Estudios Puebla, colegio privado con 30 años de trayectoria que ofrece educación desde preescolar hasta bachillerato. Se modernizó la presencia digital de la institución reorganizando su información académica y mejorando la experiencia para padres de familia, usando Wix como plataforma existente del cliente.",
          image: "https://res.cloudinary.com/dtbpucouh/image/upload/v1778698327/centro-de-estudios-puebla-web_rt7fdh.png",
          url: "https://www.centrodeestudiospuebla.com/",
          tags: ["Wix", "Rediseño Web", "UX/Contenido", "Educación"]
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Respuestas claras a las dudas más comunes antes de arrancar tu proyecto.",
      items: [
        {
          question: "¿Cuánto cuesta una página web profesional?",
          answer: `Una Web que vende (3–5 páginas, WhatsApp, Google Business Profile y formulario) comienza desde ${price.web} MXN. Los sistemas que te sacan del Excel y WhatsApp comienzan desde ${price.system} MXN; la cotización final depende de módulos, usuarios, integraciones y complejidad del proceso. El soporte mensual va desde ${price.supportWeb} MXN/mes (web) y ${price.supportSystemFrom}–${price.supportSystemTo} MXN/mes (sistema).`
        },
        {
          question: "¿Cuánto tiempo tarda en estar lista mi página web?",
          answer: "Web que vende se entrega en 1 a 2 semanas. Los sistemas que reemplazan el Excel toman de 3 a 5 semanas según la complejidad. El tiempo empieza a contar una vez que acordamos el alcance y nos proporcionas el contenido (textos e imágenes)."
        },
        {
          question: "¿Qué incluye Web que vende?",
          answer: "Incluye: diseño responsivo moderno (funciona en móvil y escritorio), 3–5 páginas profesionales, integración con WhatsApp, Google Business Profile configurado, formulario de contacto, optimización SEO básica para que Google te encuentre, alojamiento en la nube seguro y 1 mes de soporte técnico gratuito."
        },
        {
          question: "¿Trabajas con negocios fuera de Puebla?",
          answer: "¡Sí! Aunque estoy basado en Puebla y me especializo en negocios locales, trabajo con clientes en toda la República Mexicana e internacionalmente. Toda la comunicación y reuniones se pueden hacer de forma remota por videollamada."
        },
        {
          question: "¿Necesito saber de tecnología para contratar tus servicios?",
          answer: "Para nada. Solo necesitas saber qué necesita tu negocio — yo me encargo de todo lo técnico. Te guío en cada paso con lenguaje claro, sin tecnicismos."
        }
      ]
    },
    podcast: {
      pageTitle: "Podcast | El Developer de a Pie",
      eyebrow: "PODCAST",
      title: "El Developer de a Pie",
      tagline: "Conversaciones desde las trincheras reales de una carrera en desarrollo.",
      description: "Un podcast para los que están en las trincheras reales, no en el LinkedIn de los logros pulidos. Búsqueda de empleo, recortes, entrevistas sin sentido y lo que nadie te cuenta sobre trabajar en tecnología.",
      listenOn: "Escúchalo en tu plataforma",
      episodesTitle: "Episodios",
      episodesSubtitle: "Del más reciente al más antiguo.",
      listenCta: "Escuchar episodio",
      empty: "No hay episodios disponibles por ahora.",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Listo para dejar el Excel y conseguir más clientes? Cuéntame tu negocio y qué quieres resolver; te respondo por WhatsApp.",
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
