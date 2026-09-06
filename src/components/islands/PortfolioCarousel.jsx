import { useState } from "react"
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa"
import { content } from "../../content/content.jsx"

export default function PortfolioCarousel({ language = "es" }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const portfolio = content[language].portfolio
  const currentProject = portfolio.projects[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolio.projects.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolio.projects.length - 1 : prevIndex - 1,
    )
  }

  return (
    <section id="contributions" className="py-6 sm:py-10 px-4 sm:px-6 bg-gradient-to-b from-crema to-crema-medio">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-verde/10 text-verde px-4 py-2 rounded-full text-sm font-medium mb-4">
            {language === "es" ? "Mi Portafolio" : "My Portfolio"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-tinta mb-4">
            {portfolio.title}
          </h2>
          <p className="text-tinta-suave max-w-3xl mx-auto">{portfolio.subtitle}</p>
        </div>

        <div className="relative">
          <div className="bg-crema-medio/50 rounded-lg p-6 md:p-8 lg:p-12 border border-crema-oscuro/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-video bg-crema-oscuro/30 rounded-lg overflow-hidden group">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-tinta">
                  {currentProject.title}
                </h3>
                <p className="text-tinta-suave text-lg leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span className="px-3 py-1 bg-crema-oscuro/50 text-verde rounded-full text-sm border border-crema-oscuro">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-primary group"
                >
                  {language === "es" ? "Ver Sitio en Vivo" : "View Live Site"}
                  <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 items-center justify-center bg-crema-medio hover:bg-verde text-tinta hover:text-crema rounded-full transition-all duration-300 border border-crema-oscuro hover:border-verde shadow-lg"
            aria-label={language === "es" ? "Proyecto anterior" : "Previous project"}
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 items-center justify-center bg-crema-medio hover:bg-verde text-tinta hover:text-crema rounded-full transition-all duration-300 border border-crema-oscuro hover:border-verde shadow-lg"
            aria-label={language === "es" ? "Siguiente proyecto" : "Next project"}
          >
            <FaChevronRight className="text-xl" />
          </button>

          <div className="flex md:hidden gap-4 justify-center mt-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center bg-crema-medio hover:bg-verde text-tinta hover:text-crema rounded-full transition-all duration-300 border border-crema-oscuro"
              aria-label={language === "es" ? "Proyecto anterior" : "Previous project"}
            >
              <FaChevronLeft className="text-lg" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center bg-crema-medio hover:bg-verde text-tinta hover:text-crema rounded-full transition-all duration-300 border border-crema-oscuro"
              aria-label={language === "es" ? "Siguiente proyecto" : "Next project"}
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {portfolio.projects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 h-3 bg-verde" : "w-3 h-3 bg-crema-oscuro"
              }`}
              aria-label={`${language === "es" ? "Ir al proyecto" : "Go to project"} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
