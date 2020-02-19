import React from "react";
import { Link} from "gatsby";
import { Navbar, Nav } from "react-bootstrap"

export const Sidebar = () => (
  <Navbar bg="primary" expand="lg" fixed="top" id="sideNav">
    <Navbar.Brand href="#home">
      <span className="d-block d-lg-none">Pedro Rojas Reyes</span>
      <span className="d-none d-lg-block">
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2"
             src="https://sirpyerre.github.io/porfolio-app/peter_lentes_wfh.5b8628bb.jpg" alt=""/>
      </span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="#about">Acerca</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#experience" eventKey="experience" >Experiencia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="education" href="#education">Educación</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="skills" href="#skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="interests" href="#interest">Intereses</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="awards" href="#awards">Reconocimientos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contact" href="#contact">Contacto</Nav.Link>
          {/*<Link to="/contact/">Contacto</Link>*/}
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)