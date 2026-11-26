## Purpose

Publicar un artículo útil y exacto sobre cómo registrar un negocio en Google Maps que responda las dudas más comunes de propietarios y profesionales y los convierta en prospectos del servicio Web que vende.

## ADDED Requirements

### Requirement: Artículo publicado en el blog
El sitio SHALL publicar un artículo en español en la colección del blog con título, descripción, fecha, categorías existentes ("SEO Local", "PyMEs"), etiquetas y slug propios, accesible en `/blog/<slug>/` y listado en el índice del blog.

#### Scenario: Post visible
- **WHEN** se construye el sitio
- **THEN** existe `/blog/<slug>/` y el post aparece en el índice del blog y en el sitemap

### Requirement: Pasos para crear o reclamar el perfil
El artículo SHALL explicar cómo comprobar si el negocio ya existe en Maps, cómo crear el perfil o reclamarlo, qué datos preparar y cómo verificarlo, indicando los métodos y tiempos según la ayuda oficial de Google (incluye hasta 5 días hábiles de revisión y que el método lo asigna Google).

#### Scenario: Lector con negocio ya existente
- **WHEN** el lector busca cómo proceder si su negocio ya aparece en Maps
- **THEN** el artículo indica reclamar la ficha en lugar de crear un duplicado

### Requirement: Respuestas a las preguntas frecuentes
El artículo SHALL responder, como mínimo: qué negocios deberían tener sitio web y perfil, si hace falta una cuenta de Google, si un perfil se puede transferir, si es gratis, cómo aparecer sin local (zona de servicio) y cómo ganar visibilidad.

#### Scenario: Transferencia de un perfil
- **WHEN** el lector consulta si un perfil se puede transferir
- **THEN** el artículo explica que solo el propietario principal puede transferir la propiedad principal, que se hace desde Usuarios y acceso, y la espera de 7 días para usuarios recién añadidos

#### Scenario: Profesional que crea el perfil de otro negocio
- **WHEN** el lector pregunta si un profesional independiente puede crear el perfil de un negocio ajeno y luego transferirlo
- **THEN** el artículo responde que solo con el consentimiento expreso del dueño, trabajando con él en la verificación, y recomienda que el cliente sea propietario con su propia cuenta y el profesional su administrador
- **AND** advierte que reclamar sin permiso puede suspender el perfil y la cuenta

### Requirement: Exactitud respecto a fuentes oficiales
Toda regla o tiempo atribuido a Google SHALL coincidir con su ayuda oficial. El artículo MUST NOT recomendar prácticas prohibidas (palabras clave o ciudad en el nombre, oficinas virtuales o apartados postales, reseñas pagadas) ni prometer posicionamiento en Maps.

#### Scenario: Verificación de afirmaciones
- **WHEN** se revisa cada afirmación sobre reglas, plazos o elegibilidad
- **THEN** existe una fuente oficial de Google que la respalda, o se redacta como consejo y no como regla

### Requirement: Enfoque de captación
El artículo SHALL incluir una sección "Cómo puedo ayudarte" con CTA con verbo de acción a WhatsApp y enlace a la landing de desarrollo web, y MUST NOT usar tono de promesa de resultados garantizados.

#### Scenario: CTA presente
- **WHEN** el lector llega al final del artículo
- **THEN** ve un CTA a WhatsApp y un enlace a `/services/desarrollo-web-puebla/`

### Requirement: Portada reservada
El artículo SHALL dejar definido el espacio de portada: mientras no exista la imagen, el post MUST publicarse sin `cover` roto; al recibirla se agregará con su `coverLabel`.

#### Scenario: Sin imagen
- **WHEN** se construye el sitio sin la portada
- **THEN** la página del post no muestra una imagen rota

#### Scenario: Con imagen
- **WHEN** se agrega `cover` apuntando a un archivo existente en `public/images/posts/`
- **THEN** la portada se muestra en el post y se usa como imagen social

### Requirement: SEO on-page
El post SHALL tener `seoTitle` y descripción dentro de límites razonables, un solo H1, encabezados que reflejen preguntas reales y enlaces internos al artículo de SEO local y a la landing de servicio.

#### Scenario: Encabezados y enlaces
- **WHEN** se inspecciona el HTML del post
- **THEN** hay un H1, H2 en forma de pregunta o paso, y al menos 2 enlaces internos
