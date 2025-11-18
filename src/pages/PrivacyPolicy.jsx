import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicy() {
    const { language } = useLanguage();
    const currentDate = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });

    const content = {
        es: {
            title: "Aviso de Privacidad",
            lastUpdate: "Última actualización",
            sections: [
                {
                    title: "Identidad y Domicilio del Responsable",
                    content: "Pedro Rojas Reyes, con domicilio en Puebla, México, es el responsable del uso y protección de sus datos personales, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)."
                },
                {
                    title: "Datos Personales que Recabamos",
                    content: "Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente a través de nuestro formulario de contacto en el sitio web, cuando envía una solicitud de cotización o consulta, y cuando interactúa con nuestros servicios.",
                    list: [
                        "Datos de identificación: nombre completo",
                        "Datos de contacto: correo electrónico, número de teléfono",
                        "Información profesional: nombre de la empresa, giro del negocio",
                        "Datos de comunicación: mensaje o consulta que nos envíe"
                    ]
                },
                {
                    title: "Finalidades del Tratamiento de Datos",
                    content: "Los datos personales que recabamos serán utilizados para las siguientes finalidades necesarias para el servicio:",
                    list: [
                        "Responder a sus consultas y solicitudes de información",
                        "Elaborar cotizaciones personalizadas de servicios web",
                        "Establecer comunicación para la prestación de servicios",
                        "Brindar seguimiento a proyectos contratados",
                        "Cumplir con obligaciones legales y fiscales"
                    ]
                },
                {
                    title: "Finalidades Secundarias",
                    content: "De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:",
                    list: [
                        "Enviarle información sobre nuevos servicios y actualizaciones",
                        "Realizar estudios de satisfacción del cliente",
                        "Mejorar nuestros servicios y procesos"
                    ],
                    note: "En caso de que no desee que sus datos personales sean tratados para estos fines secundarios, puede manifestar su negativa enviando un correo a: contact@pedrorojas.dev"
                },
                {
                    title: "Transferencia de Datos",
                    content: "Le informamos que sus datos personales no serán compartidos con terceros, salvo en los siguientes casos:",
                    list: [
                        "Cuando sea necesario para la prestación del servicio contratado (por ejemplo, servicios de hosting en AWS o Netlify)",
                        "Cuando sea requerido por autoridades competentes en los casos legalmente previstos",
                        "Con su consentimiento expreso"
                    ]
                },
                {
                    title: "Derechos ARCO",
                    content: "Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.",
                    process: "Para ejercer cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del siguiente correo electrónico: contact@pedrorojas.dev",
                    requirements: "Su solicitud deberá contener la siguiente información:",
                    list: [
                        "Nombre completo del titular y correo electrónico para comunicarle la respuesta",
                        "Documentos que acrediten su identidad (INE/IFE o pasaporte)",
                        "Descripción clara y precisa de los datos respecto de los que busca ejercer alguno de los derechos ARCO",
                        "Cualquier documento o información que facilite la localización de sus datos personales"
                    ],
                    response: "La respuesta a su solicitud se enviará en un plazo máximo de 20 días hábiles contados desde la fecha en que se recibió."
                },
                {
                    title: "Revocación del Consentimiento",
                    content: "Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales.",
                    process: "Para revocar su consentimiento deberá enviar su solicitud al correo: contact@pedrorojas.dev"
                },
                {
                    title: "Uso de Cookies y Tecnologías de Rastreo",
                    content: "Le informamos que en nuestra página de internet utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de internet, brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página, así como ofrecerle nuevos productos y servicios basados en sus preferencias.",
                    detail: "Los datos personales que obtenemos de estas tecnologías de rastreo son: horario de navegación, tiempo de navegación en nuestra página, secciones consultadas, y páginas de internet accedidas previo a la nuestra.",
                    control: "Para conocer más sobre nuestra Política de Cookies, consulte el documento correspondiente en nuestro sitio web."
                },
                {
                    title: "Medidas de Seguridad",
                    content: "Pedro Rojas Reyes implementa las medidas de seguridad técnicas, administrativas y físicas necesarias para proteger sus datos personales y evitar su daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Únicamente el personal autorizado tiene acceso a sus datos personales."
                },
                {
                    title: "Cambios al Aviso de Privacidad",
                    content: "El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades por los servicios que ofrecemos, de nuestras prácticas de privacidad o por otras causas.",
                    notification: "Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de nuestro sitio web: https://pedrorojas.dev"
                },
                {
                    title: "Consentimiento",
                    content: "Al proporcionar sus datos personales a través de nuestro sitio web o cualquier otro medio, usted consiente que sus datos personales sean tratados conforme a los términos y condiciones del presente aviso de privacidad."
                }
            ],
            contact: {
                title: "Contacto",
                content: "Si tiene alguna duda o comentario sobre el presente aviso de privacidad, puede contactarnos en:",
                email: "Correo electrónico: contact@pedrorojas.dev",
                location: "Ubicación: Puebla, México"
            }
        },
        en: {
            title: "Privacy Policy",
            lastUpdate: "Last updated",
            sections: [
                {
                    title: "Identity and Address of the Data Controller",
                    content: "Pedro Rojas Reyes, located in Puebla, Mexico, is responsible for the use and protection of your personal data, in accordance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP)."
                },
                {
                    title: "Personal Data We Collect",
                    content: "For the purposes stated in this privacy notice, we may collect your personal data in different ways: when you provide it directly through our website contact form, when you send a quote request or inquiry, and when you interact with our services.",
                    list: [
                        "Identification data: full name",
                        "Contact data: email address, phone number",
                        "Professional information: company name, business sector",
                        "Communication data: message or inquiry you send us"
                    ]
                },
                {
                    title: "Purposes of Data Processing",
                    content: "The personal data we collect will be used for the following purposes necessary for the service:",
                    list: [
                        "Respond to your inquiries and information requests",
                        "Prepare personalized web service quotes",
                        "Establish communication for service provision",
                        "Follow up on contracted projects",
                        "Comply with legal and tax obligations"
                    ]
                },
                {
                    title: "Secondary Purposes",
                    content: "Additionally, we will use your personal information for the following secondary purposes that are not necessary for the requested service, but allow us to provide better service:",
                    list: [
                        "Send you information about new services and updates",
                        "Conduct customer satisfaction studies",
                        "Improve our services and processes"
                    ],
                    note: "If you do not wish your personal data to be processed for these secondary purposes, you may express your refusal by sending an email to: contact@pedrorojas.dev"
                },
                {
                    title: "Data Transfer",
                    content: "We inform you that your personal data will not be shared with third parties, except in the following cases:",
                    list: [
                        "When necessary for the provision of contracted services (e.g., AWS or Netlify hosting services)",
                        "When required by competent authorities in legally provided cases",
                        "With your express consent"
                    ]
                },
                {
                    title: "ARCO Rights",
                    content: "You have the right to know what personal data we have about you, what we use it for, and the conditions of use (Access). You also have the right to request correction of your personal information if it is outdated, inaccurate, or incomplete (Rectification); to have it removed from our records or databases when you consider it is not being used in accordance with principles and obligations (Cancellation); and to oppose the use of your personal data for specific purposes (Opposition). These are known as ARCO rights.",
                    process: "To exercise any ARCO rights, you must submit your request via email: contact@pedrorojas.dev",
                    requirements: "Your request must contain the following information:",
                    list: [
                        "Full name of the holder and email address for response",
                        "Documents proving your identity (ID or passport)",
                        "Clear and precise description of the data regarding which you seek to exercise ARCO rights",
                        "Any document or information that facilitates locating your personal data"
                    ],
                    response: "The response to your request will be sent within a maximum of 20 business days from receipt."
                },
                {
                    title: "Consent Revocation",
                    content: "You may revoke the consent you have given us for processing your personal data. However, please note that we may not be able to honor your request immediately in all cases, as we may be legally required to continue processing your data.",
                    process: "To revoke your consent, send your request to: contact@pedrorojas.dev"
                },
                {
                    title: "Use of Cookies and Tracking Technologies",
                    content: "We inform you that our website uses cookies, web beacons, and other technologies through which we can monitor your behavior as an internet user, provide better service and user experience when browsing our page, and offer new products and services based on your preferences.",
                    detail: "The personal data we obtain from these tracking technologies include: browsing schedule, time spent on our page, sections consulted, and websites accessed prior to ours.",
                    control: "To learn more about our Cookie Policy, please refer to the corresponding document on our website."
                },
                {
                    title: "Security Measures",
                    content: "Pedro Rojas Reyes implements the necessary technical, administrative, and physical security measures to protect your personal data and prevent damage, loss, alteration, destruction, or unauthorized use, access, or processing. Only authorized personnel have access to your personal data."
                },
                {
                    title: "Changes to Privacy Notice",
                    content: "This privacy notice may undergo modifications, changes, or updates due to new legal requirements, our own needs for the services we offer, our privacy practices, or other reasons.",
                    notification: "We commit to keeping you informed about changes to this privacy notice through our website: https://pedrorojas.dev"
                },
                {
                    title: "Consent",
                    content: "By providing your personal data through our website or any other means, you consent to your personal data being processed according to the terms and conditions of this privacy notice."
                }
            ],
            contact: {
                title: "Contact",
                content: "If you have any questions or comments about this privacy notice, you can contact us at:",
                email: "Email: contact@pedrorojas.dev",
                location: "Location: Puebla, Mexico"
            }
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
                        
                        {section.list && (
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                                {section.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {section.note && (
                            <p className="text-gray-400 italic mb-4">{section.note}</p>
                        )}

                        {section.process && (
                            <p className="text-gray-300 mb-4">{section.process}</p>
                        )}

                        {section.requirements && (
                            <>
                                <p className="text-gray-300 mb-2">{section.requirements}</p>
                                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {section.response && (
                            <p className="text-gray-300 mb-4">{section.response}</p>
                        )}

                        {section.detail && (
                            <p className="text-gray-300 mb-4">{section.detail}</p>
                        )}

                        {section.control && (
                            <p className="text-gray-300 mb-4">{section.control}</p>
                        )}

                        {section.notification && (
                            <p className="text-gray-300 mb-4">{section.notification}</p>
                        )}
                    </section>
                ))}

                <section className="mt-12 p-6 bg-slate-800 rounded-lg border border-slate-700">
                    <h2 className="text-2xl font-bold text-white mb-4">{t.contact.title}</h2>
                    <p className="text-gray-300 mb-4">{t.contact.content}</p>
                    <p className="text-green-400 mb-2">{t.contact.email}</p>
                    <p className="text-gray-300">{t.contact.location}</p>
                </section>
            </div>
        </div>
    );
}
