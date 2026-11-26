## Purpose

Calificar a cada prospecto antes de la llamada (giro, problema, presupuesto) y entregar el lead por WhatsApp, el canal donde el proveedor responde más rápido.

## ADDED Requirements

### Requirement: Campos de calificación
El formulario de contacto SHALL pedir nombre, tipo de negocio, "¿qué quieres resolver?" y un rango de presupuesto opcional. El email MUST ser opcional.

#### Scenario: Campos requeridos
- **WHEN** el usuario envía sin nombre, tipo de negocio o "qué quieres resolver"
- **THEN** se muestran errores de validación y no se abre WhatsApp

#### Scenario: Presupuesto y email opcionales
- **WHEN** el usuario deja vacíos presupuesto y email
- **THEN** el envío continúa si lo demás es válido

### Requirement: Entrega por WhatsApp
Al enviar un formulario válido, el sistema SHALL abrir WhatsApp con un mensaje prellenado que incluya nombre, tipo de negocio, problema, presupuesto (si se indicó) y teléfono/email (si se indicaron), y MUST NOT enviar el lead por email como vía principal.

#### Scenario: Envío con WhatsApp configurado
- **WHEN** hay número de WhatsApp configurado y el formulario es válido
- **THEN** se abre `wa.me` con el mensaje armado en una nueva pestaña
- **AND** se registra el evento `generate_lead`

#### Scenario: Respaldo sin número configurado
- **WHEN** no hay número de WhatsApp configurado
- **THEN** el lead se envía por el servicio de formularios existente y se muestra confirmación

### Requirement: Protección anti-spam conservada
El formulario SHALL conservar el campo trampa y el límite de reintentos de 5 segundos.

#### Scenario: Reenvío inmediato
- **WHEN** el usuario envía dos veces en menos de 5 segundos
- **THEN** el segundo envío es rechazado con aviso de espera
