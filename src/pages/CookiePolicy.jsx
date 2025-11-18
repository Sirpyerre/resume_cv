import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CookiePolicy() {
    const { language } = useLanguage();
    const currentDate = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });

    const content = {
        es: {
            title: "Política de Cookies",
            lastUpdate: "Última actualización",
            intro: "Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en nuestro sitio web, qué tipos de cookies utilizamos, qué información recopilamos mediante cookies y cómo se utiliza esa información.",
            sections: [
                {
                    title: "¿Qué son las cookies?",
                    content: "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, tablet o teléfono móvil) cuando visita un sitio web. Las cookies permiten que el sitio web reconozca su dispositivo y recuerde información sobre su visita, como su idioma preferido y otras configuraciones, lo que puede facilitar su próxima visita y hacer que el sitio le resulte más útil."
                },
                {
                    title: "¿Cómo utilizamos las cookies?",
                    content: "Pedro Rojas Reyes utiliza cookies para diversos fines, incluyendo:",
                    list: [
                        "Mantener sus preferencias de idioma (español/inglés)",
                        "Recordar sus preferencias de navegación",
                        "Mejorar la experiencia del usuario en nuestro sitio",
                        "Analizar cómo los visitantes utilizan nuestro sitio web",
                        "Optimizar el rendimiento del sitio",
                        "Proteger contra actividades fraudulentas o maliciosas"
                    ]
                },
                {
                    title: "Tipos de cookies que utilizamos",
                    subsections: [
                        {
                            subtitle: "1. Cookies Esenciales (Necesarias)",
                            content: "Estas cookies son estrictamente necesarias para que el sitio web funcione correctamente. No pueden ser desactivadas en nuestros sistemas. Generalmente se establecen solo en respuesta a acciones realizadas por usted, como establecer sus preferencias de privacidad, iniciar sesión o completar formularios.",
                            examples: "Ejemplos: cookies de sesión, cookies de seguridad, cookies de funcionalidad básica"
                        },
                        {
                            subtitle: "2. Cookies de Rendimiento y Análisis",
                            content: "Estas cookies nos permiten contar las visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares, y ver cómo los visitantes se mueven por el sitio. Toda la información que estas cookies recopilan es agregada y, por lo tanto, anónima.",
                            examples: "Ejemplos: Google Analytics (si se implementa), métricas de rendimiento"
                        },
                        {
                            subtitle: "3. Cookies de Funcionalidad",
                            content: "Estas cookies permiten que el sitio web proporcione funcionalidad mejorada y personalización. Pueden ser establecidas por nosotros o por terceros cuyos servicios hemos agregado a nuestras páginas.",
                            examples: "Ejemplos: preferencias de idioma, configuraciones de visualización"
                        },
                        {
                            subtitle: "4. Cookies de Terceros",
                            content: "Nuestro sitio web puede utilizar servicios de terceros que establecen sus propias cookies. Estos servicios incluyen:",
                            list: [
                                "FormSpree: para el procesamiento de formularios de contacto",
                                "Servicios de hosting (AWS, Netlify): para seguridad y rendimiento",
                                "Fuentes web (Google Fonts, si aplica): para tipografía mejorada"
                            ]
                        }
                    ]
                },
                {
                    title: "Información recopilada por las cookies",
                    content: "Las cookies en nuestro sitio pueden recopilar la siguiente información:",
                    list: [
                        "Dirección IP (anonimizada)",
                        "Tipo de navegador y versión",
                        "Sistema operativo",
                        "Páginas visitadas en nuestro sitio",
                        "Duración de la visita",
                        "Fecha y hora de la visita",
                        "Sitio web de referencia (de dónde vino)",
                        "Preferencias de idioma seleccionadas",
                        "Interacciones con formularios (sin incluir datos personales sensibles)"
                    ]
                },
                {
                    title: "Cookies de sesión vs. Cookies persistentes",
                    subsections: [
                        {
                            subtitle: "Cookies de Sesión",
                            content: "Son cookies temporales que expiran cuando cierra su navegador. Se utilizan para mantener la información durante su visita al sitio."
                        },
                        {
                            subtitle: "Cookies Persistentes",
                            content: "Permanecen en su dispositivo durante un período específico o hasta que las elimine manualmente. Se utilizan para recordar sus preferencias entre visitas."
                        }
                    ]
                },
                {
                    title: "Control de cookies",
                    content: "Usted tiene el derecho de decidir si acepta o rechaza cookies. Puede ejercer sus preferencias de cookies modificando la configuración de su navegador.",
                    browserControls: "Cómo controlar cookies en navegadores populares:",
                    browsers: [
                        {
                            name: "Google Chrome",
                            instructions: "Configuración > Privacidad y seguridad > Cookies y otros datos de sitios"
                        },
                        {
                            name: "Mozilla Firefox",
                            instructions: "Opciones > Privacidad y seguridad > Cookies y datos del sitio"
                        },
                        {
                            name: "Safari",
                            instructions: "Preferencias > Privacidad > Cookies y datos de sitios web"
                        },
                        {
                            name: "Microsoft Edge",
                            instructions: "Configuración > Cookies y permisos del sitio > Cookies y datos del sitio"
                        }
                    ],
                    warning: "⚠️ Tenga en cuenta que si rechaza o elimina cookies, es posible que no pueda utilizar todas las funciones de nuestro sitio web y que su experiencia de usuario se vea afectada."
                },
                {
                    title: "Almacenamiento local y tecnologías similares",
                    content: "Además de las cookies, nuestro sitio puede utilizar tecnologías de almacenamiento local (como localStorage y sessionStorage) para almacenar preferencias de usuario, como la selección de idioma. Estos datos se almacenan localmente en su navegador y no se transmiten a nuestros servidores."
                },
                {
                    title: "Actualizaciones de la Política de Cookies",
                    content: "Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o reglamentarias. Le recomendamos revisar esta política regularmente para mantenerse informado sobre cómo utilizamos las cookies.",
                    notification: "La fecha de la última actualización se indica en la parte superior de esta política."
                },
                {
                    title: "Consentimiento",
                    content: "Al utilizar nuestro sitio web y no ajustar la configuración de su navegador para rechazar cookies, usted acepta que podamos colocar cookies en su dispositivo según se describe en esta política."
                },
                {
                    title: "Más información",
                    content: "Para obtener más información sobre las cookies y cómo gestionarlas, puede visitar:",
                    links: [
                        "www.allaboutcookies.org",
                        "www.youronlinechoices.eu (para usuarios de la UE)"
                    ]
                },
                {
                    title: "Contacto",
                    content: "Si tiene preguntas sobre nuestra Política de Cookies o sobre cómo utilizamos las cookies, puede contactarnos en:",
                    email: "Correo electrónico: contact@pedrorojas.dev",
                    location: "Ubicación: Puebla, México"
                }
            ]
        },
        en: {
            title: "Cookie Policy",
            lastUpdate: "Last updated",
            intro: "This Cookie Policy explains what cookies are, how we use them on our website, what types of cookies we use, what information we collect through cookies, and how that information is used.",
            sections: [
                {
                    title: "What are cookies?",
                    content: "Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. Cookies allow the website to recognize your device and remember information about your visit, such as your preferred language and other settings, which can make your next visit easier and make the site more useful to you."
                },
                {
                    title: "How do we use cookies?",
                    content: "Pedro Rojas Reyes uses cookies for various purposes, including:",
                    list: [
                        "Maintaining your language preferences (Spanish/English)",
                        "Remembering your browsing preferences",
                        "Improving user experience on our site",
                        "Analyzing how visitors use our website",
                        "Optimizing site performance",
                        "Protecting against fraudulent or malicious activities"
                    ]
                },
                {
                    title: "Types of cookies we use",
                    subsections: [
                        {
                            subtitle: "1. Essential Cookies (Necessary)",
                            content: "These cookies are strictly necessary for the website to function properly. They cannot be disabled in our systems. They are generally set only in response to actions you take, such as setting privacy preferences, logging in, or filling out forms.",
                            examples: "Examples: session cookies, security cookies, basic functionality cookies"
                        },
                        {
                            subtitle: "2. Performance and Analytics Cookies",
                            content: "These cookies allow us to count visits and traffic sources to measure and improve our site's performance. They help us know which pages are most and least popular, and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.",
                            examples: "Examples: Google Analytics (if implemented), performance metrics"
                        },
                        {
                            subtitle: "3. Functionality Cookies",
                            content: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
                            examples: "Examples: language preferences, display settings"
                        },
                        {
                            subtitle: "4. Third-Party Cookies",
                            content: "Our website may use third-party services that set their own cookies. These services include:",
                            list: [
                                "FormSpree: for contact form processing",
                                "Hosting services (AWS, Netlify): for security and performance",
                                "Web fonts (Google Fonts, if applicable): for enhanced typography"
                            ]
                        }
                    ]
                },
                {
                    title: "Information collected by cookies",
                    content: "Cookies on our site may collect the following information:",
                    list: [
                        "IP address (anonymized)",
                        "Browser type and version",
                        "Operating system",
                        "Pages visited on our site",
                        "Duration of visit",
                        "Date and time of visit",
                        "Referring website (where you came from)",
                        "Selected language preferences",
                        "Interactions with forms (without including sensitive personal data)"
                    ]
                },
                {
                    title: "Session cookies vs. Persistent cookies",
                    subsections: [
                        {
                            subtitle: "Session Cookies",
                            content: "These are temporary cookies that expire when you close your browser. They are used to maintain information during your visit to the site."
                        },
                        {
                            subtitle: "Persistent Cookies",
                            content: "These remain on your device for a specific period or until you manually delete them. They are used to remember your preferences between visits."
                        }
                    ]
                },
                {
                    title: "Cookie control",
                    content: "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by modifying your browser settings.",
                    browserControls: "How to control cookies in popular browsers:",
                    browsers: [
                        {
                            name: "Google Chrome",
                            instructions: "Settings > Privacy and security > Cookies and other site data"
                        },
                        {
                            name: "Mozilla Firefox",
                            instructions: "Options > Privacy & Security > Cookies and Site Data"
                        },
                        {
                            name: "Safari",
                            instructions: "Preferences > Privacy > Cookies and website data"
                        },
                        {
                            name: "Microsoft Edge",
                            instructions: "Settings > Cookies and site permissions > Cookies and site data"
                        }
                    ],
                    warning: "⚠️ Please note that if you reject or delete cookies, you may not be able to use all features of our website and your user experience may be affected."
                },
                {
                    title: "Local storage and similar technologies",
                    content: "In addition to cookies, our site may use local storage technologies (such as localStorage and sessionStorage) to store user preferences, such as language selection. This data is stored locally in your browser and is not transmitted to our servers."
                },
                {
                    title: "Cookie Policy updates",
                    content: "We may update this Cookie Policy periodically to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. We recommend reviewing this policy regularly to stay informed about how we use cookies.",
                    notification: "The date of the last update is indicated at the top of this policy."
                },
                {
                    title: "Consent",
                    content: "By using our website and not adjusting your browser settings to reject cookies, you agree that we may place cookies on your device as described in this policy."
                },
                {
                    title: "More information",
                    content: "For more information about cookies and how to manage them, you can visit:",
                    links: [
                        "www.allaboutcookies.org",
                        "www.youronlinechoices.eu (for EU users)"
                    ]
                },
                {
                    title: "Contact",
                    content: "If you have questions about our Cookie Policy or how we use cookies, you can contact us at:",
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
                <p className="text-gray-300 mb-8 leading-relaxed">{t.intro}</p>

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

                        {section.subsections && section.subsections.map((sub, i) => (
                            <div key={i} className="mb-6 ml-4">
                                <h3 className="text-xl font-semibold text-green-400 mb-2">{sub.subtitle}</h3>
                                <p className="text-gray-300 mb-2 leading-relaxed">{sub.content}</p>
                                {sub.examples && (
                                    <p className="text-gray-400 text-sm italic">{sub.examples}</p>
                                )}
                                {sub.list && (
                                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                        {sub.list.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        {section.browserControls && (
                            <>
                                <p className="text-gray-300 mb-3 font-semibold">{section.browserControls}</p>
                                <ul className="space-y-3 mb-4">
                                    {section.browsers.map((browser, i) => (
                                        <li key={i} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                            <span className="text-green-400 font-semibold">{browser.name}:</span>
                                            <span className="text-gray-300 ml-2">{browser.instructions}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {section.warning && (
                            <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg mb-4">
                                <p className="text-yellow-300">{section.warning}</p>
                            </div>
                        )}

                        {section.links && (
                            <ul className="list-disc list-inside text-green-400 mb-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>{link}</li>
                                ))}
                            </ul>
                        )}

                        {section.notification && (
                            <p className="text-gray-300 mt-2 italic">{section.notification}</p>
                        )}

                        {section.email && (
                            <div className="mt-4">
                                <p className="text-green-400 mb-1">{section.email}</p>
                                <p className="text-gray-300">{section.location}</p>
                            </div>
                        )}
                    </section>
                ))}
            </div>
        </div>
    );
}
