import React  from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    Pedro Rojas Reyes
                </Link>
                <nav className="space-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    )
}