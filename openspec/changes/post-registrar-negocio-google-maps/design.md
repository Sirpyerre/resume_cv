## Context

El blog usa Astro Content Collections (`src/content.config.ts`): campos `title`, `seoTitle`, `date`, `description`, `slug`, `language`, `categories` (enum cerrado: SEO Local, PyMEs, etc.), `tags`, `featured`, `cover`, `coverLabel`. `BlogPostPage.astro` muestra la portada solo si `cover` existe y usa `/hero-section-resize1.png` como imagen social por defecto. El artículo cercano es `presencia-online-puebla.md`. Ver proposal.md para la motivación.

Fuentes consultadas durante la planeación: la página de Google Business Profile (marketing, sin reglas), la ayuda oficial de Google (propietarios y administradores 3403100, transferir propiedad 3415281, requisitos y representantes autorizados 13763036, directrices 3038177, verificación 7107242, trabajo con terceros 7163406) y los artículos de TersLab, Neubox (2019, desactualizado) y Yaxhá.

## Goals / Non-Goals

**Goals:**
- Un post que gane búsquedas de intención de compra y convierta en contacto.
- Exactitud respaldada por la ayuda oficial; las agencias se usan solo para estructura y preguntas comunes.

**Non-Goals:**
- Versión EN, capturas de pantalla, cambios de plantilla del blog, un servicio nuevo.

## Decisions

1. **Fuente de verdad: ayuda oficial de Google, no la página de marketing.** La página que indicó el usuario no contiene reglas; se cita junto a las páginas de ayuda de `support.google.com/business` que sí las contienen. Los blogs de agencias tienen sesgo comercial y datos contradictorios (verificación: 5 días hábiles según Google y Yaxhá/TersLab, 1–2 semanas según Neubox 2019); se usa la cifra de Google y se aclara que depende del método.
2. **Estructura:** gancho de problema → ¿necesita mi negocio un perfil y un sitio? → paso a paso (buscar, crear o reclamar, datos, verificar) → completar para ganar visibilidad → errores que suspenden → preguntas frecuentes → "Cómo puedo ayudarte". Los H2 en forma de pregunta apuntan a búsquedas reales.
3. **Pregunta de la transferencia y del profesional independiente:** se responde con las reglas de Google para representantes autorizados: consentimiento expreso, trabajar con el dueño para verificar, entregarle recursos oficiales y transferir la propiedad de inmediato si la pide. Recomendación: el cliente es propietario con su cuenta; el profesional es administrador. No se presenta "crear y luego transferir" como atajo, porque Google exige consentimiento y la propiedad principal solo la transfiere el propietario principal, con 7 días de espera para usuarios nuevos.
4. **Portada reservada:** se publica sin `cover` (evita imagen rota) y la ruta prevista es `/images/posts/como-registrar-negocio-google-maps.png` con `coverLabel` descriptivo. Alternativa: apuntar `cover` a un archivo inexistente → imagen rota en producción.
5. **Categorías:** "SEO Local" y "PyMEs" (ya en el enum), sin tocar el esquema.
6. **CTA:** WhatsApp con mensaje prellenado vía enlace de contacto existente y enlace a la landing de desarrollo web; "Web que vende" incluye Google Business Profile configurado. Sin precios en el post para no desfasarse de `src/config/pricing.js`.
7. **Fecha:** la del día de implementación; el slug propuesto es `como-registrar-negocio-en-google-maps`.

## Risks / Trade-offs

- [Las reglas de Google cambian] → Citar con lenguaje prudente ("según la ayuda de Google") y fecha de revisión en el cuerpo.
- [Reproducir texto de otros blogs] → Redactar con palabras propias; solo se toman temas y preguntas.
- [Promesas de visibilidad] → Redactar como buenas prácticas, no garantías; Google indica que no se puede comprar posicionamiento.
- [Imagen de portada pendiente] → Publicar sin `cover` y completar cuando llegue.

## Open Questions

- ¿Quieres versión en inglés más adelante? (No cambia este plan.)
