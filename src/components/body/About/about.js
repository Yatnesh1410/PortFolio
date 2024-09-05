import React from "react";
import "./about.css";
import Picture from "../../../assets/yatnesh.jpeg";
import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";

function about() {
  return (
    <div className="about">
      <label className="section-title">About Me</label>
      <div className="about-top">
        <Typewriter
          options={{
            strings: [
              "A PROGRAMMER",
              "A WEB-DEVELOPER",
              "A SOFTWARE ENTHUSIAST",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="about-middle">
          <img src={Picture} className="about-photo" />
          <p className="about-info">
            <span className="name">YATNESH GYANI</span>
            <br/>
            <span>
              I am a software developer with over 2 years of experience in the industry.
              I graduated from IIT BHU in 2022 and have had the opportunity to work with prominent organizations such as Deutsche Bank and ClearTax.
              My experience spans across various projects and technologies, enabling me to develop a solid foundation in software development and problem-solving in fast-paced environments.
              I believe that with dedication and a passion for learning, there's no limit to what we can achieve.
            </span>
          </p>
      </div>

      <div className="about-bottom">
        <a
          href="https://drive.google.com/drive/folders/18ygWziZHAtuOyOitW4sKXbEcpJFu1azp?usp=sharing"
          target="_blank"
          className="resume-link"
        >
          <Button variant="contained" className="button">
            My Resume
          </Button>
        </a>
      </div>
    </div>
  );
}

export default about;
