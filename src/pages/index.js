import React from "react"
import {graphql} from "gatsby"
import { Container } from "react-bootstrap"
import { Sidebar } from "../components/Sidebar"
import "bootstrap/dist/css/bootstrap.min.css"
import About from "../pages/about";
import Contact from "../pages/contact";
import Experience from "../pages/experience";
import Education from "../pages/education"
import Skills from "../pages/skills"
import Awards from "../pages/awards"
import Interest from "../pages/interests"
import "../resume.css"
import SEO from "../components/seo"

export default () => (
  <div>
    <SEO title='Resume'/>
    <Sidebar/>
    <Container fluid className="p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <About/>
        </div>
      </section>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="experience">
          <Experience/>
      </section>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <Education/>
      </section>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <Skills/>
      </section>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interest">
        <Interest/>
      </section>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <Awards/>
      </section>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
        <div className="w-100">
          <Contact/>
        </div>
      </section>

    </Container>
  </div>
);