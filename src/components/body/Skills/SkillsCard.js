import React from 'react';
import './SkillsCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function SkillsCard({group}) {
    return (
        group.items.map((skill) => {
            return (
                <div className = "skills-card">
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
