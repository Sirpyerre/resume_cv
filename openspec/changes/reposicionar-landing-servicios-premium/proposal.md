## Why

Hoy el sitio atrae al comprador equivocado: cuatro servicios con el mismo peso visual, y el más visible (Presencia Esencial, $5,000) es el más barato, así que llega quien solo compara precio. Mientras tanto, lo que realmente separa a Pedro del resto (Go, backoffices, pagos, antifraude) no aparece, el copy "no solo plantillas" suena a criticar lo que el cliente quizá quiere, el podcast de empleo en tech confunde ("¿proveedor o busca trabajo?") y el formulario no permite calificar al prospecto antes de la llamada. La campaña de fin de año 2026 ya está activa: es el momento de que el tráfico aterrice en una oferta que venda el servicio de mayor valor.

## What Changes

- **Héroe que vende el servicio caro:** el mensaje principal pasa a "Saca tu negocio del Excel y WhatsApp". Estructura de oferta de 3 servicios con jerarquía clara: (1) **Del Excel a tu sistema** (estrella, desde $25,000 MXN, 3 a 5 semanas), (2) **Web que vende**, (3) **Soporte mensual**.
- **Subir Presencia Esencial de $5,000 a desde $8,500 MXN** y reposicionarla como "Web que vende": sitio de 3 a 5 páginas + botón/flujo de WhatsApp + Google Business Profile configurado + formulario. Más valor, menos clientes que solo comparan precio. Se actualiza el precio en todo el sitio, en la campaña de fin de año, en los mensajes de WhatsApp y en los artículos que lo citan.
- **Soporte mensual** unificado: desde $1,500 MXN/mes (web) y $3,000 a $4,500 MXN/mes (sistema), con 2 horas de cambios al mes.
- **Casos de éxito anonimizados como prueba de credibilidad:** una franja "He construido sistemas para empresas como…" con 4 casos (problema → qué hice → resultado → "¿Te suena familiar?"), cada uno con una cifra grande como titular visual ("8 h → 15 min", "40% menos errores") y una cita de impacto. Sin nombres de empresas, proveedores ni personas. Cada caso cierra con un CTA a WhatsApp ligado al servicio que le corresponde, para convertir la credibilidad en contacto.
- **Copy orientado a resultado:** "Soluciones reales, no solo plantillas" se reemplaza por "Tu sistema hace lo que tu negocio necesita".
- **Podcast fuera del menú principal:** se quita del navbar y de la tarjeta del formulario de contacto; permanece en el pie de página y sus URLs siguen vivas.
- **Formulario que califica y va por WhatsApp:** campos nuevos "tipo de negocio", "¿qué quieres resolver?" y rango de presupuesto; el envío abre WhatsApp con un mensaje ya armado en lugar de mandar un email.
- **CTA con verbos de acción:** botones y enlaces pasan a verbos de resultado y urgencia concreta ("Cotiza tu sistema", "Quiero salir del Excel", "Escríbeme por WhatsApp hoy"), con la palabra de acción enfatizada, en ES y EN.
- **Detalles de pulido:** corregir acentos ("Obtén", "Teléfono", "Envíame", "Te responderé", "Me gustaría", "¿Necesitas ayuda?"); mensaje prellenado de WhatsApp en tono "tú" ("tus servicios", no "sus"); el tooltip "¿Necesitas ayuda?" del botón flotante debe abrir WhatsApp (hoy no lleva a nada, revisar `WhatsAppButton.jsx`).
- Tono de marketing emprendedor y de solucionador de problemas, en ES y EN.
- **BREAKING (comercial):** el precio de entrada publicado sube de $5,000 a $8,500 MXN; el de sistemas de $15,000/$20,000 a $25,000 MXN. Las URLs de las landings de servicio se conservan para no perder SEO.
- **No incluido:** nuevas URLs, cambios al podcast en sí, rediseño visual, pasarela de pagos.

## Capabilities

### New Capabilities
- `service-offer-positioning`: jerarquía de oferta (héroe, servicio estrella, "Web que vende", soporte), precios publicados y copy orientado a resultado.
- `experience-credibility`: franja "He construido sistemas para empresas como…" con 4 casos anonimizados, cifra grande, cita de impacto y CTA a WhatsApp.
- `whatsapp-lead-qualification`: formulario de contacto que califica (giro, problema, presupuesto) y entrega el lead por WhatsApp.
- `provider-focused-navigation`: navegación principal enfocada en contratar servicios; podcast relegado al pie.

### Modified Capabilities

(ninguna: `openspec/specs/` no tiene capacidades publicadas; el bloque de campaña `seasonal-campaign-offer` vive en un cambio aún no archivado y aquí solo se actualiza su precio vía tareas)

## Impact

- `src/content/content.jsx` (hero, services, whyMe, faq, contact en ES/EN), `src/components/site/HeroSection.astro`, `ServicesSection.astro`, `AboutSection.astro`, nuevo componente de franja de credibilidad, `src/components/pages/HomePage.astro`.
- `src/data/service-landing-pages.js` (precios, mensajes de WhatsApp, FAQs, copy).
- `src/config/campaign.js` (precio $5,000 → $8,500) y `openspec/changes/campana-fin-de-ano-2026` (texto del precio).
- `src/components/islands/SiteNavbar.jsx`, `ContactForm.jsx`, `src/config/contact.js`.
- Blog: `cuanto-cuesta-pagina-web-puebla-2026.md` y artículos que citan precios; `docs/campana-fin-de-ano-2026-mensajes.md`.
- Sin dependencias nuevas. Depende de `VITE_WHATSAPP_NUMBER` configurada en Netlify. Formspree queda como respaldo.
