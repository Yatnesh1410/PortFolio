import React from 'react'
import './about.css';
import Picture from '../../../assets/yatnesh.jpeg';
import Typewriter from 'typewriter-effect';
import Button from '@mui/material/Button';

function about() {
    return (
        <div className = "about">
            <label className = "section-title">About Me</label>
            <div className = "about-top">
                <Typewriter
                    options={{
                        strings: ["AN UNDERGRAD", "A PROGRAMMER", "A WEB-DEVELOPER", "A SOFTWARE ENTHUSIAST"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className = "about-middle">
                <span>
                    <img src = {Picture} className = "about-photo" />
                </span>

                <span>
                    <p className = "about-info">
                        <span className= "name">YATNESH GYANI</span>
                        <br/>
                        UnderGraduate at Indian Institute of Technology (BHU) , Varanasi.
                        <br />
                        Skilled in C/C++, Data Structures and Algorithms.
                        <br />
                        Always eager to learn more about various technologies.
                        <br />
                        "Whatever the mind of man can conceive and believe, it can achieve." 
                        <br/>
                        - A thought that I believe in and it keeps me motivated to do better.
                    </p>
                </span>
            </div>

            <div className = "about-bottom">
                <Button variant="contained" className="button">My Resume</Button>
            </div>
        </div>
    )
}

export default about
