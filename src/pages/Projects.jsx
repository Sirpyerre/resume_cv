import React from "react";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO.jsx";

expor default function Projects() {
    const projects = [
        {
            title: 'fintech-backend',
            desc: 'Layered Go backend using PostgreSQL, Docker, and Swagger. Containerized with Docker Compose for easy deployment.',
            tech: ['Go', 'PostgreSQL', 'Docker', 'Swagger'],
            repo: 'https://github.com/Sirpyerre/fintech-backend'
        },
        {
            title: 'pasteeclipboard',
            desc: 'Lightweight clipboard manager that lives in the system tray to monitor and reuse clipboard history.',
            tech: ['Electron/Go?','Productivity'],
            repo: 'https://github.com/Sirpyerre/pasteeclipboard'
        },
        {
            title: 'FileUploadApi',
            desc: 'File upload API built with .NET 8 following Clean Architecture. Uses LocalStack to simulate S3 and SQL Server in Docker.',
            tech: ['.NET 8', 'SQL Server', 'Docker', 'LocalStack'],
            repo: 'https://github.com/Sirpyerre/FileUploadApi'
        },
        {
            title: 'payment-platform',
            desc: 'Online payment platform built with Go and Echo, PostgreSQL and Wiremock for simulating external gateways.',
            tech: ['Go','Echo','PostgreSQL','Wiremock'],
            repo: 'https://github.com/Sirpyerre/payment-platform'
        }
]


return (
        <div>
        <SEO title="Projects — Pedro Rojas" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map(p => <ProjectCard key={p.title} {...p} />)}
            </div>
        </div>
    )
}