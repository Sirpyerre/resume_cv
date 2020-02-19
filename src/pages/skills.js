import React from "react"
import { FaHtml5, FaPhp, FaJs, FaLinux, FaLaravel,FaReact,FaWindows, FaGit, FaGithub, FaSlack } from "react-icons/fa";
import { DiMysql, DiDrupal, DiJira, DiYii, DiSymfony, DiZend, DiNpm} from "react-icons/di";

export default () => (
  <div className="w-100">
    <h2 className="mb-3">Skills</h2>

    <div className="subheading mb-3">Lenguajes de programación &amp; Herramientas</div>
    <ul className="list-inline dev-icons">
      <li className="list-inline-item">
        <FaPhp/>
      </li>
      <li className="list-inline-item">
        <FaHtml5/>
      </li>
      <li className="list-inline-item">
        <FaJs/>
      </li>
      <li className="list-inline-item">
        <DiMysql/>
      </li>
      <li className="list-inline-item">
        <FaLaravel/>
      </li>
      <li className="list-inline-item">
        <FaReact/>
      </li>
      <li className="list-inline-item">
        <DiSymfony/>
      </li>
      <li className="list-inline-item">
        <DiZend/>
      </li>
      <li className="list-inline-item">
        <DiYii/>
      </li>
      <li className="list-inline-item">
        <DiDrupal/>
      </li>
      <li className="list-inline-item">
        <FaLinux/>
      </li>
      <li className="list-inline-item">
        <DiJira/>
      </li>
      <li className="list-inline-item">
        <FaWindows/>
      </li>
      <li className="list-inline-item">
        <DiNpm/>
      </li>
      <li className="list-inline-item">
        <FaGit/>
      </li>
      <li className="list-inline-item">
        <FaGithub/>
      </li>
      <li className="list-inline-item">
        <FaSlack/>
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