import React,{useEffect} from 'react';
import './ProjectCard.css';
import Aos from 'aos';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectCard({project}) {
    useEffect(() => {
        Aos.init({duration:1000})
     },[])

    return (
        <div className = "project-card" data-aos="flip-up">
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
                    <a href = {project.link} className = "project-links" target='_blank'><Button size="small">Demo</Button></a>
                    <a href = {project.code} className = "project-links" target='_blank'><Button size="small">GitHub</Button></a>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProjectCard
