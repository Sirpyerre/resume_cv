import { useEffect, useState } from "react"

export default function ConsentBanner({
  language = "es",
  cookiePolicyPath = "/cookie-policy",
}) {
  const [showBanner, setShowBanner] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent")
    if (!consentGiven) {
      const timer = window.setTimeout(() => setShowBanner(true), 1000)
      return () => window.clearTimeout(timer)
    }
  }, [])

  const closeBanner = () => {
    setIsClosing(true)
    window.setTimeout(() => {
      setShowBanner(false)
      setIsClosing(false)
    }, 300)
  }

  const handleChoice = (choice) => {
    localStorage.setItem("cookieConsent", choice)
    localStorage.setItem("cookieConsentDate", new Date().toISOString())
    closeBanner()
  }

  if (!showBanner) {
    return null
  }

  const copy =
    language === "en"
      ? {
          title: "This site uses cookies",
          message:
            "We use essential cookies for site functionality and analytics cookies to improve your experience.",
          acceptAll: "Accept all",
          rejectAll: "Essential only",
          moreInfo: "More info",
        }
      : {
          title: "Este sitio utiliza cookies",
          message:
            "Usamos cookies esenciales para el sitio y cookies analiticas para mejorar tu experiencia.",
          acceptAll: "Aceptar todas",
          rejectAll: "Solo esenciales",
          moreInfo: "Mas informacion",
        }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isClosing ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className="fixed inset-0 bg-tinta/40 backdrop-blur-sm md:hidden"
        onClick={closeBanner}
      />

      <div className="relative bg-crema-medio border-t-2 border-verde shadow-2xl">
        <div className="container mx-auto px-4 py-4 sm:py-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-tinta font-bold text-base sm:text-lg mb-2">{copy.title}</h3>
              <p className="text-tinta-suave text-sm sm:text-base leading-relaxed">
                {copy.message}
              </p>
              <a
                href={cookiePolicyPath}
                className="inline-block mt-2 text-verde hover:text-verde/80 text-xs sm:text-sm underline transition-colors"
              >
                {copy.moreInfo}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:flex-shrink-0">
              <button
                onClick={() => handleChoice("rejected")}
                className="px-6 py-2.5 bg-crema-oscuro hover:bg-crema-oscuro/80 text-tinta rounded-lg font-medium transition-all duration-300 border border-crema-oscuro text-sm sm:text-base"
              >
                {copy.rejectAll}
              </button>
              <button
                onClick={() => handleChoice("accepted")}
                className="px-6 py-2.5 bg-verde hover:bg-verde/90 text-crema rounded-lg font-bold transition-all duration-300 text-sm sm:text-base"
              >
                {copy.acceptAll}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
