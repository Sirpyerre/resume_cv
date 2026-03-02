import { FaShieldAlt, FaCode, FaHandshake, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { content } from '../../content/content.jsx';

const PHOTO_URL = 'https://res.cloudinary.com/dtbpucouh/image/upload/w_600,h_750,c_fill,g_face,q_auto,f_auto/v1772490098/portfoli-freelance/IMG20260204132220_BURST005_zvy7ih.jpg';

const iconMap = {
    shield: FaShieldAlt,
    code: FaCode,
    handshake: FaHandshake,
};

export default function AboutSection() {
    const { language } = useLanguage();
    const t = content[language];
    const a = t.about;

    return (
        <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-crema-medio/50">
            <div className="container mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold text-verde flex items-center justify-center gap-3">
                        <span>&lt;/&gt;</span>
                        {a.title}
                    </h2>
                </div>

                {/* Photo + Bio — two columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-12 sm:mb-16">

                    {/* Photo column */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-64 sm:w-72 lg:w-80">
                            {/* Decorative background block */}
                            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-verde/15 border border-verde/20" />

                            {/* Photo */}
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-crema-oscuro">
                                <img
                                    src={PHOTO_URL}
                                    alt="Pedro Rojas Reyes"
                                    className="w-full h-auto object-cover object-top"
                                    loading="lazy"
                                />
                            </div>

                            {/* Experience badge */}
                            <div className="absolute -top-4 -left-4 bg-verde text-crema text-xs font-bold px-3 py-2 rounded-xl shadow-lg leading-tight text-center">
                                {a.experience}
                            </div>
                        </div>
                    </div>

                    {/* Text column */}
                    <div className="flex flex-col gap-5">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-tinta mb-1">
                                Pedro Rojas Reyes
                            </h3>
                            <div className="flex items-center gap-2 text-tinta-suave text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-verde flex-shrink-0" />
                                {a.role}
                            </div>
                            <div className="flex items-center gap-1.5 text-tinta-suave/70 text-sm mt-1">
                                <FaMapMarkerAlt className="text-cobre flex-shrink-0" />
                                {a.location}
                            </div>
                        </div>

                        <div className="w-12 h-0.5 bg-verde/30 rounded-full" />

                        <div className="space-y-4">
                            <p className="text-base sm:text-lg text-tinta leading-relaxed">
                                {a.paragraph1}
                            </p>
                            <p className="text-base sm:text-lg text-tinta leading-relaxed">
                                {a.paragraph2}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Me cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.whyMe.reasons.map((reason, index) => {
                        const Icon = iconMap[reason.icon];
                        return (
                            <div
                                key={index}
                                className="bg-crema-medio rounded-xl p-6 border border-crema-oscuro hover:border-verde transition-colors duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-verde/10 p-4 rounded-full">
                                        <Icon className="text-verde text-3xl" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-tinta mb-3 text-center">
                                    {reason.title}
                                </h3>
                                <p className="text-tinta-suave text-sm text-center leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
