import React from "react"
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export default () => (
  <div>
    <h1 className="mb-0">
      Pedro
      <span className="text-primary"> Rojas Reyes</span>
    </h1>
    <div className="subheading mb-3">Puebla, México ·
      <a href="mailto:peter@monoforms.com">peter(@)monoforms.com</a>
    </div>
    <p className="lead mb-3">Licenciado en Tecnologías de la información, con Maestría en Gestión de Tecnologías de la
      Información, con certificación en Administración de Proyectos. Programador web (PHP, MySQL, JavaScript, JQuery,
      CSS3, HTML 5 y VUE), Soporte técnico, Administración de servidores, SQL Server, Laravel, Symfony, GIT e
      implementación de APIS.
      Interesado en colaborar en las áreas de desarrollo de software, Administración de proyectos en empresas del giro
      de manufactura y servicios.
    </p>
    <div className="social-icons">
      <a href="#">
        <FaLinkedin/>
      </a>
      <a href="#">
        <FaGithub/>
      </a>
      <a href="#">
        <FaTwitter/>
      </a>
      <a href="#">
        <FaFacebook/>
      </a>
    </div>
  </div>
)