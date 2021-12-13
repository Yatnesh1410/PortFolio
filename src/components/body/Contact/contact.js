import React from 'react'
import './contact.css';
import {SocialData} from './ContactData/ContactData.js';

function contact() {
    const data = SocialData;

    return (
        <div className = "contact">
            {data.map((item) => {
                return(
                    <a href = {item.link}>
                        <div className = "contact-icon">
                            <img src = {item.icon}/>
                        </div>
                    </a>
                );
            })}
        </div>
    )
}

export default contact
