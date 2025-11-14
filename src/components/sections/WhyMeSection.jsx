import { useLanguage } from '../../contexts/LanguageContext';
import { content } from '../../content/content';
import { FaShieldAlt, FaCode, FaHandshake } from 'react-icons/fa';

const WhyMeSection = () => {
  const { language } = useLanguage();
  const t = content[language].whyMe;

  const iconMap = {
    shield: FaShieldAlt,
    code: FaCode,
    handshake: FaHandshake
  };

  return (
    <section id="why-me" className="py-16 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4 text-center">
          {t.title}
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon];
            return (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-green-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-green-400 bg-opacity-20 p-4 rounded-full">
                    <IconComponent className="text-green-400 text-4xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
