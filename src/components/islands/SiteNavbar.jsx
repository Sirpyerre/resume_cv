import { useMemo, useState } from "react"

export default function SiteNavbar({
  language = "es",
  basePath = "/",
  links,
  ui,
  alternateLocalePath,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = useMemo(
    () => [
      { href: links.home, label: ui.home, match: "/" },
      { href: links.services, label: ui.services, match: "/services" },
      { href: links.portfolio, label: ui.portfolio, match: "/portfolio" },
      { href: links.faq, label: ui.faq, match: "/faq" },
      { href: links.contact, label: ui.contact, match: "/contact" },
      { href: links.blog, label: ui.blog, match: "/blog" },
    ],
    [links, ui],
  )

  const isActive = (match) => {
    if (match === "/") {
      return basePath === "/"
    }

    return basePath === match || basePath.startsWith(`${match}/`)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-crema/95 backdrop-blur-sm text-tinta z-50 border-b border-crema-oscuro">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a
          href={links.home}
          className="text-xl font-bold text-tinta hover:text-verde transition-colors"
        >
          Pedro.
        </a>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-medium transition-colors hover:text-verde ${
                isActive(link.match) ? "bg-verde/10 text-verde" : "text-tinta-suave"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={alternateLocalePath}
            className="hidden lg:block text-xs text-tinta-suave hover:text-verde transition-colors font-medium tracking-wide"
          >
            {ui.switchLocale}
          </a>

          <a
            href={links.contact}
            className="hidden lg:inline-flex items-center gap-1 bg-verde text-crema px-5 py-2 rounded-lg font-semibold text-sm hover:bg-verde/90 transition-colors"
          >
            {ui.contact} →
          </a>

          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="lg:hidden text-tinta focus:outline-none p-1"
            aria-label={language === "en" ? "Toggle menu" : "Abrir menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden bg-crema border-t border-crema-oscuro`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs font-bold tracking-widest text-tinta-suave/60 mb-3">
            {language === "en" ? "MENU" : "MENU"}
          </p>
          <div className="border-t border-crema-oscuro mb-4" />

          <nav className="space-y-1 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between w-full text-left py-3 px-2 rounded-lg text-base font-medium transition-colors hover:text-verde ${
                  isActive(link.match) ? "text-verde" : "text-tinta"
                }`}
              >
                {link.label}
                <svg
                  className="w-4 h-4 text-tinta-suave/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pb-2">
            <a
              href={links.contact}
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-verde text-crema py-3.5 rounded-lg font-bold text-base hover:bg-verde/90 transition-colors text-center"
            >
              {language === "en" ? "Book free consultation" : "Agendar consulta gratis"} →
            </a>
            <a
              href={alternateLocalePath}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-tinta-suave hover:text-verde transition-colors pt-1"
            >
              {ui.switchLocale}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
