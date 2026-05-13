import React from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ConsentBanner from "./components/ConsentBanner.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import SEO from "./components/seo/SEOSimple.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import NotFound from "./pages/NotFound.jsx";

// Import all sections
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContributionsSection from "./components/sections/ContributionsSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
    return (
        <LanguageProvider>
            <SEO />
            <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
                <Navbar />
                <main className="overflow-x-hidden">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <HeroSection />
                                <AboutSection />
                                <ServicesSection />
                                <ContributionsSection />
                                <FAQSection />
                                <ContactSection />
                            </>
                        } />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-of-service" element={<TermsOfService />} />
                        <Route path="/cookie-policy" element={<CookiePolicy />} />
                        <Route path="/blog" element={<BlogListPage />} />
                        <Route path="/blog/:slug" element={<BlogPostPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
                <ConsentBanner />
                <WhatsAppButton />
            </div>
        </LanguageProvider>
    )
}