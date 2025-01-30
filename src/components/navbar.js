import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import { slide as Menu } from 'react-burger-menu';
import '../styles/Navbar.scss';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      windowWidth: window.innerWidth, 
      menuOpen: false,
      isScrolled: false};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const screenWidth = window.innerWidth;

    let scrollThreshold = 20;
    if (screenWidth <= 768) {
      scrollThreshold = 7; 
    }

    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage > scrollThreshold) {  //trigger y-value
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  } 

  handleStateChange = () => {
    this.setState({menuOpen: this.state.isOpen});
  };

  handleCloseMenu = () => {
    this.setState({menuOpen: false})
  };
  
  render() {

    const facebook = "https://www.facebook.com/trenducsd/";
    const instagram = "https://www.instagram.com/trenducsd/";
    const medium = "https://medium.com/@trenducsd";
    const { windowWidth } = this.state; 
    
    return (
      <div className={`navbar-container ${this.state.isScrolled ? 'scrolled' : ''}`}>
          {windowWidth > 800 ? (
            <div className='horizontal-content-container'>
              <div className='navbar-logo-container'>
                <NavLink to="/">
                  <a href={"../pages/home.js"}>
                    <h1>TREND</h1>
                    {/* <img src="src/static/trend_logo_2024.png" alt = "TREND"></img> */}
                  </a>
                </NavLink>
              </div>

              <div className='horizontal-links-container' id="navbar-pages">
                <NavLink to="/issues">
                  <p><a href={"../pages/issues.js"}>Issues</a></p>
                </NavLink>
                <p><a className="blog" href={medium}> Blog
                  </a></p>
                <NavLink to="/team">
                  <p><a href={"../pages/team.js"}>Team</a></p>
                </NavLink>
                <p><a className="contact" href={"mailto:trenducsd@gmail.com"}> Contact Us
                  </a></p>
              </div>
              
              {/* <div className='navbar-logo-container'>
                <NavLink to="/">
                  <a href={"../pages/home.js"}>
                    <h1>TREND</h1>
                  </a>
                </NavLink>
              </div> */}
              
              {/* <div className="horizontal-links-container" id="navbar-socials">
                <a href={instagram}>
                  <BsInstagram />
                </a>
                <a href={facebook}>
                  <BsFacebook />
                </a>
                <a href={medium}> 
                  <FaMedium />
                </a>
              </div> */}
            </div>
          ):(
            <div>
            <div className='vertical-content-container'>
              <div className='navbar-logo-container'>
                <NavLink to="/">
                  <a href={"../pages/home.js"}>
                    <h1>TREND</h1>
                  </a>
                </NavLink>
              </div>

            </div>
            <div className="side-panel">
              <Menu id='burger-menu' isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <NavLink to="/" onTouchEnd={() => this.handleCloseMenu()}>
                  <h4><a href={"../pages/home.js"}>HOME</a></h4>
                </NavLink>
                <NavLink to="/issues" onTouchEnd={() => this.handleCloseMenu()}>
                  <h4><a href={"../pages/issues.js"}>ISSUES</a></h4>
                </NavLink>
                <h4><a className="blog" href={medium}> BLOG
                  </a></h4>
                <NavLink to="/team" onTouchEnd={() => this.handleCloseMenu()}>
                  <h4><a href={"../pages/team.js"}>TEAM</a></h4>
                </NavLink>
                <h4><a className="contact" href={"mailto:trenducsd@gmail.com"}> CONTACT US
                </a></h4>
                
                <div className="vertical-links-container">
                  <a className="vertical-socials" href={instagram}>
                    <BsInstagram />
                  </a>
                  <a className="vertical-socials" href={facebook}>
                    <BsFacebook />
                  </a>
                  <a className="vertical-socials" href={medium}> 
                    <FaMedium />
                  </a>
                </div>
              </Menu>
            </div>
            </div>
          )}
      </div>
    )
  }
}

export default Navbar;