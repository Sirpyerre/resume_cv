import React from 'react'


export default function Footer(){
    return (
        <footer className="bg-gray-50 border-t py-6 mt-8">
            <div className="container mx-auto px-4 text-center text-sm">
            © {new Date().getFullYear()} Pedro Rojas — Backend Developer • <a href="https://github.com/Sirpyerre" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </footer>
    )
}