import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function TermsOfService() {
    const { language } = useLanguage();
    const currentDate = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });

    const content = {
        es: {
            title: "Términos y Condiciones de Uso",
            lastUpdate: "Última actualización",
            sections: [
                {
                    title: "Aceptación de los Términos",
                    content: "Al acceder y utilizar el sitio web de Pedro Rojas Reyes (en adelante, 'el Sitio'), usted acepta quedar sujeto a estos Términos y Condiciones de Uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio."
                },
                {
                    title: "Descripción del Servicio",
                    content: "Pedro Rojas Reyes ofrece servicios de desarrollo web, consultoría tecnológica y soluciones digitales para negocios. El Sitio proporciona información sobre estos servicios, así como un formulario de contacto para solicitar cotizaciones y consultas.",
                    services: "Los servicios ofrecidos incluyen:",
                    list: [
                        "Desarrollo de sitios web profesionales",
                        "Aplicaciones web personalizadas",
                        "Consultoría en infraestructura cloud",
                        "Mantenimiento y soporte técnico",
                        "Optimización SEO y rendimiento web"
                    ]
                },
                {
                    title: "Uso del Sitio",
                    content: "El usuario se compromete a utilizar el Sitio y sus servicios de manera legal y de conformidad con estos Términos. Queda expresamente prohibido:",
                    list: [
                        "Utilizar el Sitio para fines ilegales o no autorizados",
                        "Intentar acceder a áreas restringidas del Sitio o sistemas relacionados",
                        "Transmitir virus, malware o cualquier código de naturaleza destructiva",
                        "Recopilar información de otros usuarios sin su consentimiento",
                        "Hacerse pasar por otra persona o entidad",
                        "Interferir con el funcionamiento normal del Sitio"
                    ]
                },
                {
                    title: "Propiedad Intelectual",
                    content: "Todo el contenido del Sitio, incluyendo pero no limitándose a textos, gráficos, logotipos, íconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Pedro Rojas Reyes o de sus proveedores de contenido y está protegido por las leyes mexicanas e internacionales de derechos de autor.",
                    restrictions: "No está permitido:",
                    list: [
                        "Reproducir, duplicar, copiar o revender cualquier parte del Sitio sin autorización expresa",
                        "Modificar o crear trabajos derivados del contenido del Sitio",
                        "Utilizar el contenido con fines comerciales sin permiso previo por escrito"
                    ]
                },
                {
                    title: "Cotizaciones y Contratación de Servicios",
                    content: "Las cotizaciones proporcionadas a través del Sitio son estimaciones preliminares basadas en la información proporcionada por el cliente. Los precios finales pueden variar según el alcance detallado del proyecto.",
                    process: "Proceso de contratación:",
                    list: [
                        "El cliente envía una solicitud de cotización a través del formulario de contacto",
                        "Pedro Rojas Reyes responde con una cotización preliminar dentro de 2-3 días hábiles",
                        "Se realiza una llamada exploratoria gratuita para definir el proyecto",
                        "Se elabora una propuesta formal con alcance, tiempos y costos definitivos",
                        "Una vez aceptada la propuesta, se firma un contrato de servicios específico",
                        "El contrato formal prevalecerá sobre estos términos generales"
                    ]
                },
                {
                    title: "Política de Pagos",
                    content: "Los términos de pago específicos se establecerán en el contrato de servicios individual. Generalmente, los proyectos requieren:",
                    list: [
                        "50% de anticipo al inicio del proyecto",
                        "50% restante a la entrega final",
                        "Servicios de mantenimiento: pago mensual anticipado",
                        "Los pagos pueden realizarse mediante transferencia bancaria o métodos acordados"
                    ]
                },
                {
                    title: "Garantías y Responsabilidades",
                    content: "Pedro Rojas Reyes se compromete a prestar sus servicios con profesionalismo y de acuerdo con los estándares de la industria. Sin embargo:",
                    limitations: "Limitaciones de responsabilidad:",
                    list: [
                        "El Sitio y sus servicios se proporcionan 'tal cual' y 'según disponibilidad'",
                        "No se garantiza que el Sitio esté libre de errores o interrupciones",
                        "No se asume responsabilidad por daños indirectos, incidentales o consecuentes",
                        "La responsabilidad total no excederá el monto pagado por el servicio contratado",
                        "El cliente es responsable de proporcionar información precisa y completa para el proyecto"
                    ]
                },
                {
                    title: "Confidencialidad",
                    content: "Toda información confidencial compartida por el cliente durante la consulta o ejecución del proyecto será tratada con estricta confidencialidad. Pedro Rojas Reyes se compromete a no divulgar información sensible del negocio del cliente a terceros sin autorización expresa."
                },
                {
                    title: "Cancelaciones y Reembolsos",
                    content: "Las políticas de cancelación y reembolso específicas se detallarán en el contrato de servicios individual. Como norma general:",
                    list: [
                        "El cliente puede cancelar antes del inicio del proyecto con reembolso del 100%",
                        "Una vez iniciado el proyecto, los anticipos no son reembolsables",
                        "Si Pedro Rojas Reyes cancela el proyecto, se reembolsará el 100% de los pagos recibidos",
                        "Para servicios de mantenimiento mensual, se requiere aviso de 30 días para cancelar"
                    ]
                },
                {
                    title: "Enlaces a Terceros",
                    content: "El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia. Pedro Rojas Reyes no respalda ni asume responsabilidad por el contenido, políticas de privacidad o prácticas de sitios web de terceros."
                },
                {
                    title: "Modificaciones del Servicio y Términos",
                    content: "Pedro Rojas Reyes se reserva el derecho de modificar o discontinuar, temporal o permanentemente, el Sitio o cualquier servicio en cualquier momento sin previo aviso. También nos reservamos el derecho de actualizar estos Términos y Condiciones en cualquier momento.",
                    notification: "Los cambios entrarán en vigor inmediatamente después de su publicación en el Sitio. Su uso continuado del Sitio después de cualquier cambio constituye su aceptación de los nuevos términos."
                },
                {
                    title: "Ley Aplicable y Jurisdicción",
                    content: "Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos. Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Puebla, México."
                },
                {
                    title: "Divisibilidad",
                    content: "Si alguna disposición de estos Términos y Condiciones se considera inválida o inaplicable, dicha disposición se eliminará y las disposiciones restantes seguirán siendo válidas y aplicables."
                },
                {
                    title: "Contacto",
                    content: "Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos en:",
                    email: "Correo electrónico: contact@pedrorojas.dev",
                    location: "Ubicación: Puebla, México"
                }
            ]
        },
        en: {
            title: "Terms and Conditions of Use",
            lastUpdate: "Last updated",
            sections: [
                {
                    title: "Acceptance of Terms",
                    content: "By accessing and using the website of Pedro Rojas Reyes (hereinafter, 'the Site'), you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
                },
                {
                    title: "Service Description",
                    content: "Pedro Rojas Reyes offers web development services, technology consulting, and digital solutions for businesses. The Site provides information about these services, as well as a contact form to request quotes and inquiries.",
                    services: "Services offered include:",
                    list: [
                        "Professional website development",
                        "Custom web applications",
                        "Cloud infrastructure consulting",
                        "Maintenance and technical support",
                        "SEO optimization and web performance"
                    ]
                },
                {
                    title: "Site Use",
                    content: "Users agree to use the Site and its services legally and in accordance with these Terms. The following is expressly prohibited:",
                    list: [
                        "Using the Site for illegal or unauthorized purposes",
                        "Attempting to access restricted areas of the Site or related systems",
                        "Transmitting viruses, malware, or any destructive code",
                        "Collecting information from other users without their consent",
                        "Impersonating another person or entity",
                        "Interfering with the normal operation of the Site"
                    ]
                },
                {
                    title: "Intellectual Property",
                    content: "All Site content, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and data compilations, is the property of Pedro Rojas Reyes or its content suppliers and is protected by Mexican and international copyright laws.",
                    restrictions: "Not permitted:",
                    list: [
                        "Reproducing, duplicating, copying, or reselling any part of the Site without express authorization",
                        "Modifying or creating derivative works from Site content",
                        "Using content for commercial purposes without prior written permission"
                    ]
                },
                {
                    title: "Quotes and Service Contracting",
                    content: "Quotes provided through the Site are preliminary estimates based on information provided by the client. Final prices may vary according to detailed project scope.",
                    process: "Contracting process:",
                    list: [
                        "Client submits a quote request through the contact form",
                        "Pedro Rojas Reyes responds with a preliminary quote within 2-3 business days",
                        "A free exploratory call is held to define the project",
                        "A formal proposal is prepared with definitive scope, timeline, and costs",
                        "Once the proposal is accepted, a specific service contract is signed",
                        "The formal contract will prevail over these general terms"
                    ]
                },
                {
                    title: "Payment Policy",
                    content: "Specific payment terms will be established in the individual service contract. Generally, projects require:",
                    list: [
                        "50% down payment at project start",
                        "Remaining 50% upon final delivery",
                        "Maintenance services: monthly payment in advance",
                        "Payments can be made via bank transfer or agreed methods"
                    ]
                },
                {
                    title: "Warranties and Responsibilities",
                    content: "Pedro Rojas Reyes commits to providing services professionally and according to industry standards. However:",
                    limitations: "Liability limitations:",
                    list: [
                        "The Site and its services are provided 'as is' and 'as available'",
                        "No guarantee that the Site will be error-free or uninterrupted",
                        "No liability for indirect, incidental, or consequential damages",
                        "Total liability will not exceed the amount paid for contracted service",
                        "Client is responsible for providing accurate and complete project information"
                    ]
                },
                {
                    title: "Confidentiality",
                    content: "All confidential information shared by the client during consultation or project execution will be treated with strict confidentiality. Pedro Rojas Reyes commits not to disclose sensitive client business information to third parties without express authorization."
                },
                {
                    title: "Cancellations and Refunds",
                    content: "Specific cancellation and refund policies will be detailed in the individual service contract. As a general rule:",
                    list: [
                        "Client may cancel before project start with 100% refund",
                        "Once project has started, down payments are non-refundable",
                        "If Pedro Rojas Reyes cancels the project, 100% of payments received will be refunded",
                        "For monthly maintenance services, 30 days notice is required to cancel"
                    ]
                },
                {
                    title: "Third-Party Links",
                    content: "The Site may contain links to third-party websites. These links are provided for your convenience only. Pedro Rojas Reyes does not endorse or assume responsibility for the content, privacy policies, or practices of third-party websites."
                },
                {
                    title: "Service and Terms Modifications",
                    content: "Pedro Rojas Reyes reserves the right to modify or discontinue, temporarily or permanently, the Site or any service at any time without prior notice. We also reserve the right to update these Terms and Conditions at any time.",
                    notification: "Changes will take effect immediately upon posting on the Site. Your continued use of the Site after any changes constitutes your acceptance of the new terms."
                },
                {
                    title: "Applicable Law and Jurisdiction",
                    content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Mexican States. Any dispute arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Puebla, Mexico."
                },
                {
                    title: "Severability",
                    content: "If any provision of these Terms and Conditions is deemed invalid or unenforceable, such provision shall be removed and the remaining provisions shall remain valid and enforceable."
                },
                {
                    title: "Contact",
                    content: "If you have questions about these Terms and Conditions, you can contact us at:",
                    email: "Email: contact@pedrorojas.dev",
                    location: "Location: Puebla, Mexico"
                }
            ]
        }
    };

    const t = content[language];

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <div className="container mx-auto max-w-4xl px-4 py-16">
                <button
                    onClick={() => window.history.back()}
                    className="mb-8 text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                >
                    ← {language === 'es' ? 'Volver' : 'Back'}
                </button>

                <h1 className="text-4xl font-bold text-green-400 mb-4">{t.title}</h1>
                <p className="text-gray-400 mb-8">{t.lastUpdate}: {currentDate}</p>

                {t.sections.map((section, index) => (
                    <section key={index} className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                        <p className="text-gray-300 mb-4 leading-relaxed">{section.content}</p>
                        
                        {section.services && (
                            <p className="text-gray-300 mb-2 font-semibold">{section.services}</p>
                        )}

                        {section.process && (
                            <p className="text-gray-300 mb-2 font-semibold">{section.process}</p>
                        )}

                        {section.restrictions && (
                            <p className="text-gray-300 mb-2 font-semibold">{section.restrictions}</p>
                        )}

                        {section.limitations && (
                            <p className="text-gray-300 mb-2 font-semibold">{section.limitations}</p>
                        )}

                        {section.list && (
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                                {section.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {section.notification && (
                            <p className="text-gray-300 mb-4 italic">{section.notification}</p>
                        )}

                        {section.email && (
                            <>
                                <p className="text-green-400 mb-2">{section.email}</p>
                                <p className="text-gray-300">{section.location}</p>
                            </>
                        )}
                    </section>
                ))}
            </div>
        </div>
    );
}
