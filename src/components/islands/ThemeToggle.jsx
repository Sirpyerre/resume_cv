import { useEffect, useState } from "react"

const STORAGE_KEY = "theme"
const THEME_COLOR = { light: "#ffffff", dark: "#1a1a1a" }

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === "dark" || stored === "light" ? stored : null
  } catch {
    return null
  }
}

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function resolveTheme() {
  return readStoredTheme() ?? (systemPrefersDark() ? "dark" : "light")
}

export default function ThemeToggle({ language = "es" }) {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  // El script inline de BaseLayout ya aplico el tema antes de pintar. Aqui solo
  // se lee para que el icono arranque sincronizado con lo que ya se ve.
  useEffect(() => {
    setTheme(resolveTheme())
    setMounted(true)
  }, [])

  // Sin eleccion guardada el tema lo maneja el media query en CSS; este listener
  // solo mantiene el icono al dia cuando el sistema cambia.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")

    const onChange = (event) => {
      if (!readStoredTheme()) {
        setTheme(event.matches ? "dark" : "light")
      }
    }

    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark"

    document.documentElement.dataset.theme = next
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLOR[next])

    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage bloqueado: el tema queda aplicado en esta pagina de todos modos.
    }

    setTheme(next)
  }

  const isDark = mounted && theme === "dark"
  const label =
    language === "en"
      ? isDark
        ? "Switch to light theme"
        : "Switch to dark theme"
      : isDark
        ? "Cambiar a tema claro"
        : "Cambiar a tema oscuro"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-crema-oscuro text-tinta-suave transition-colors hover:border-verde hover:text-verde"
    >
      {isDark ? (
        <svg
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          />
        </svg>
      ) : (
        <svg
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          />
        </svg>
      )}
    </button>
  )
}
