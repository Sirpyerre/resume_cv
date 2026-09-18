// Debe correr antes de pintar o hay un flash de tema claro al cargar en oscuro.
// Sin preferencia guardada no se toca nada y manda el media query del CSS.
//
// Va en un archivo aparte, y no inline en BaseLayout, porque astro.config.mjs
// lee ESTE mismo archivo para calcular el sha256 que publica en el CSP. Al
// derivar el hash de la fuente, no puede quedarse obsoleto al editar el script.
// Cualquier cambio aqui se refleja solo en el hash al siguiente build.
;(function () {
  try {
    var stored = localStorage.getItem("theme")
    if (stored !== "dark" && stored !== "light") return
    document.documentElement.dataset.theme = stored
    var meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute("content", stored === "dark" ? "#1a1a1a" : "#ffffff")
  } catch (e) {}
})()
