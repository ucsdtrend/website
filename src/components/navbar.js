import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsInstagram, BsFacebook } from "react-icons/bs"
import { FaMedium } from "react-icons/fa"
import '../styles/Navbar.scss';

class Navbar extends React.Component {

  render() {
    const facebook = "https://www.facebook.com/trenducsd/";
    const instagram = "https://www.instagram.com/trenducsd/";
    const medium = "https://medium.com/@trenducsd";
    return (
      <div className='navbar-container'>
        <div className='content-container'>
          <div className='links-container' id="navbar-pages">
            <NavLink to="/issues">
              <h4><a href={"../pages/issues.js"}>ISSUES</a></h4>
            </NavLink>
            <NavLink to="/about">
              <h4><a href={"../pages/about.js"}>TEAM</a></h4>
            </NavLink>
          </div>
          
          <div className='img-container'>
            <NavLink to="/">
              <a href={"../pages/home.js"}>
                <h1>TREND</h1>
              </a>
            </NavLink>
          </div>
          
          

          <div className="links-container" id="navbar-socials">
            <a href={instagram}>
              <BsInstagram size={36}/>
            </a>
            <a href={facebook}>
              <BsFacebook size={36}/>
            </a>
            <a href={medium}> 
              <FaMedium size={36}/>
            </a>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Navbar;