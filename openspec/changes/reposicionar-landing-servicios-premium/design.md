## Context

Sitio Astro + islas React (Tailwind). Los textos viven en `src/content/content.jsx` (ES/EN) y `src/data/service-landing-pages.js`; el héroe y la sección de servicios iteran `t.services.packages` (4 paquetes). El formulario (`ContactForm.jsx`) envía a Formspree; el número de WhatsApp sale de `VITE_WHATSAPP_NUMBER` vía `getWhatsAppHref`. La campaña de fin de año (`src/config/campaign.js`) cita $5,000. Ver proposal.md para la motivación.

## Goals / Non-Goals

**Goals:**
- Un solo servicio estrella visible, precio coherente en todo el sitio, tono de solucionador de problemas.
- Conservar URLs y SEO de las landings existentes.

**Non-Goals:**
- Rediseño visual, nuevas rutas, cambios en el podcast, pasarela de pago.

## Decisions

1. **3 servicios en inicio, 4 landings se conservan.** Inicio muestra estrella / web / soporte. "Web app personalizada" y "Automatización" se agrupan bajo "Del Excel a tu sistema" (ambas landings siguen vivas y enlazadas desde la tarjeta estrella; ambas muestran "desde $25,000"). *Alternativa:* borrar landings → se pierde posicionamiento.
2. **Se conserva el nombre "Presencia Esencial" en URLs/slugs**, con etiqueta comercial "Web que vende" en pantalla; evita redirects.
3. **Héroe:** titular "Saca tu negocio del Excel y WhatsApp"; el selector de 4 tarjetas se sustituye por una tarjeta estrella destacada y dos secundarias más pequeñas. WhatsApp CTA se mantiene.
4. **Franja de credibilidad** como componente Astro nuevo (`CredibilityStrip.astro`) tras el héroe; texto en `content.jsx`. 4 casos anonimizados en `content.jsx` (ES/EN) como datos: `metric`, `quote`, `problem`, `did`, `result[]`, `familiar`, `stack`, `service`, `whatsappMessage`. Tarjetas con la métrica grande, cita resaltada y CTA a WhatsApp con `getWhatsAppHref` (respaldo `/contact`). Pedro confirmó cifras y redacción; sin nombres de clientes (incluye OCC Mundial, que sigue mencionado solo en la sección Acerca de si Pedro lo desea).
5. **Formulario → WhatsApp** con `window.open(getWhatsAppHref(mensaje))`; si no hay número, respaldo a Formspree incluyendo los campos nuevos. Evita perder leads por configuración faltante. *Alternativa:* solo WhatsApp → rompe en builds sin env var.
6. **Precio único de verdad:** nueva constante `PRICING` en `src/config/pricing.js` consumida por content, landings y campaña, para no repetir el desfase actual.

## Risks / Trade-offs

- [Subir precio reduce volumen de leads] → Es intencional; medir `generate_lead` y calidad 30 días.
- [Popup de WhatsApp bloqueado en móvil/navegador] → Abrir como respuesta directa al clic de envío; mostrar enlace manual de respaldo.
- [Casos identificables aunque anonimizados] → Pedro revisa que ningún detalle revele al cliente (contratos, NDA).
- [Artículos y mensajes con precio viejo] → Tarea de búsqueda global y verificación por grep.
- [Campaña activa cambia de precio a mitad] → Actualizar `campaign.js` y mensajes de `docs/`; cupos no cambian.

## Migration Plan

Un solo deploy en Netlify (npm, sin yarn.lock). Verificar `VITE_WHATSAPP_NUMBER` en Netlify antes. Rollback: revertir el commit.

## Open Questions

- Mostrar la línea de tecnologías u ocultarla (se deja en letra pequeña por defecto).
