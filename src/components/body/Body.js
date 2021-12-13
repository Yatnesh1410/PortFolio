import React from 'react';
import './Body.css';
import About from './About/about.js';
import Skills from './Skills/skills.js';
import Projects from './Projects/projects.js';
import Experience from './Experience/experience.js';
import Contact from './Contact/contact.js';

function Body() {
    return (
        <div className = "body">
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
