/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pedro Rojas Reyes: web developer`,
    description: `Curriculum de Pedro Rojas Reyes, web developer. Licenciado en Tecnologías de la información, con Maestría en Gestión de Tecnologías de la
      Información, con certificación en Administración de Proyectos. Programador web (PHP, MySQL, JavaScript, JQuery,
      CSS3, HTML 5 y React), Soporte técnico, Administración de servidores, SQL Server, Laravel, Symfony, GIT e
      implementación de APIS.`,
    author: "Pedro Rojas Reyes",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#309a90`,
        theme_color: `#309a90`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
