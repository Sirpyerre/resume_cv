import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx'

export default function ContactSection() {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
    const { language } = useLanguage();
    const t = content[language];

    // Log configuration status
    if (!formId) {
        console.warn('⚠️ FormSpree Form ID not configured. Please set VITE_FORMSPREE_FORM_ID in your .env file');
        console.info('📝 Check .env.example for setup instructions');
    }

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '' // Bot trap field
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    // Form validation
    const [errors, setErrors] = useState({});

    // Rate limiting - simple timestamp check
    const [lastSubmit, setLastSubmit] = useState(0);

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = language === 'es' ? 'El nombre es requerido' : 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = language === 'es' ? 'El nombre debe tener al menos 2 caracteres' : 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = language === 'es' ? 'El email es requerido' : 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = language === 'es' ? 'Email inválido' : 'Invalid email';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = language === 'es' ? 'El mensaje es requerido' : 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = language === 'es' ? 'El mensaje debe tener al menos 10 caracteres' : 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Bot detection: Check honeypot field
        if (formData.honeypot) {
            console.warn('Bot detected');
            return;
        }

        // Rate limiting: Prevent multiple submissions within 5 seconds
        const now = Date.now();
        if (now - lastSubmit < 5000) {
            setFormStatus({
                submitting: false,
                submitted: false,
                error: language === 'es' 
                    ? 'Por favor espera unos segundos antes de enviar de nuevo' 
                    : 'Please wait a few seconds before submitting again'
            });
            return;
        }

        // Validate form
        if (!validateForm()) {
            return;
        }

        setFormStatus({ submitting: true, submitted: false, error: null });
        setLastSubmit(now);

        try {
            // Check if FormSpree is configured
            if (!formId) {
                // Simulate successful submission for development/testing
                console.info('📧 Form submission (simulated - FormSpree not configured):');
                console.info('Name:', formData.name);
                console.info('Email:', formData.email);
                console.info('Phone:', formData.phone);
                console.info('Message:', formData.message);
                
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                setFormStatus({ submitting: false, submitted: true, error: null });
                setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
                
                // Reset success message after 5 seconds
                setTimeout(() => {
                    setFormStatus({ submitting: false, submitted: false, error: null });
                }, 5000);
                
                return;
            }

            // Send to FormSpree
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    _subject: `New contact from ${formData.name}`,
                })
            });

            if (!response.ok) {
                throw new Error('FormSpree submission failed');
            }


            // Success
            setFormStatus({ submitting: false, submitted: true, error: null });
            setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus({ submitting: false, submitted: false, error: null });
            }, 5000);

        } catch (error) {
            setFormStatus({
                submitting: false,
                submitted: false,
                error: language === 'es' 
                    ? 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.' 
                    : 'There was an error sending the message. Please try again.'
            });
        }
    };

    const socialLinks = [
        {
            name: t.contact.links.linkedin,
            href: "https://linkedin.com/in/sirpyerre",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: t.contact.links.github,
            href: "https://github.com/Sirpyerre",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd"/>
                </svg>
            )
        },
        {
            name: t.contact.links.website,
            href: "https://monoforms.com",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
            )
        },
        {
            name: t.contact.links.youtube,
            href: "https://www.youtube.com/@monoforms",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        }
    ];

    return (
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800/50">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4 flex items-center justify-center">
                        <span className="text-green-400 mr-3">📧</span>
                        {t.contact.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <div className="bg-slate-900 rounded-lg p-6 sm:p-8 border border-slate-700">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            {language === 'es' ? 'Envíame un Mensaje' : 'Send Me a Message'}
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    {language === 'es' ? 'Nombre *' : 'Name *'}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-slate-800 border ${
                                        errors.name ? 'border-red-500' : 'border-slate-600'
                                    } rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors`}
                                    placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                                    disabled={formStatus.submitting}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    {language === 'es' ? 'Email *' : 'Email *'}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-slate-800 border ${
                                        errors.email ? 'border-red-500' : 'border-slate-600'
                                    } rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors`}
                                    placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
                                    disabled={formStatus.submitting}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone Field (Optional) */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                    {language === 'es' ? 'Teléfono (opcional)' : 'Phone (optional)'}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                                    placeholder={language === 'es' ? '222 123 4567' : '222 123 4567'}
                                    disabled={formStatus.submitting}
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    {language === 'es' ? 'Mensaje *' : 'Message *'}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 bg-slate-800 border ${
                                        errors.message ? 'border-red-500' : 'border-slate-600'
                                    } rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors resize-none`}
                                    placeholder={language === 'es' 
                                        ? 'Cuéntame sobre tu proyecto o negocio...' 
                                        : 'Tell me about your project or business...'}
                                    disabled={formStatus.submitting}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                )}
                            </div>

                            {/* Honeypot field - hidden from users, visible to bots */}
                            <div className="hidden">
                                <label htmlFor="honeypot">Leave this field empty</label>
                                <input
                                    type="text"
                                    id="honeypot"
                                    name="honeypot"
                                    value={formData.honeypot}
                                    onChange={handleChange}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={formStatus.submitting}
                                className="w-full bg-green-400 text-slate-900 px-6 py-4 rounded-lg font-bold hover:bg-green-300 transition-all duration-300 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                            >
                                {formStatus.submitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {language === 'es' ? 'Enviando...' : 'Sending...'}
                                    </span>
                                ) : (
                                    language === 'es' ? 'Enviar Mensaje' : 'Send Message'
                                )}
                            </button>

                            {/* Success Message */}
                            {formStatus.submitted && (
                                <div className="p-4 bg-green-400/20 border border-green-400 rounded-lg">
                                    <p className="text-green-400 text-center font-medium">
                                        {language === 'es' 
                                            ? '¡Mensaje enviado! Te responderé pronto.' 
                                            : 'Message sent! I\'ll get back to you soon.'}
                                    </p>
                                </div>
                            )}

                            {/* Error Message */}
                            {formStatus.error && (
                                <div className="p-4 bg-red-400/20 border border-red-400 rounded-lg">
                                    <p className="text-red-400 text-center font-medium">
                                        {formStatus.error}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Information & Social Links */}
                    <div className="space-y-8">
                        {/* Direct Contact Info */}
                        <div className="bg-slate-900 rounded-lg p-6 sm:p-8 border border-slate-700">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {language === 'es' ? 'Otras Formas de Contacto' : 'Other Ways to Reach Me'}
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-400/20 rounded-lg">
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Email</h4>
                                        <a href="mailto:contact@pedrorojas.dev" className="text-gray-400 hover:text-green-400 transition-colors">
                                            contact@pedrorojas.dev
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-400/20 rounded-lg">
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">
                                            {language === 'es' ? 'Ubicación' : 'Location'}
                                        </h4>
                                        <p className="text-gray-400">Puebla, México</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-400/20 rounded-lg">
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">
                                            {language === 'es' ? 'Horario de Respuesta' : 'Response Time'}
                                        </h4>
                                        <p className="text-gray-400">
                                            {language === 'es' 
                                                ? 'Normalmente en 24-48 horas' 
                                                : 'Usually within 24-48 hours'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-slate-900 rounded-lg p-6 sm:p-8 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-4">
                                {language === 'es' ? 'Sígueme en Redes' : 'Follow Me on Social'}
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-green-400 rounded-lg transition-all duration-300 text-white hover:text-green-400"
                                    >
                                        <div className="flex-shrink-0">
                                            {link.icon}
                                        </div>
                                        <span className="font-medium text-sm truncate">
                                            {link.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}