import React, { useEffect } from "react";
import Aos from "aos";
import "./experience.css";
import { experienceData } from "./experienceData/experienceData";

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="experience" data-aos="flip-up">
      <label className="section-title">Experience</label>
      {experienceData.map((experience) => {
        return (
          <div className="experience-content" data-aos="flip-up">
      <div className="experience-top">
        <img src={experience.image} />
      </div>
      <div className="experience-middle">
        <p>
          <span className="keywords"> ROLE: </span>
          <span className="text">{experience.role}</span>
        </p>
        <p>
          <span className="keywords"> DURATION: </span>
          <span className="text">{experience.duration}</span>
        </p>
      </div>

      <div className="experience-bottom">
        <p>
          <span className="keywords"> EXPOSURE: </span>
          <span className="text">{experience.exposure}</span>
        </p>
        <p>
          <span className="keywords"> TECHNOLOGIES: </span>
          <span className="text">{experience.technologiesUsed}</span>
        </p>

        <p>
          <span className="keywords"> DESCRIPTION: </span>
          <span className="text">
            <ul>
              {experience.description.map((item) => {
                  return (
                      <li>{item}</li>
                  )
              })}
            </ul>
          </span>
        </p>
      </div>
    </div>

        );
      })}
    </div>
  );
}

export default Experience;
