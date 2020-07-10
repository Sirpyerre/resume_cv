import React from "react"
import { FaHtml5, FaPhp, FaJs, FaLinux, FaLaravel,FaReact,FaWindows, FaGit, FaGithub, FaSlack } from "react-icons/fa";
import { DiMysql, DiDrupal, DiJira, DiSymfony, DiZend, DiNpm, DiGo} from "react-icons/di";

export default () => (
  <div className="w-100">
    <h2 className="mb-3">Skills</h2>

    <div className="subheading mb-3">Lenguajes de programación &amp; Herramientas</div>
    <ul className="list-inline dev-icons">
      <li className="list-inline-item">
        <FaPhp/>
        <span className="text-legend">PHP</span>
      </li>
      <li className="list-inline-item">
        <DiGo/>
        <span className="text-legend">Go Lang</span>
      </li>
      <li className="list-inline-item">
        <FaHtml5/>
        <span className="text-legend">HTML5</span>
      </li>
      <li className="list-inline-item">
        <FaJs/>
        <span className="text-legend">JavaScript</span>
      </li>
      <li className="list-inline-item">
        <DiMysql/>
        <span className="text-legend">MySQL</span>
      </li>
      <li className="list-inline-item">
        <FaLaravel/>
        <span className="text-legend">Laravel</span>
      </li>
      <li className="list-inline-item">
        <FaReact/>
        <span className="text-legend">React</span>
      </li>
      <li className="list-inline-item">
        <DiSymfony/>
        <span className="text-legend">Symfony</span>
      </li>
      <li className="list-inline-item">
        <DiZend/>
        <span className="text-legend">Zend Framework</span>
      </li>
      <li className="list-inline-item">
        <DiDrupal/>
        <span className="text-legend">Drupal</span>
      </li>
      <li className="list-inline-item">
        <FaLinux/>
        <span className="text-legend">Linux</span>
      </li>
      <li className="list-inline-item">
        <DiJira/>
        <span className="text-legend">Jira</span>
      </li>
      <li className="list-inline-item">
        <FaWindows/>
        <span className="text-legend">Windows</span>
      </li>
      <li className="list-inline-item">
        <DiNpm/>
        <span className="text-legend">NPM</span>
      </li>
      <li className="list-inline-item">
        <FaGit/>
        <span className="text-legend">Git</span>
      </li>
      <li className="list-inline-item">
        <FaGithub/>
        <span className="text-legend">GitHub</span>
      </li>
      <li className="list-inline-item">
        <FaSlack/>
        <span className="text-legend">Slack</span>
      </li>
    </ul>

    <div className="subheading mb-3">Workflow</div>
    <ul className="fa-ul mb-0">
      <li>
        <i className="fa-li fa fa-check"/>
        Diseño web responsivo.
      </li>
      <li>
        <i className="fa-li fa fa-check"/>
        Control de versiones.
      </li>
      <li>
        <i className="fa-li fa fa-check"/>
        Trabajo en equipo y uso de herramimentas de colaboración.
      </li>
      <li>
        <i className="fa-li fa fa-check"/>
        Desarrollo agíl &amp; Scrum
      </li>
    </ul>
  </div>
)