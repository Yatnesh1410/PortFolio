import React from "react";
import "./experience.css";
import companyLogo from "../../../assets/dichroic.png";

function experience() {
  return (
    <div className="experience">
      <label className="section-title">Experience</label>
      <div className="experience-content">
        <div className="experience-top">
          <img src={companyLogo} />
        </div>
        <div className="experience-middle">
          <p>
            <span className="keywords"> DURATION: </span>
            <span className="text">May 2021 - July 2021</span>
          </p>
        </div>

        <div className="experience-bottom">
          <p>
            <span className="keywords"> EXPOSURE: </span>
            <span className="text">
              Frontend Development, API Integration , Database Design
            </span>
          </p>
          <p>
            <span className="keywords"> TECHNOLOGIES: </span>
            <span className="text">ReactJS, MongoDB, NodeJS, Material-UI</span>
          </p>

          <p>
            <span className="keywords"> DESCRIPTION: </span>
            <span className="text">
              <ul>
                <li>I was part of team working on development of E-commerce website of one of the company's online ventures.</li>
                <li>Developed ADMIN PANEL for adding, updating or deleting product's data available on company's main website.</li>
                <li>Used ReactJS for frontend designing and NodeJS for backend development.</li>
              </ul>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default experience;
