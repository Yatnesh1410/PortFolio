import React,{useEffect} from 'react';
import './SkillsCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Aos from 'aos';

function SkillsCard({group}) {
    useEffect(() => {
        Aos.init({duration:1000})
     },[])

    return (
        group.items.map((skill) => {
            return (
                <div className = "skills-card" data-aos="flip-up">
                    <Card sx={{ minWidth: 200 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                {skill.name}
                            </Typography>

                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {skill.skills.map((item) => {
                                    return(
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar src={item.image} />
                                            </ListItemAvatar>

                                            <ListItemText>
                                                <p className = "skill-name">{item.skill}</p>
                                            </ListItemText>
                                        </ListItem>   
                                    );
                                })}
                            </List>
                        </CardContent>
                    </Card>
                </div>
            );
        })
    )
}

export default SkillsCard
