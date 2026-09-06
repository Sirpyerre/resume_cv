import { useMemo, useState } from "react"
import { content } from "../../content/content.jsx"

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
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
            sendTitle: "Send Me a Message",
            name: "Name *",
            email: "Email *",
            phone: "Phone",
            message: "Message *",
            submit: "Send message",
            submitting: "Sending...",
            success: "Message sent successfully. I will get back to you soon.",
            error: "There was an error sending your message. Please try again.",
            nameRequired: "Name is required",
            nameLength: "Name must be at least 2 characters",
            emailRequired: "Email is required",
            emailInvalid: "Invalid email address",
            messageRequired: "Message is required",
            messageLength: "Message must be at least 10 characters",
            rateLimit: "Please wait a few seconds before trying again.",
            podcast: "Listen on your platform:",
            direct: "Direct links",
          }
        : {
            sendTitle: "Enviame un Mensaje",
            name: "Nombre *",
            email: "Email *",
            phone: "Telefono",
            message: "Mensaje *",
            submit: "Enviar mensaje",
            submitting: "Enviando...",
            success: "Mensaje enviado correctamente. Te respondere pronto.",
            error: "Hubo un error al enviar el mensaje. Intenta de nuevo.",
            nameRequired: "El nombre es requerido",
            nameLength: "El nombre debe tener al menos 2 caracteres",
            emailRequired: "El email es requerido",
            emailInvalid: "Email invalido",
            messageRequired: "El mensaje es requerido",
            messageLength: "El mensaje debe tener al menos 10 caracteres",
            rateLimit: "Espera unos segundos antes de volver a intentar.",
            podcast: "Escuchalo en tu plataforma:",
            direct: "Enlaces directos",
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

    if (!formData.email.trim()) {
      nextErrors.email = copy.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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

    try {
      if (!formId) {
        await new Promise((resolve) => setTimeout(resolve, 1200))
      } else {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _subject: `New contact from ${formData.name}`,
          }),
        })

        if (!response.ok) {
          throw new Error("FormSpree submission failed")
        }
      }

      setFormData(emptyForm)
      setStatus({ submitting: false, submitted: true, error: null })
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

            <div className="bg-crema rounded-lg p-6 sm:p-8 border border-crema-oscuro">
              <h3 className="text-xl font-bold text-tinta mb-2">{t.contact.podcast.title}</h3>
              <p className="text-sm text-tinta-suave mb-4">{copy.podcast}</p>
              <div className="space-y-2">
                {t.contact.podcast.platforms.map((platform) => (
                  <a
                    key={platform.href}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-crema-oscuro px-4 py-3 text-sm text-tinta hover:border-verde hover:text-verde transition-colors"
                  >
                    <span>{platform.name}</span>
                    <span>↗</span>
                  </a>
                ))}
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-tinta-suave mb-2"
                >
                  {copy.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass("message")}
                  disabled={status.submitting}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {status.error && <p className="text-sm text-red-600">{status.error}</p>}
              {status.submitted && <p className="text-sm text-verde">{copy.success}</p>}

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
