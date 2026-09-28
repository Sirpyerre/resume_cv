// Public contact values are read from environment variables at build time.
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? ""

export function getWhatsAppHref(message) {
  if (!whatsappNumber) return undefined

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}
