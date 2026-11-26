## Purpose

Evitar la confusión entre proveedor de servicios y persona que busca empleo, manteniendo el podcast accesible pero fuera de la navegación principal.

## ADDED Requirements

### Requirement: Podcast fuera del menú principal
El menú principal (escritorio y móvil, ES y EN) MUST NOT contener un enlace al podcast. El enlace SHALL permanecer en el pie de página.

#### Scenario: Navbar sin podcast
- **WHEN** se renderiza el navbar en cualquier página
- **THEN** no hay enlace a `/podcast` ni `/en/podcast`

#### Scenario: Podcast en el pie
- **WHEN** se renderiza el pie de página
- **THEN** existe el enlace al podcast

### Requirement: Contacto sin promoción del podcast
La sección de contacto MUST NOT mostrar la tarjeta que promueve el podcast.

#### Scenario: Sección de contacto
- **WHEN** se renderiza el formulario de contacto
- **THEN** no aparece texto sobre búsqueda de empleo en tecnología

### Requirement: Rutas del podcast intactas
Las URLs del podcast SHALL seguir respondiendo 200 y aparecer en el sitemap.

#### Scenario: Acceso directo
- **WHEN** se visita `/podcast`
- **THEN** la página carga normalmente
