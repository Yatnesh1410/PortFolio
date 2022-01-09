import React from 'react'
import './Web_Menu.css';
import FeedIcon from '@mui/icons-material/Feed';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Web_Menu() {
    return (
        <div className = "web">
            <div className = "web-options">
                <a href="/#about-container"><FeedIcon className = "option-icon"/> About</a>
            </div>
            <div className = "web-options">
                <a href="/#skills-container"><LaptopMacIcon className = "option-icon" /> Skills</a>
            </div>
            <div className = "web-options">
                <a href="/#experience-container"><WorkIcon className = "option-icon" /> Experience</a>
            </div>
            <div className = "web-options">
                <a href="/#projects-container"><AccountTreeIcon className = "option-icon" /> Projects</a>    
            </div>
            <div className = "web-options">
                <a href="/#contact-container"><ContactPageIcon className = "option-icon" /> Contact</a>
            </div>
        </div>
    )
}

export default Web_Menu
