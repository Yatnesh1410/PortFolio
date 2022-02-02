import React from "react";
import "./projects.css";
import { ProjectData } from "./ProjectData/ProjectData.js";
import ProjectCard from "./ProjectCard.js";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';

function projects() {
  const data = ProjectData;

  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <Grid container>
        {data.map((item) => {
          return (
          <Grid item sm={12} md={6}>
            <ProjectCard project={item} />
          </Grid>  
          );
        })}
      </Grid>
      <a
        href="https://github.com/Yatnesh1410"
        className="github-link"
        target="_blank"
      >
        <Button variant="contained" className="button">
          View More
        </Button>
      </a>
    </div>
  );
}

export default projects;
