import React from 'react';
import './skills.css';
import {SkillsData} from './SkillsData/SkillsData.js';
import SkillsCard from './SkillsCard.js';

import Grid from '@mui/material/Grid';


function skills() {
    const data = SkillsData;

    return (
        <div className = "skills">
            <label className = "section-title">Skills</label>
            <Grid container>
            {data.map((group) => {
                return (
                    <Grid item xs = {12} md = {4}>
                        <SkillsCard group={group} />
                    </ Grid>    
                );
            })}
            </Grid>
        </div>
    )
}

export default skills
