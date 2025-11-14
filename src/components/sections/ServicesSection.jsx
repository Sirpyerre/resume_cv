import { useLanguage } from '../../contexts/LanguageContext';
import { content } from '../../content/content';
import { FaCheck } from 'react-icons/fa';

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = content[language].services;

  return (
    <section id="services" className="py-16 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4 text-center">
          {t.title}
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg p-6 border border-slate-700 hover:border-green-400 transition-all duration-300 flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-green-400 text-xl font-semibold mb-4">{pkg.price}</p>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="text-white font-semibold mb-3">
                  {language === 'en' ? 'Includes:' : 'Incluye:'}
                </h4>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <FaCheck className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-700">
                <p className="text-xs text-gray-400 italic">{pkg.ideal}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-green-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors duration-300"
          >
            {language === 'en' ? 'Get Your Free Consultation' : 'Obtén tu Consulta Gratuita'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
