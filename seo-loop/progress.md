# SEO Loop — bitácora de pedrorojas.lat

Este archivo es la memoria persistente del loop de SEO automatizado. Cada corrida
(cada 2 semanas, vía la rutina programada) lee la última iteración de aquí antes
de decidir qué hacer, y añade una entrada nueva al final con lo que hizo.

Reglas para quien (agente o humano) escriba una iteración nueva:
- Máximo 2-3 cambios concretos por corrida. Nada de reescrituras masivas.
- Todo cambio va en una rama + PR — nunca push directo a `main`.
- Si algo de la iteración anterior no funcionó (la métrica no se movió o empeoró),
  decirlo explícitamente en "Qué no funcionó" antes de intentar algo nuevo — no
  repetir la misma apuesta sin justificar por qué esta vez sería distinto.

## Cómo correr una iteración manualmente

```
GOOGLE_APPLICATION_CREDENTIALS=/ruta/al/service-account.json npm run gsc:report
```

Esto imprime un JSON con: queries que más subieron/bajaron en clics e impresiones
(últimos 28 días vs. los 28 anteriores), y páginas con impresiones altas pero CTR
bajo (candidatas a mejorar título/meta description).

## Contexto de negocio (no cambia cada iteración)

- Ver memoria de proyecto `project-seo-strategy`: keywords long-tail objetivo
  ("desarrollador web freelance Puebla", "desarrollo web para médicos Puebla",
  etc.), priorizar intención de compra sobre volumen.
- Palancas disponibles en el código: tags/internal linking en
  `src/components/blog/BlogSidebar.jsx` y `PostCard.jsx`, meta tags vía Helmet en
  `BlogListPage.jsx` / `BlogPostPage.jsx` / `src/components/seo/SEO.jsx`, nuevos
  posts en `posts/*.md`.

---

## Iteración 0 — 2026-07-21 (setup inicial)

**Qué se hizo:** se creó la infraestructura del loop (`scripts/gsc-report.mjs`,
este archivo, dependencia `googleapis`). Todavía no ha corrido ninguna iteración
real con datos de Search Console.

**Qué funcionó:** N/A (primera iteración).

**Qué no funcionó:** N/A (primera iteración).

**Próximos pasos:**
1. Usuario configura el service account de Google Cloud y lo añade a Search
   Console (ver plan en `/Users/peter/.claude/plans/lexical-cooking-popcorn.md`).
2. Correr `npm run gsc:report` manualmente una vez para validar que trae datos.
3. Hacer un dry-run manual del prompt de la rutina (sección siguiente) antes de
   activar el schedule biweekly con `/schedule`.

---

## Iteración 1 — 2026-07-21 (dry-run manual)

**Datos (últimos 28 días vs. los 28 anteriores):**
- Home (`/`): 42 impresiones, **0 clics**, posición promedio 6.4 — pero para las
  queries exactas "desarrollo web puebla" y "desarrollo web en puebla" la
  posición es **2** (con 5 y 3 impresiones resp., ambas subiendo: +4 y +3).
  Con posición 2 y 0% CTR, el problema es el snippet, no el ranking.
- Query genérica "desarrollo web" bajando (-2 impresiones) mientras las
  variantes long-tail con "puebla" suben — consistente con la estrategia de
  `project-seo-strategy` (pivotar a long-tail local).
- `/blog` (posición 24.4, 0 clics) y `/blog/bienvenida` (posición 3, 1
  impresión): volumen muy bajo para sacar conclusiones; no es un problema de
  CTR sino de visibilidad/contenido — no se toca esta iteración.

**Qué se hizo:** se detectó una inconsistencia entre los meta description ES/EN
en `src/components/seo/SEOSimple.jsx`: la versión en inglés incluía "Free
consultation" como CTA y la versión en español (la que ve la mayoría del
tráfico objetivo) no tenía el equivalente. Se agregó "Consulta gratis." al
final de la descripción en español para dar un incentivo de clic más claro,
dado el 0% CTR pese a posición 2 en las queries objetivo.

**Qué no funcionó:** N/A todavía — esta es la primera acción real, hay que
esperar la próxima corrida para ver si el CTR de home se mueve.

**Hallazgo aparte (no accionado esta iteración):** `src/components/seo/SEO.jsx`
es código muerto — no se importa en ningún lado (`App.jsx` usa `SEOSimple.jsx`
como `SEO`). Tiene contenido desactualizado en inglés de una versión anterior
del portafolio ("Senior Backend Developer"). No afecta producción porque no se
renderiza, pero vale la pena limpiarlo en una iteración futura o cuando se
edite ese árbol de archivos — no se borra ahora para no meter un cambio no
relacionado con la señal de datos de esta corrida.

**Próximos pasos:**
1. Ver si el CTR de la home mejora en la próxima corrida tras el cambio de
   descripción; si no se mueve con más volumen de impresiones, probar
   ajustar el `<title>` (ej. adelantar "Puebla" o mencionar el precio ahí).
2. Seguir vigilando si "desarrollo web puebla"/"desarrollo web en puebla"
   siguen subiendo vs. la genérica "desarrollo web" — si se confirma la
   tendencia, priorizar contenido/posts nuevos sobre esas variantes exactas.
3. `/blog` sigue en posición ~24 con 0 clics — revisar en 2-3 iteraciones si
   necesita más internal linking o contenido nuevo para subir de posición
   (no es arreglable con un cambio de copy).

---

## Prompt de la rutina (para configurar con `/schedule`)

```
Ejecuta una iteración del SEO loop de pedrorojas.lat:

1. Lee seo-loop/progress.md completo, especialmente la última iteración
   (qué se intentó, qué funcionó, qué no, y los "próximos pasos").
2. Corre `npm run gsc:report` para traer datos frescos de Search Console
   (queries e impresiones/clics que suben o bajan, páginas con CTR bajo).
3. Decide un máximo de 2-3 acciones concretas y acotadas, por ejemplo:
   - Reforzar con internal linking una keyword que está subiendo (enlazar
     desde BlogSidebar/PostCard/otro post relacionado).
   - Reescribir el <title>/meta description de una página con impresiones
     altas pero CTR bajo, manteniendo el enfoque long-tail de
     project-seo-strategy (Puebla, freelance, médicos/consultorios).
   - Si una keyword nueva con intención de compra aparece con tracción,
     proponer (no escribir un post entero sin avisar) un ángulo para el
     próximo post.
4. Aplica los cambios en una rama nueva (no toques main directamente).
5. Añade una entrada nueva a seo-loop/progress.md con: fecha, qué se hizo,
   qué se espera que pase, y qué vigilar en la próxima corrida.
6. Haz commit, push de la rama, y abre un PR con `gh pr create` explicando
   el razonamiento y los datos de gsc-report que lo motivaron. NO mergees
   el PR — eso lo revisa el usuario.
```
