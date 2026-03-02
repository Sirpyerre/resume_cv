import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { content } from '../../content/content.jsx';

export default function TechStackSection() {
    const { language } = useLanguage();
    const t = content[language];

    const techCategories = [
        {
            title: t.techStack.languagesFrameworks,
            items: ["Go (Golang)", "C#", ".NET Core / .NET 8", "React", "TypeScript", "PHP"]
        },
        {
            title: t.techStack.cloudDevOps,
            items: ["Kubernetes (K8s)", "AWS (Lambda, S3, API Gateway, SQS)", "Docker", "CI/CD (GitOps)", "Cloud Native", "Lens/K9s"]
        },
        {
            title: t.techStack.databases,
            items: ["PostgreSQL", "MySQL", "MongoDB", "Kafka", "SQS", "SQL Server"]
        }
    ];

    return (
        <section id="tech-stack" className="py-16 sm:py-20 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-verde mb-4 flex items-center justify-center">
                        <span className="text-verde mr-3">⚡</span>
                        {t.techStack.title}
                    </h2>
                </div>

                {/* Tech Categories */}
                <div className="space-y-8 sm:space-y-12">
                    {techCategories.map((category, index) => (
                        <div key={index} className="bg-crema-oscuro/30 rounded-2xl p-6 sm:p-8 border border-crema-oscuro/30">
                            <h3 className="text-xl sm:text-2xl font-semibold text-verde mb-4 sm:mb-6">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                {category.items.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 sm:px-4 py-2 bg-crema-oscuro/40 text-tinta-suave rounded-full text-sm sm:text-base border border-crema-oscuro/30 hover:border-verde/50 hover:text-verde transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
