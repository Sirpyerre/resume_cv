module.exports = {
    content: ["./src/**/*.{astro,js,jsx,md,mdx,ts,tsx}"] ,
    theme: {
        extend: {
            fontFamily: {
                lora: ['Lora', 'serif'],
            },
            colors: {
                crema: '#F5F0E8',
                'crema-medio': '#EDE6D6',
                'crema-oscuro': '#D9CEBC',
                tinta: '#1C1A17',
                'tinta-suave': '#4A4540',
                verde: '#2D6A4F',
                cobre: '#B5651D',
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
