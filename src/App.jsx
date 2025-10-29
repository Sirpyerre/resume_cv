import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Education from "./pages/Education.jsx";  
import Contact from "./pages/Contact.jsx";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-900 text-white">
            <Navbar />
            <main className="flex-1">
                <Suspense>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}