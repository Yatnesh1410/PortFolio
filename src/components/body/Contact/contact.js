import React,{useEffect} from 'react'
import Aos from 'aos';
import './contact.css';
import {SocialData} from './ContactData/ContactData.js';

function Contact() {
    const data = SocialData;

    useEffect(() => {
        Aos.init({duration:1000})
    },[]);

    return (
        <div className = "contact">
            {data.map((item) => {
                return(
                    <a href = {item.link} data-aos="flip-up">
                        <div className = "contact-icon">
                            <img src = {item.icon}/>
                        </div>
                    </a>
                );
            })}
        </div>
    )
}

export default Contact
