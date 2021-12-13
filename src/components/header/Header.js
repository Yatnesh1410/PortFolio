import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../../assets/logo.jpg';
import Web_Menu from './Web-Menu/Web_Menu.js';
import Mobile_Menu from './Mobile-Menu/Mobile_Menu.js';
import './Header.css';

function Header() {

  const [isOpen , setIsOpen] = useState(false);
  return (
    <div className="header">
      <AppBar position="fixed" className="app-bar">
        <Toolbar className="tool-bar">
          <div className="logo">
            <a href="/">
              <img src={Logo} className="logo-image" />
            </a>
          </div>
          <div className="menu">
            <div className="web-menu">
              <Web_Menu />
            </div>

            <div className="mobile-menu">
              <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon />
              </div>

              {isOpen && <Mobile_Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
