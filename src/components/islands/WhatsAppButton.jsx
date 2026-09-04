import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton({ language = "es" }) {
  const [showTooltip, setShowTooltip] = useState(false)
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER

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
      ? "Hi! I would like to inquire about your web services."
      : "Hola! Me gustaria consultar sobre sus servicios web."
  const tooltip = language === "en" ? "Need help?" : "Necesitas ayuda?"

  const handleClick = () => {
    if (!whatsappNumber) {
      return
    }

    const encodedMessage = encodeURIComponent(message)
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  if (!whatsappNumber) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <div
        className={`hidden md:block transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="bg-crema text-tinta px-4 py-2 rounded-lg shadow-xl border border-crema-oscuro whitespace-nowrap">
          <p className="text-sm font-medium">{tooltip}</p>
        </div>
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
