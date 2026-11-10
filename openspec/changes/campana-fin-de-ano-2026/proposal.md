## Why

La temporada de ofertas de noviembre y el cierre de año llevan a negocios de Puebla a mejorar su presencia digital. Hay dos oportunidades: negocios que quieren vender más en la temporada (sitio, catálogo, WhatsApp, formularios, móvil) y negocios que quieren digitalizarse antes de 2027. Hoy no existe una oferta de temporada ni forma de medir qué canal trae conversaciones. Es 9 de noviembre de 2026, así que la campaña debe ser corta y la página debe poder reutilizarse cada año.

## What Changes

- Agregar un bloque de campaña de temporada dentro de `/services/desarrollo-web-puebla/` (ES y EN), sin crear una URL nueva ni una landing duplicada que compita por "desarrollo web Puebla".
- Ofrecer un diagnóstico gratuito de 30 min con informe corto, y dos salidas de pago: optimización puntual de un sitio existente y Presencia Esencial desde $5,000 MXN con analítica y SEO técnico incluidos.
- Limitar la oferta a 2 proyectos entre noviembre y diciembre de 2026, con el cupo restante visible y actualizado a mano.
- Publicar fechas explícitas de cierre de contratación y entrega estimada (por definir), además de entregables, condiciones e impuestos aplicables.
- Crear una URL corta de campaña (por ejemplo `/promo`) que redirige a la landing con `utm_campaign=noviembre_web_2026`.
- Verificar que `utm_campaign` llegue hasta los eventos `generate_lead` y `click_whatsapp` en GA4.
- Escribir un artículo evergreen sobre cómo preparar una página web para temporadas de descuentos, que enlace a desarrollo web, optimización y contacto.
- No usar la marca, el nombre ni el logotipo oficial de El Buen Fin: la promoción se comunica como propia ("fin de año", "temporada de noviembre").
- **No incluido:** una URL `/promociones/...`, páginas por variación de "Buen Fin + páginas web + Puebla", un segundo artículo, ni promesas de una web completa en 5 días.

## Capabilities

### New Capabilities
- `seasonal-campaign-offer`: bloque de campaña reutilizable en la landing de desarrollo web: oferta, cupos, fechas, condiciones y CTA al diagnóstico.
- `campaign-attribution`: URL corta con UTM y conservación de `utm_campaign` hasta los eventos de contacto en GA4.

### Modified Capabilities

(ninguna: `openspec/specs/` no tiene capacidades existentes)

## Impact

- `src/components/pages/ServiceLandingPage.astro` y `src/pages/services/desarrollo-web-puebla.astro` (y su versión EN en `src/pages/en/services/web-development-puebla.astro`) para el bloque.
- `netlify.toml` para el redirect corto con UTM.
- `src/components/islands/ContactForm.jsx` y `WhatsAppButton.jsx` si la atribución no se conserva sola.
- `src/content/blog/` para el artículo; `src/lib/schema.js` no cambia, porque el precio $5,000 ya está publicado.
- Sin dependencias nuevas.
- Riesgo principal: la campaña no depende de SEO. Un cambio de esta semana no posiciona antes de fin de mes, así que el resultado vendrá de mensajes directos por LinkedIn y WhatsApp.
