import { useMemo, useState } from "react"
import { content } from "../../content/content.jsx"
import { getWhatsAppHref } from "../../config/contact.js"

const emptyForm = {
  name: "",
  businessType: "",
  message: "",
  budget: "",
  phone: "",
  email: "",
  honeypot: "",
}

export default function ContactForm({ language = "es" }) {
  const t = content[language]
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [lastSubmit, setLastSubmit] = useState(0)
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  })

  const copy = useMemo(
    () =>
      language === "en"
        ? {
            sendTitle: "Tell me about your business",
            name: "Name *",
            businessType: "Type of business *",
            businessPlaceholder: "E.g. clinic, store, accounting firm",
            message: "What do you want to solve? *",
            messagePlaceholder: "E.g. I track orders in Excel and lose time every week",
            budget: "Budget range (optional)",
            budgetOptions: ["Not sure yet", "Up to $10,000 MXN", "$10,000 – $25,000 MXN", "$25,000 – $45,000 MXN", "More than $45,000 MXN"],
            phone: "Phone (optional)",
            email: "Email (optional)",
            submit: "Send it to me on WhatsApp",
            submitting: "Opening WhatsApp...",
            success: "Done! Continue the conversation on WhatsApp. I reply the same day.",
            successFallback: "Message sent. I will get back to you soon.",
            error: "There was an error sending your message. Please try again.",
            nameRequired: "Name is required",
            nameLength: "Name must be at least 2 characters",
            businessRequired: "Tell me what type of business you have",
            emailInvalid: "Invalid email address",
            messageRequired: "Tell me what you want to solve",
            messageLength: "Please add a little more detail (at least 10 characters)",
            rateLimit: "Please wait a few seconds before trying again.",
            direct: "Direct links",
            waHello: "Hi, I'm",
            waBusiness: "Business",
            waSolve: "I want to solve",
            waBudget: "Budget",
            waPhone: "Phone",
            waEmail: "Email",
          }
        : {
            sendTitle: "Cuéntame de tu negocio",
            name: "Nombre *",
            businessType: "Tipo de negocio *",
            businessPlaceholder: "Ej. clínica, tienda, despacho contable",
            message: "¿Qué quieres resolver? *",
            messagePlaceholder: "Ej. llevo pedidos en Excel y pierdo tiempo cada semana",
            budget: "Rango de presupuesto (opcional)",
            budgetOptions: ["Aún no lo sé", "Hasta $10,000 MXN", "$10,000 – $25,000 MXN", "$25,000 – $45,000 MXN", "Más de $45,000 MXN"],
            phone: "Teléfono (opcional)",
            email: "Email (opcional)",
            submit: "Envíamelo por WhatsApp",
            submitting: "Abriendo WhatsApp...",
            success: "¡Listo! Continúa la conversación en WhatsApp. Respondo el mismo día.",
            successFallback: "Mensaje enviado. Te responderé pronto.",
            error: "Hubo un error al enviar el mensaje. Intenta de nuevo.",
            nameRequired: "El nombre es requerido",
            nameLength: "El nombre debe tener al menos 2 caracteres",
            businessRequired: "Dime qué tipo de negocio tienes",
            emailInvalid: "Email inválido",
            messageRequired: "Cuéntame qué quieres resolver",
            messageLength: "Agrega un poco más de detalle (mínimo 10 caracteres)",
            rateLimit: "Espera unos segundos antes de volver a intentar.",
            direct: "Enlaces directos",
            waHello: "Hola, soy",
            waBusiness: "Negocio",
            waSolve: "Quiero resolver",
            waBudget: "Presupuesto",
            waPhone: "Teléfono",
            waEmail: "Email",
          },
    [language],
  )

  const validate = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = copy.nameRequired
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = copy.nameLength
    }

    if (!formData.businessType.trim()) {
      nextErrors.businessType = copy.businessRequired
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = copy.emailInvalid
    }

    if (!formData.message.trim()) {
      nextErrors.message = copy.messageRequired
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = copy.messageLength
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: null,
      }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (formData.honeypot) {
      return
    }

    const now = Date.now()
    if (now - lastSubmit < 5000) {
      setStatus({ submitting: false, submitted: false, error: copy.rateLimit })
      return
    }

    if (!validate()) {
      return
    }

    setLastSubmit(now)
    setStatus({ submitting: true, submitted: false, error: null })

    const lines = [
      `${copy.waHello} ${formData.name.trim()}.`,
      `${copy.waBusiness}: ${formData.businessType.trim()}`,
      `${copy.waSolve}: ${formData.message.trim()}`,
      formData.budget && `${copy.waBudget}: ${formData.budget}`,
      formData.phone.trim() && `${copy.waPhone}: ${formData.phone.trim()}`,
      formData.email.trim() && `${copy.waEmail}: ${formData.email.trim()}`,
    ].filter(Boolean)
    const waHref = getWhatsAppHref(lines.join("\n"))
    let usedWhatsApp = false

    try {
      if (waHref) {
        window.open(waHref, "_blank", "noopener,noreferrer")
        usedWhatsApp = true
      } else if (!formId) {
        await new Promise((resolve) => setTimeout(resolve, 1200))
      } else {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            businessType: formData.businessType,
            message: formData.message,
            budget: formData.budget,
            phone: formData.phone,
            email: formData.email,
            _subject: `New lead from ${formData.name}`,
          }),
        })

        if (!response.ok) {
          throw new Error("FormSpree submission failed")
        }
      }

      window.gtag?.("event", "generate_lead", { form_id: "contacto", channel: usedWhatsApp ? "whatsapp" : "formspree" })
      setFormData(emptyForm)
      setStatus({ submitting: false, submitted: usedWhatsApp ? "whatsapp" : "fallback", error: null })
    } catch {
      setStatus({ submitting: false, submitted: false, error: copy.error })
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-crema-medio border ${
      errors[field] ? "border-red-500" : "border-crema-oscuro"
    } rounded-lg text-tinta focus:outline-none focus:border-verde transition-colors`

  return (
    <section id="contact" className="py-6 sm:py-10 px-4 sm:px-6 bg-crema-medio">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-verde mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg sm:text-xl text-tinta-suave leading-relaxed max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="bg-crema rounded-lg p-6 sm:p-8 border border-crema-oscuro">
              <p className="text-xs font-bold tracking-widest text-tinta-suave/60 mb-3">
                {copy.direct}
              </p>
              <div className="space-y-3 text-sm text-tinta-suave">
                <a href="mailto:contacto@pedrorojas.lat" className="block hover:text-verde">
                  {t.contact.links.email}: contacto@pedrorojas.lat
                </a>
                <a href="https://github.com/Sirpyerre" className="block hover:text-verde">
                  {t.contact.links.github}: github.com/Sirpyerre
                </a>
                <a
                  href="https://linkedin.com/in/sirpyerre"
                  className="block hover:text-verde"
                >
                  {t.contact.links.linkedin}: linkedin.com/in/sirpyerre
                </a>
              </div>
            </div>
          </div>

          <div className="bg-crema rounded-lg p-6 sm:p-8 border border-crema-oscuro">
            <h3 className="text-2xl font-bold text-tinta mb-6">{copy.sendTitle}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-tinta-suave mb-2">
                  {copy.name}
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                  disabled={status.submitting}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-tinta-suave mb-2">
                  {copy.businessType}
                </label>
                <input
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder={copy.businessPlaceholder}
                  className={inputClass("businessType")}
                  disabled={status.submitting}
                />
                {errors.businessType && (
                  <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-tinta-suave mb-2">
                  {copy.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={copy.messagePlaceholder}
                  className={inputClass("message")}
                  disabled={status.submitting}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-tinta-suave mb-2">
                  {copy.budget}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClass("budget")}
                  disabled={status.submitting}
                >
                  <option value=""></option>
                  {copy.budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-tinta-suave mb-2">
                    {copy.phone}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass("phone")}
                    disabled={status.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-tinta-suave mb-2">
                    {copy.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass("email")}
                    disabled={status.submitting}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              {status.error && <p className="text-sm text-red-600">{status.error}</p>}
              {status.submitted && (
                <p className="text-sm text-verde">
                  {status.submitted === "whatsapp" ? copy.success : copy.successFallback}
                </p>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status.submitting ? copy.submitting : copy.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
