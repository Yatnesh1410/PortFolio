import React from 'react';
import './Mobile_Menu.css';
import CancelIcon from '@mui/icons-material/Cancel';
import FeedIcon from '@mui/icons-material/Feed';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Mobile_Menu({ isOpen, setIsOpen } ) {
    return (
        <div className = "mobile">
            <div onClick = {() => setIsOpen(!isOpen)} className = "close-icon" >
                <CancelIcon />
            </div>

            <div className = "mobile-options">
                <div className = "mobile-option" onClick = {() => setIsOpen(!isOpen)}>
                    <a href="#about-container"><FeedIcon className = "option-icon"/> About</a>
                </div>
                <div className = "mobile-option" onClick = {() => setIsOpen(!isOpen)}>
                    <a href="#skills-container"><LaptopMacIcon className = "option-icon" /> Skills</a>
                </div>
                <div className = "mobile-option" onClick = {() => setIsOpen(!isOpen)}>
                    <a href="#experience-container"><WorkIcon className = "option-icon" /> Experience</a>
                </div>
                <div className = "mobile-option" onClick = {() => setIsOpen(!isOpen)}>
                    <a href="#projects-container"><AccountTreeIcon className = "option-icon" /> Projects</a>    
                </div>
                <div className = "mobile-option" onClick = {() => setIsOpen(!isOpen)}>
                    <a href="#contact-container"><ContactPageIcon className = "option-icon" /> Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Mobile_Menu
