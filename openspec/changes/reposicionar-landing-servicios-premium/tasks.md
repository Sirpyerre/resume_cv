## 1. Precios y contenido base

- [x] 1.1 Crear `src/config/pricing.js` con precios (web $8,500; sistemas $25,000; soporte $1,500/$3,000-4,500) y verificar que `npm run build` compila
- [x] 1.2 Actualizar `content.jsx` (ES/EN): servicios a 3 (estrella, Web que vende con WhatsApp + Google Business Profile, Soporte), tiempos y precios; verificar renderizado en `/` y `/en/`
- [x] 1.3 Reemplazar "Soluciones reales, no solo plantillas" por "Tu sistema hace lo que tu negocio necesita" (ES/EN); verificar con `grep -ri "solo plantillas\|not just templates" src` sin resultados
- [x] 1.4 Actualizar FAQs y textos de hero con tono emprendedor/solucionador; verificar lectura en ES y EN

## 2. Héroe, servicios y credibilidad

- [x] 2.1 Rehacer `HeroSection.astro` con titular "Saca tu negocio del Excel y WhatsApp" y tarjeta estrella más una secundaria; verificar que el servicio barato no encabece
- [x] 2.2 Reordenar `ServicesSection.astro` en 3 tarjetas con jerarquía; verificar en móvil y escritorio
- [x] 2.3 Agregar los 4 casos anonimizados (datos ES/EN) a `content.jsx` y crear `CredibilityStrip.astro` en `HomePage.astro` con métrica grande, cita resaltada, "¿Te suena familiar?" y tecnologías en letra pequeña; verificar que no hay nombres de clientes y las cifras coinciden con las confirmadas
- [x] 2.3b Añadir CTA por caso con WhatsApp prellenado según servicio (respaldo `/contact`) y evento `click_whatsapp` con ubicación del caso; verificar los 4 enlaces con y sin `VITE_WHATSAPP_NUMBER`
- [x] 2.4 Actualizar `service-landing-pages.js` (precios, mensajes de WhatsApp, FAQs, entregables de Web que vende); verificar `grep -rn "\$5,000\|\$15,000\|\$20,000" src` sin precios vigentes

## 3. Campaña y artículos

- [x] 3.1 Cambiar $5,000 a $8,500 en `src/config/campaign.js` (ES/EN) y en `openspec/changes/campana-fin-de-ano-2026` y `docs/campana-fin-de-ano-2026-mensajes.md`; verificar con grep
- [x] 3.2 Actualizar precios en `cuanto-cuesta-pagina-web-puebla-2026.md` y artículos relacionados; verificar con grep y build

## 4. Navegación y formulario

- [x] 4.1 Quitar podcast de `SiteNavbar.jsx` y de la tarjeta en `ContactForm.jsx`, conservar en `SiteFooter.astro`; verificar navbar sin enlace y `/podcast` con 200
- [x] 4.2 Añadir campos "tipo de negocio", "¿qué quieres resolver?" y presupuesto opcional; email opcional; verificar validaciones
- [x] 4.3 Enviar por WhatsApp con mensaje prellenado y respaldo a Formspree si falta el número; verificar abriendo `wa.me` y evento `generate_lead`
- [x] 4.4 Confirmar `VITE_WHATSAPP_NUMBER` en Netlify y documentarlo en `.env.example`/README

## 5. CTA y pulido

- [x] 5.1 Reescribir CTAs (héroe, servicios, landings, formulario, campaña) con verbos de acción en ES/EN; verificar revisando cada botón en `/` y landings
- [x] 5.2 Corregir acentos en `ContactForm.jsx`, `WhatsAppButton.jsx`, `HeroSection.astro`, `ServicesSection.astro`; verificar con grep de "Obten |Telefono|gustaria|Enviame|respondere" sin resultados
- [x] 5.3 Cambiar "sus servicios" a "tus servicios" en mensajes de WhatsApp (`HeroSection.astro`, `WhatsAppButton.jsx`); verificar el texto en `wa.me`
- [x] 5.4 Revisar por qué "¿Necesitas ayuda?" no lleva a nada en `WhatsAppButton.jsx` (probable `href` vacío sin `VITE_WHATSAPP_NUMBER`) y hacer que abra WhatsApp o `/contact` de respaldo; verificar con y sin la variable

## 6. Verificación final

- [x] 6.1 Ejecutar `npm run build` y revisar `/`, `/en/`, landings de servicio y `/contact` en móvil y escritorio; verificar que `package-lock.json` sigue siendo el único lockfile
