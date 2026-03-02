import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { content } from '../../content/content.jsx';

export default function HeroSection() {
    const { language } = useLanguage();
    const t = content[language];
    const h = t.hero;

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    const handleWhatsApp = () => {
        if (!whatsappNumber) return;
        const msg = encodeURIComponent(
            language === 'es'
                ? 'Hola! Me gustaría consultar sobre sus servicios web.'
                : 'Hi! I would like to inquire about your web services.'
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
    };

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="bg-crema min-h-screen flex flex-col justify-center pt-20 pb-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-5 lg:gap-6">

                        {/* Location Badge */}
                        <div>
                            <span className="inline-flex items-center gap-2 border border-tinta/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-tinta-suave uppercase">
                                <span className="w-2 h-2 rounded-full bg-verde flex-shrink-0"></span>
                                {h.badge}
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-tinta leading-tight">
                            {h.headlinePart1}<br />
                            {h.headlinePart2}{' '}
                            <em className="font-lora italic text-verde not-italic" style={{ fontStyle: 'italic', fontFamily: 'Lora, serif' }}>
                                {h.headlineAccent}
                            </em>
                            <br />
                            {h.headlinePart3}
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-tinta-suave leading-relaxed max-w-lg">
                            {h.description}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                            <button
                                onClick={() => scrollTo('contact')}
                                className="inline-flex items-center justify-center gap-2 bg-verde text-crema px-6 py-4 rounded-lg font-bold text-base hover:bg-verde/90 transition-all duration-200 shadow-md active:scale-[0.98] w-full sm:w-auto"
                            >
                                {h.ctaPrimary} →
                            </button>
                            <button
                                onClick={() => scrollTo('contributions')}
                                className="inline-flex items-center justify-center gap-2 text-tinta-suave font-medium text-base hover:text-verde transition-colors px-2 py-3 w-full sm:w-auto"
                            >
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h8M4 18h8" />
                                </svg>
                                {h.ctaSecondary}
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[
                                    { initial: 'A', bg: 'bg-verde' },
                                    { initial: 'M', bg: 'bg-tinta-suave' },
                                    { initial: 'R', bg: 'bg-cobre' },
                                ].map(({ initial, bg }, i) => (
                                    <div
                                        key={i}
                                        className={`w-9 h-9 rounded-full border-2 border-crema flex items-center justify-center text-crema text-sm font-bold ${bg}`}
                                    >
                                        {initial}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="text-yellow-500 text-sm leading-none mb-1">★★★★★</div>
                                <p className="text-sm text-tinta-suave">
                                    <strong className="text-tinta">{h.socialProofCount}</strong> {h.socialProofText}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-4">

                        {/* Featured Service Card */}
                        <div className="bg-crema-medio rounded-2xl p-5 sm:p-6 border border-crema-oscuro">
                            <span className="text-xs font-bold tracking-widest text-tinta-suave uppercase mb-3 block">
                                {h.popularLabel}
                            </span>
                            <h3 className="text-2xl font-bold text-tinta mb-2">{h.popularServiceName}</h3>
                            <p className="text-tinta-suave text-sm mb-5 leading-relaxed">{h.popularServiceDesc}</p>

                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl font-bold text-tinta">{h.popularServicePrice}</span>
                                <span className="text-tinta-suave text-sm">
                                    {h.popularServiceCurrency} · {h.popularServiceDelivery}
                                </span>
                            </div>

                            <ul className="space-y-2.5">
                                {h.popularServiceFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-sm text-tinta-suave">
                                        <svg className="w-4 h-4 text-verde flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Two Small Service Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-crema-medio rounded-xl p-4 border border-crema-oscuro">
                                <span className="text-xl mb-2 block">⚙️</span>
                                <h4 className="font-bold text-tinta text-sm mb-1">{h.webAppName}</h4>
                                <p className="text-xs text-tinta-suave leading-relaxed">{h.webAppDesc}</p>
                            </div>
                            <div className="bg-crema-medio rounded-xl p-4 border border-crema-oscuro">
                                <span className="text-xl mb-2 block">🔧</span>
                                <h4 className="font-bold text-tinta text-sm mb-1">{h.maintenanceName}</h4>
                                <p className="text-xs text-tinta-suave leading-relaxed">{h.maintenanceDesc}</p>
                            </div>
                        </div>

                        {/* WhatsApp CTA Bar */}
                        <div className="bg-tinta rounded-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div>
                                <p className="text-crema font-semibold text-sm">{h.whatsappQuestion}</p>
                                <p className="text-crema/60 text-xs mt-0.5">{h.whatsappText}</p>
                            </div>
                            <button
                                onClick={handleWhatsApp}
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-colors whitespace-nowrap flex-shrink-0 active:scale-[0.98]"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                                {h.whatsappCta}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
