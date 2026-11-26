## Why

"Cómo poner mi negocio en Google Maps" es una de las búsquedas locales con más intención de compra: quien la hace es un dueño o profesional que ya quiere más clientes y no sabe por dónde empezar. El sitio tiene un solo artículo cercano (`presencia-online-puebla`, de SEO local en general) y no responde las dudas prácticas que frenan a la gente: si hace falta cuenta de Google, qué negocios califican, si un perfil se puede transferir o si un consultor puede crearlo a nombre de un cliente. Un post útil y preciso atrae prospectos y los lleva de forma natural a "Web que vende", que ya incluye Google Business Profile configurado.

## What Changes

- Nuevo artículo en español en `src/content/blog/` sobre cómo registrar un negocio en Google Maps (Perfil de Negocio de Google), basado en la ayuda oficial de Google (fuente principal) y contrastado con los artículos de TersLab, Neubox y Yaxhá (fuentes secundarias; sin copiar texto).
- Estructura orientada a prospectos: gancho de problema, pasos para crear o reclamar el perfil, verificación, cómo completarlo para ganar visibilidad, errores que suspenden la ficha y preguntas frecuentes.
- Preguntas frecuentes reales, incluidas las del propietario del sitio: qué negocios deben tener sitio web y perfil, si hace falta una cuenta de Google, si un perfil se puede transferir, y si un profesional puede crear el perfil de otro negocio y luego transferirlo (respuesta basada en las reglas de Google para representantes autorizados).
- Sección "Cómo puedo ayudarte" con CTA a WhatsApp y a la landing de Web que vende, sin promesas de posicionamiento.
- Espacio reservado para la imagen de portada (la imagen se entregará después): el post se publica sin `cover` hasta recibirla, y queda definida la ruta y el `coverLabel` esperados.
- Enlaces internos al artículo de SEO local existente y a la landing de desarrollo web.
- **No incluido:** versión en inglés (suposición: solo ES; se puede agregar después), nuevas rutas, cambios de diseño del blog, capturas de pantalla de la interfaz de Google.

## Capabilities

### New Capabilities
- `google-business-profile-post`: contenido, exactitud, SEO, CTA y portada reservada del artículo sobre registrar un negocio en Google Maps.

### Modified Capabilities

(ninguna)

## Impact

- Nuevo archivo `src/content/blog/<slug>.md` (colección `blog`, categorías existentes "SEO Local" y "PyMEs").
- Más adelante, una imagen en `public/images/posts/` cuando se entregue la portada.
- Sin cambios de código, dependencias ni rutas; el sitemap y la lista del blog toman el post automáticamente.
