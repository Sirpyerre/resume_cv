;(function () {
  try {
    var stored = localStorage.getItem("theme")
    if (stored !== "dark" && stored !== "light") return
    document.documentElement.dataset.theme = stored
    var meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute("content", stored === "dark" ? "#1a1a1a" : "#ffffff")
  } catch (e) {}
})()
