import React from "react"
import { Container } from "react-bootstrap"
import { Sidebar } from "../components/Sidebar"
import "bootstrap/dist/css/bootstrap.min.css"
import About from "../pages/about";
import "../resume.css"

export default () => (
  <div>
    <Sidebar/>
    <Container fluid className="p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <About/>
        </div>
      </section>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="experience">
        <div className="w-100">
          <h1>Hello gatsby!</h1>
          <p> What a worls!</p>
          <img src="https://source.unsplash.com/random/400x200" alt=""/>
        </div>
      </section>
    </Container>
  </div>
)
