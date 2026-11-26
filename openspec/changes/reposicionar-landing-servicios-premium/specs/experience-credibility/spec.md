## Purpose

Demostrar la experiencia del proveedor con casos reales anonimizados, redactados para un dueño de negocio (problema, resultado en tiempo o dinero y pregunta de conexión), y convertir esa credibilidad en contacto por WhatsApp.

## ADDED Requirements

### Requirement: Franja de casos en la página de inicio
La página de inicio (ES y EN) SHALL incluir, cerca del héroe, una franja titulada "He construido sistemas para empresas como…" con 4 casos, ordenados del más impactante al más técnico: (1) panel de verificación de 8 h a 15 min, (2) página de vacantes más rápida (40% menos errores de carga), (3) reglas de negocio aclaradas antes de programar, (4) integración segura con servicio antifraude.

#### Scenario: Franja visible y ordenada
- **WHEN** un visitante hace scroll bajo el héroe
- **THEN** ve 4 tarjetas en el orden indicado
- **AND** cada tarjeta muestra tipo de empresa anonimizado, problema, qué se hizo, resultado y "¿Te suena familiar?"

### Requirement: Cifra grande como titular visual
Los casos con métrica SHALL mostrar la cifra como titular visual destacado ("8 h → 15 min", "40% menos errores"). Los casos sin métrica numérica SHALL destacar su resultado principal en una frase de impacto.

#### Scenario: Titular de métrica
- **WHEN** se renderiza el caso 1
- **THEN** "8 h → 15 min" aparece como el elemento de mayor tamaño de la tarjeta

### Requirement: Citas y párrafos de impacto
Cada tarjeta SHALL incluir una línea de impacto extraída del caso (por ejemplo "Descubrí un error que ya existía en producción" o "Los cobros siguen funcionando aunque el servicio externo falle") resaltada visualmente.

#### Scenario: Cita destacada
- **WHEN** se renderiza cualquier tarjeta
- **THEN** existe una línea de impacto resaltada distinta del cuerpo

### Requirement: Anonimato
Los casos MUST NOT contener nombres de empresas, proveedores ni personas. La línea de tecnologías SHALL ser opcional y en letra pequeña.

#### Scenario: Revisión de contenido
- **WHEN** se busca nombres propios de clientes, proveedores o personas en la franja
- **THEN** no hay coincidencias (los casos se describen como "empresa de pagos digitales", "plataforma de empleo", etc.)

### Requirement: CTA de contacto por caso
Cada caso SHALL cerrar con un CTA con verbo de acción que abra WhatsApp con mensaje prellenado, ligado al servicio relacionado: caso 1 y 3 con "Del Excel a tu sistema", caso 2 con "Web que vende", caso 4 con integraciones de "Del Excel a tu sistema". Sin número de WhatsApp configurado, el CTA SHALL llevar a `/contact`.

#### Scenario: CTA del caso 1
- **WHEN** el visitante hace clic en el CTA del caso 1
- **THEN** se abre WhatsApp con un mensaje en tono "tú" que menciona automatizar la consulta de varios sistemas

#### Scenario: Sin número configurado
- **WHEN** no hay `VITE_WHATSAPP_NUMBER`
- **THEN** el CTA lleva a la página de contacto

### Requirement: Cifras respaldadas
Las cifras publicadas SHALL ser únicamente las confirmadas por el proveedor (6–8 h a 15–20 min; 40% menos errores de carga).

#### Scenario: Revisión
- **WHEN** se revisan los números de la franja
- **THEN** coinciden con los casos confirmados
