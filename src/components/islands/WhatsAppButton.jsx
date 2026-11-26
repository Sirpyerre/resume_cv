import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { getWhatsAppHref } from "../../config/contact.js"

export default function WhatsAppButton({ language = "es" }) {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const showTimer = window.setTimeout(() => setShowTooltip(true), 3000)
    const hideTimer = window.setTimeout(() => setShowTooltip(false), 8000)

    return () => {
      window.clearTimeout(showTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  const message =
    language === "en"
      ? "Hi! I would like to ask about your services."
      : "¡Hola! Me gustaría consultar sobre tus servicios."
  const tooltip = language === "en" ? "Need help? Message me" : "¿Necesitas ayuda? Escríbeme"

  const handleClick = () => {
    const href = getWhatsAppHref(message)
    if (!href) {
      return
    }

    window.gtag?.("event", "click_whatsapp", { button_location: "flotante" })

    window.open(
      href,
      "_blank",
      "noopener,noreferrer",
    )
  }

  if (!getWhatsAppHref(message)) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <div
        className={`hidden md:block transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={handleClick}
          className="bg-crema text-tinta px-4 py-2 rounded-lg shadow-xl border border-crema-oscuro whitespace-nowrap text-sm font-medium hover:border-verde"
        >
          {tooltip}
        </button>
      </div>

      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <FaWhatsapp className="w-7 h-7 relative z-10" />
      </button>
    </div>
  )
}
