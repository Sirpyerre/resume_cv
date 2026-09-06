/**
 * Los colores apuntan a variables CSS definidas en src/index.css en formato de
 * canales ("34 34 34") en vez de hex. Eso es lo que permite que el tema se
 * intercambie en runtime y que los modificadores de opacidad de Tailwind
 * (text-tinta-suave/70, bg-verde/10) sigan funcionando via <alpha-value>.
 *
 * Los nombres se leen como lienzo y tinta: en modo oscuro el lienzo es oscuro
 * y la tinta es clara, asi que la metafora se mantiene coherente.
 */
const themeColor = (variable) => `rgb(var(${variable}) / <alpha-value>)`

module.exports = {
    content: ["./src/**/*.{astro,js,jsx,md,mdx,ts,tsx}"],
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                heading: ['"Merriweather Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                crema: themeColor('--c-crema'),
                'crema-medio': themeColor('--c-crema-medio'),
                'crema-oscuro': themeColor('--c-crema-oscuro'),
                tinta: themeColor('--c-tinta'),
                'tinta-suave': themeColor('--c-tinta-suave'),
                verde: themeColor('--c-verde'),
                cobre: themeColor('--c-cobre'),
            },
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
