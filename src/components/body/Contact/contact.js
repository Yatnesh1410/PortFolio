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
                    <a href = {item.link}>
                        <div className = "contact-icon">
                            <img src={item.image} alt=""/>
                        </div>
                    </a>
                );
            })}
        </div>
    )
}

export default Contact
