import React from 'react';
import './projects.css';
import {ProjectData} from './ProjectData/ProjectData.js';
import ProjectCard from './ProjectCard.js';
import Button from '@mui/material/Button';
function projects() {
    const data = ProjectData;

    return (
        <div className = "projects">
            <label className = "section-title">Projects</label>

            {data.map((item) => {
                return (
                    <ProjectCard project={item} />
                );
            })}

            <a href = "https://github.com/Yatnesh1410" className = "github-link"><Button variant="contained" className="button">View More</Button></a>
        </div>
    )
}

export default projects
