import React,{useEffect} from 'react';
import './skills.css';
import {SkillsData} from './SkillsData/SkillsData.js';
import SkillsCard from './SkillsCard.js';
import Aos from 'aos';
import Grid from '@mui/material/Grid';


function Skills() {
    const data = SkillsData;

    useEffect(() => {
        Aos.init({duration:1000})
     },[])

    return (
        <div className = "skills">
            <label className = "section-title">Skills</label>
            <Grid container>
            {data.map((group) => {
                return (
                    <Grid item xs = {12} md = {4}>
                        <SkillsCard group={group}/>
                    </ Grid>    
                );
            })}
            </Grid>
        </div>
    )
}

export default Skills
