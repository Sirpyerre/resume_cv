import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-slate-800 text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-green-400">
                    &lt;PR /&gt;
                </Link>
                <nav className="hidden md:flex space-x-8 text-sm">
                    <Link to="/" className="hover:text-green-400 transition-colors">About Me</Link>
                    <Link to="/tech-stack" className="hover:text-green-400 transition-colors">Tech Stack</Link>
                    <Link to="/experience" className="hover:text-green-400 transition-colors">Key Professional Contributions</Link>
                    <Link to="/projects" className="hover:text-green-400 transition-colors">Personal Projects & Labs</Link>
                    <Link to="/education" className="hover:text-green-400 transition-colors">Professional Experience</Link>
                    <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
                    <Link to="/es" className="hover:text-green-400 transition-colors">ES / Español</Link>
                </nav>
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}