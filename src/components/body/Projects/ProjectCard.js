import React from 'react';
import './ProjectCard.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectCard({project}) {
    return (
        <div className = "project-card">
            <Card sx={{ maxWidth: 750}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={project.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.details}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                        Exposure:
                    </Typography>
                    {project.tags.map((item) => {
                        return(
                            <Button size="small" className = "tech-used">{item}</Button>
                        );
                    })} 
                </CardContent>
                <CardActions>
                    <a href = {project.link} className = "project-links"><Button size="small">Demo</Button></a>
                    <a href = {project.code} className = "project-links"><Button size="small">GitHub</Button></a>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProjectCard
