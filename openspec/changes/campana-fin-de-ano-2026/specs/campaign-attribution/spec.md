## Purpose

Medir qué tráfico y qué contactos provienen de la campaña de temporada, para decidir si funcionó sin atribuirle cambios orgánicos.

## ADDED Requirements

### Requirement: URL corta de campaña
El sitio SHALL ofrecer una URL corta de campaña que redirija temporalmente a la landing de desarrollo web con `utm_campaign=noviembre_web_2026`.

#### Scenario: Visita a la URL corta
- **WHEN** un visitante abre la URL corta
- **THEN** llega a la landing con el parámetro `utm_campaign=noviembre_web_2026`

#### Scenario: Canonical sin parámetros
- **WHEN** la landing se carga con parámetros UTM
- **THEN** su canonical apunta a la URL sin parámetros

### Requirement: Atribución de contactos
Los eventos `generate_lead` y `click_whatsapp` SHALL poder asociarse a la campaña mediante `utm_campaign` en GA4.

#### Scenario: Formulario enviado desde la campaña
- **WHEN** un visitante llegó por la URL corta y envía el formulario
- **THEN** GA4 registra `generate_lead` asociado a `noviembre_web_2026`

#### Scenario: Clic a WhatsApp desde la campaña
- **WHEN** un visitante llegó por la URL corta y pulsa el botón de WhatsApp
- **THEN** GA4 registra `click_whatsapp` asociado a `noviembre_web_2026`

### Requirement: Separar medición de SEO
El seguimiento de la campaña SHALL medirse por UTM y no por las impresiones o clics de Search Console.

#### Scenario: Evaluación de la campaña
- **WHEN** se evalúan los resultados al cierre
- **THEN** se reportan visitas, contactos, diagnósticos, cotizaciones y proyectos por `utm_campaign`
