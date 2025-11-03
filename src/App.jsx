import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SEO from "./components/seo/SEOSimple.jsx";

// Import all sections
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import TechStackSection from "./components/sections/TechStackSection";
import ContributionsSection from "./components/sections/ContributionsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
    return (
        <LanguageProvider>
            <SEO />
            <div className="min-h-screen bg-slate-900 text-white">
                <Navbar />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <TechStackSection />
                    <ContributionsSection />
                    <ProjectsSection />
                    <ExperienceSection />
                    <EducationSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    )
}