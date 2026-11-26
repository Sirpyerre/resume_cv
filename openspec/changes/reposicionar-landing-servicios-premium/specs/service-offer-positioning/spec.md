## Purpose

Define cómo el sitio presenta y valora la oferta de servicios para atraer compradores de alto valor: un servicio estrella visible primero, precios coherentes y copy centrado en el resultado del cliente.

## ADDED Requirements

### Requirement: Héroe que vende el servicio estrella
La página de inicio (ES y EN) SHALL presentar en el héroe el mensaje "Saca tu negocio del Excel y WhatsApp" (o su equivalente en inglés) y un CTA principal hacia el servicio "Del Excel a tu sistema". El héroe MUST NOT destacar un precio de entrada menor al del servicio estrella.

#### Scenario: Visitante llega al inicio
- **WHEN** un visitante abre `/` o `/en/`
- **THEN** el titular principal habla de sacar al negocio del Excel y WhatsApp
- **AND** el CTA principal lleva a la oferta "Del Excel a tu sistema" o al contacto

#### Scenario: El precio más bajo no encabeza el héroe
- **WHEN** se renderiza el héroe
- **THEN** ninguna tarjeta o etiqueta de precio de "Web que vende" aparece antes o con mayor énfasis que "Del Excel a tu sistema"

### Requirement: Tres servicios con jerarquía explícita
La sección de servicios SHALL mostrar tres servicios en este orden y con este énfasis: "Del Excel a tu sistema" (marcado como estrella, de mayor tamaño o primero), "Web que vende" y "Soporte mensual". Cada uno MUST mostrar qué entrega, precio publicado y tiempo.

#### Scenario: Orden y datos de cada servicio
- **WHEN** se renderiza la sección de servicios
- **THEN** aparecen 3 tarjetas en el orden estrella, web, soporte
- **AND** "Del Excel a tu sistema" indica "desde $25,000 MXN" y "3 a 5 semanas"
- **AND** "Web que vende" indica "desde $8,500 MXN" y "1 a 2 semanas"
- **AND** "Soporte mensual" indica "desde $1,500 MXN/mes (web)" y "$3,000 a $4,500 MXN/mes (sistema)"

### Requirement: Web que vende incluye WhatsApp y Google Business Profile
El servicio "Web que vende" (antes Presencia Esencial) SHALL publicarse desde $8,500 MXN e incluir sitio de 3 a 5 páginas, integración con WhatsApp, Google Business Profile configurado y formulario de contacto.

#### Scenario: Entregables visibles
- **WHEN** se lee la tarjeta o landing de "Web que vende"
- **THEN** la lista de entregables menciona WhatsApp y Google Business Profile

### Requirement: Precio consistente en todo el sitio
Ningún texto visible, mensaje de WhatsApp prellenado, FAQ, campaña o dato estructurado SHALL publicar "$5,000" como precio del servicio web, ni "$15,000" o "$20,000" como precio de entrada de sistemas, tras este cambio.

#### Scenario: Búsqueda de precios obsoletos
- **WHEN** se busca "$5,000", "$15,000" y "$20,000" en el código fuente publicado (ES y EN)
- **THEN** no hay coincidencias que representen precios vigentes de servicio

### Requirement: Copy orientado al resultado del cliente
El sitio MUST NOT usar la frase "Soluciones reales, no solo plantillas" ni otras que critiquen alternativas que el cliente pudiera preferir. Esa sección SHALL expresar el resultado: "Tu sistema hace lo que tu negocio necesita".

#### Scenario: Sección de diferenciadores
- **WHEN** se renderiza la sección "¿Por qué elegirme?"
- **THEN** el título del diferenciador es "Tu sistema hace lo que tu negocio necesita" (o equivalente EN)
- **AND** no aparece "no solo plantillas"

### Requirement: CTA con verbos de acción
Los botones y enlaces de llamada a la acción SHALL iniciar con un verbo de acción orientado a resultado (por ejemplo "Cotiza", "Quiero", "Escríbeme") y MUST NOT usar etiquetas genéricas como "Enviar" o "Más información" como CTA principal.

#### Scenario: CTA principal del héroe y servicios
- **WHEN** se renderizan héroe y tarjetas de servicio
- **THEN** cada CTA principal comienza con un verbo de acción y nombra el resultado

### Requirement: Ortografía y tratamiento consistente
El texto en español SHALL llevar acentos y signos correctos y tutear al visitante, incluidos los mensajes prellenados de WhatsApp.

#### Scenario: Textos corregidos
- **WHEN** se busca "Obten ", "Telefono", "gustaria", "Enviame", "respondere" o "sus servicios" en textos de usuario
- **THEN** no hay coincidencias

#### Scenario: Tooltip de ayuda del pie
- **WHEN** el visitante hace clic en "¿Necesitas ayuda?"
- **THEN** se abre WhatsApp con mensaje prellenado, o el contacto si no hay número configurado
