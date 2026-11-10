// Campaña de temporada. Para apagarla: active = false. Para la siguiente
// temporada: actualizar utmCampaign, fechas, cupos y textos; la URL no cambia.
// Los cupos se editan a mano (ver design.md, decisión 3).

export const CAMPAIGN = {
  active: true,
  utmCampaign: "noviembre_web_2026",
  totalSlots: 2,
  remainingSlots: 2,
  closingDate: { es: "15 de diciembre de 2026", en: "December 15, 2026" },
  copy: {
    es: {
      badge: "Campaña fin de año 2026",
      title: "Prepara tu negocio para vender más en línea",
      intro:
        "Diagnóstico gratuito de tu sitio y dos formas de avanzar antes de que termine el año.",
      diagnosticTitle: "Diagnóstico gratuito de 30 minutos",
      diagnosticBody:
        "Reviso tu sitio actual (velocidad, móvil, contacto por WhatsApp y formularios) y te entrego un informe corto con lo que conviene mejorar.",
      options: [
        {
          title: "Optimización de tu sitio actual",
          body: "3 a 5 mejoras puntuales de velocidad, experiencia móvil, SEO técnico y conversiones. El presupuesto se define tras el diagnóstico.",
        },
        {
          title: "Presencia Esencial desde $5,000 MXN + impuestos",
          body: "Sitio profesional de 3 a 5 páginas, con configuración de analítica y eventos de contacto, y revisión inicial de SEO técnico incluidas.",
        },
      ],
      slotsLabel: (remaining, total) =>
        remaining === 1
          ? `Queda 1 de ${total} cupos para noviembre y diciembre`
          : `${remaining} de ${total} cupos disponibles para noviembre y diciembre`,
      soldOut:
        "Los cupos de esta campaña están completos. Puedes pedir el diagnóstico gratuito y te aviso cuando haya disponibilidad.",
      conditionsTitle: "Condiciones",
      conditions: (closing) => [
        `Contratación hasta el ${closing}.`,
        "Entrega estimada de la optimización: 2 semanas después de contratar.",
        "La analítica incluida es la configuración inicial; no incluye reportes posteriores.",
        "Todos los precios son en MXN y se les suman los impuestos aplicables.",
      ],
      cta: "Solicitar diagnóstico de mi sitio",
      ctaAriaLabel: "Solicitar el diagnóstico gratuito de mi sitio web",
    },
    en: {
      badge: "Year-end campaign 2026",
      title: "Get your business ready to sell more online",
      intro:
        "A free review of your website and two ways to move forward before the year ends.",
      diagnosticTitle: "Free 30-minute diagnostic",
      diagnosticBody:
        "I review your current site (speed, mobile, WhatsApp contact, and forms) and send you a short report on what is worth improving.",
      options: [
        {
          title: "Optimization of your current site",
          body: "3 to 5 targeted improvements to speed, mobile experience, technical SEO, and conversions. Pricing is set after the diagnostic.",
        },
        {
          title: "Essential Presence from $5,000 MXN + taxes",
          body: "Professional 3 to 5 page website, with analytics and contact-event setup and an initial technical SEO review included.",
        },
      ],
      slotsLabel: (remaining, total) =>
        remaining === 1
          ? `1 of ${total} spots left for November and December`
          : `${remaining} of ${total} spots available for November and December`,
      soldOut:
        "This campaign's spots are full. You can still request the free diagnostic and I will let you know when there is availability.",
      conditionsTitle: "Terms",
      conditions: (closing) => [
        `Hiring open until ${closing}.`,
        "Estimated delivery for the optimization: 2 weeks after hiring.",
        "Included analytics covers the initial setup only; it does not include later reports.",
        "All prices are in MXN, plus applicable taxes.",
      ],
      cta: "Request a diagnostic of my site",
      ctaAriaLabel: "Request the free diagnostic of my website",
    },
  },
}
