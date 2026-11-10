## Context

Motivación y alcance en `proposal.md`. Estado actual relevante:

- Ya existe `/services/desarrollo-web-puebla/` (y su versión EN), la landing comercial para "desarrollo web Puebla".
- Los precios públicos viven en `src/lib/schema.js` (`buildOffers`): $5,000 / $15,000 / $20,000 MXN.
- Los eventos de GA4 existen: `generate_lead` (`ContactForm.jsx`) y `click_whatsapp` (`WhatsAppButton.jsx`). Ninguno envía `utm_campaign` de forma explícita; hay que comprobar si GA4 lo asocia a la sesión.
- Netlify gestiona los redirects en `netlify.toml`. El sitio es Astro con islands de React.

## Goals / Non-Goals

**Goals:**
- La oferta de temporada se puede cambiar cada año editando solo texto y fechas, sin tocar URLs.
- Distinguir en GA4 el tráfico y los leads de esta campaña.
- No introducir contradicciones entre la oferta visible y el schema publicado.

**Non-Goals:**
- Posicionar el sitio para búsquedas de "Buen Fin"; ese tráfico es mayoritariamente de consumidores.
- Un contador de cupos automático o backend para gestionarlos.

## Decisions

**1. Bloque dentro de la landing existente, no una URL `/promociones/...`.**
Una segunda URL competiría por "desarrollo web Puebla" con la landing actual y no acumularía autoridad en 9 días. Alternativa descartada: landing nueva con redirect permanente a la principal en 2027; añade trabajo y rompe enlaces compartidos.

**2. Contenido de la campaña como datos, no como marcado fijo.**
Las fechas, el cupo restante y los textos de la oferta se concentran en un objeto de configuración (por ejemplo `src/config/campaign.js`) y el bloque se renderiza solo si `active` es verdadero. Cambiar de temporada o apagar la promoción es editar un archivo. Alternativa: texto directamente en el `.astro`; más rápido hoy, pero cada temporada exige buscar y reemplazar.

**3. Cupos manuales.**
Con 2 proyectos, el "quedan N cupos" se edita a mano en la configuración. Un contador dinámico no se justifica.

**4. Atribución con URL corta y UTM.**
`/promo` redirige (302) a la landing con `utm_campaign=noviembre_web_2026`. Se usa 302 porque la URL cambia de destino por temporada. Netlify descarta `?utm_source=` en `/promo`, así que el canal va en rutas propias (`/promo/linkedin`, `/promo/whatsapp`, `/promo/referencia`), cada una con su `utm_source`. Después se comprueba en GA4 DebugView que `utm_campaign` se asocia a `generate_lead` y `click_whatsapp`. Solo si no ocurre, se añade el parámetro a los eventos. Alternativa: pasar siempre el UTM en cada evento; es más código y redundante si GA4 ya lo conserva.

**5. Precio coherente con el schema.**
La oferta dice "desde $5,000 MXN" y el valor extra (analítica y revisión SEO técnico incluidos) es el gancho. `schema.js` no cambia. Se dejan explícitos entregables, condiciones, impuestos aplicables, fecha de contratación y fecha de entrega estimada.

**6. Sin marca oficial.**
El copy usa "fin de año" o "temporada de noviembre". No se usa el nombre, el logotipo ni imágenes de El Buen Fin.

**7. Un solo artículo evergreen.**
Sin año ni "Buen Fin" en la URL, para poder reutilizarlo cada temporada. Enlaza a desarrollo web, optimización y contacto.

## Risks / Trade-offs

- [El SEO no responde a tiempo] → El resultado depende de LinkedIn y WhatsApp; se mide por UTM, no por Search Console.
- [Sobrevender: muchos diagnósticos para 2 cupos] → Tope de 8 a 10 diagnósticos y cupo visible.
- [Promesas de entrega que no se cumplen] → Publicar solo fechas que puedan cumplirse; la optimización puntual, no una web completa.
- [Texto de temporada desactualizado el próximo año] → El bloque se apaga con `active: false`.
- [El redirect corto con UTM puede ser rastreado como contenido duplicado] → 302, y la landing mantiene su canonical sin parámetros.

## Open Questions

- Fecha de cierre de contratación en diciembre y entrega estimada de la optimización (sugerencia: 2 semanas). Se publican cuando las definas; no cambian el diseño.
- Si "analítica incluida" cubre solo la configuración de eventos o también un reporte mensual.
