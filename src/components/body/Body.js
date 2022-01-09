import React, { useEffect } from "react";
import "./Body.css";
import About from "./About/about.js";
import Skills from "./Skills/skills.js";
import Projects from "./Projects/projects.js";
import Experience from "./Experience/experience.js";
import Contact from "./Contact/contact.js";
import Aos from "aos";

function Body() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="body">
      <div id="about-container">
        <div className="extra" />
        <section id="about">
          <About />
        </section>
        <div className="extra" />
      </div>
      <div id="skills-container">
        <div className="extra" />
        <section id="about">
          <Skills />
        </section>
        <div className="extra" />
      </div>
      <div id="experience-container">
        <div className="extra" />
        <section id="about">
          <Experience />
        </section>
        <div className="extra" />
      </div>
      <div id="projects-container">
        <div className="extra" />
        <section id="about">
          <Projects />
        </section>
        <div className="extra" />
      </div>
      <div id="contact-container">
        <section id="about">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Body;
