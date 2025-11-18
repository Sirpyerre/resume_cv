import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SEO from "./components/seo/SEOSimple.jsx";

// Import all sections
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyMeSection from "./components/sections/WhyMeSection";
import ContributionsSection from "./components/sections/ContributionsSection";
// import ProjectsSection from "./components/sections/ProjectsSection"; // Hidden - will be replaced with case studies
// import TechStackSection from "./components/sections/TechStackSection"; // Hidden - too technical
// import ExperienceSection from "./components/sections/ExperienceSection"; // Hidden - CV style, not marketing
// import EducationSection from "./components/sections/EducationSection"; // Hidden - CV style, not marketing
import ContactSection from "./components/sections/ContactSection";

export default function App() {
    return (
        <LanguageProvider>
            <SEO />
            <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
                <Navbar />
                <main className="overflow-x-hidden">
                    <HeroSection />
                    <AboutSection />
                    <ServicesSection />
                    <WhyMeSection />
                    <ContributionsSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    )
}