## Purpose

Presentar una oferta de temporada reutilizable dentro de la landing de desarrollo web, con cupos, fechas y condiciones claras, y que pueda apagarse o actualizarse sin crear páginas nuevas.

## ADDED Requirements

### Requirement: Bloque de campaña en la landing existente
El sitio SHALL mostrar la oferta de temporada como un bloque dentro de la landing de desarrollo web en español e inglés, y MUST NOT crear una URL propia para la promoción.

#### Scenario: Campaña activa
- **WHEN** un visitante abre la landing de desarrollo web mientras la campaña está activa
- **THEN** ve el bloque con el diagnóstico gratuito y un CTA hacia el contacto

#### Scenario: Campaña apagada
- **WHEN** la campaña se marca como inactiva
- **THEN** la landing se muestra sin el bloque y sin otros cambios

### Requirement: Oferta y precio coherentes
La oferta SHALL presentar el diagnóstico gratuito de 30 minutos con informe corto y dos salidas de pago: optimización de un sitio existente y Presencia Esencial desde $5,000 MXN con analítica y revisión SEO técnico incluidos. El precio mostrado MUST coincidir con el publicado en el schema del sitio.

#### Scenario: Precio visible
- **WHEN** el bloque muestra el precio de Presencia Esencial
- **THEN** indica "desde $5,000 MXN", igual que el schema

### Requirement: Cupos limitados visibles
El bloque SHALL indicar cuántos de los 2 cupos de noviembre y diciembre siguen disponibles, y SHALL reflejar un cupo agotado.

#### Scenario: Queda un cupo
- **WHEN** se actualiza la disponibilidad a un cupo
- **THEN** el bloque muestra que queda 1 cupo

#### Scenario: Sin cupos
- **WHEN** la disponibilidad llega a cero
- **THEN** el bloque deja de invitar a contratar y ofrece solo el diagnóstico o la lista de espera

### Requirement: Condiciones explícitas
El bloque SHALL indicar los entregables, las condiciones, los impuestos aplicables, la fecha de cierre de contratación y la fecha estimada de entrega. El bloque MUST NOT prometer una web completa durante los días del evento.

#### Scenario: Fechas publicadas
- **WHEN** el bloque se muestra
- **THEN** incluye la fecha de cierre de contratación y la entrega estimada

### Requirement: Sin marca oficial
El contenido de la campaña MUST NOT usar el nombre, el logotipo ni las imágenes de El Buen Fin, y SHALL presentarse como una promoción propia de fin de año.

#### Scenario: Revisión del copy
- **WHEN** se revisa el contenido del bloque y su artículo
- **THEN** no contiene la marca ni la identidad gráfica oficial
