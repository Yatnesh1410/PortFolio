import React,{useEffect} from "react";
import "./Body.css";
import About from "./About/about.js";
import Skills from "./Skills/skills.js";
import Projects from "./Projects/projects.js";
import Experience from "./Experience/experience.js";
import Contact from "./Contact/contact.js";
import Aos from 'aos';

function Body() {

 useEffect(() => {
    Aos.init({duration:1000})
 },[])

  return (
    <div className="body">
        <section id="about">
          <About />
        </section>
      <section id="skills" data-aos = "fade-up">
        <Skills />
      </section>
      <section id="experience" data-aos = "fade-up">
        <Experience />
      </section>
      <section id="projects" data-aos = "fade-up">
        <Projects />
      </section>
      <section id="contact" data-aos = "fade-up">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
