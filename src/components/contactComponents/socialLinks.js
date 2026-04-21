// src/components/contactComponents/socialLinks.js
/*
import React from "react";
import { BsInstagram, BsFacebook, BsEnvelope } from "react-icons/bs";
import { SiSubstack } from "react-icons/si";
import contactPlaceholder2 from "../../static/contact-placeholders/contact-placeholder-1.png";
import '../../styles/Contact.scss';

class SocialLinks extends React.Component {
  render() {
    const facebook = "https://www.facebook.com/trenducsd/";
    const instagram = "https://www.instagram.com/trendatucsd/";
    const substack = "https://trendmagazine.substack.com/";
    const email = "mailto:trend@ucsd.edu";
    /*
    return (
      <div className="social-links-container">
        <div className="social-info">
          <h2>Our Platforms</h2>
          <p className="contact-caption">
            Reach out if you would like to learn more about us or if you would like to partner with us.
          </p>
          <div className="social-list">
            <a href={email} className="social-item">
              <div className="social-icon email-icon">
                <BsEnvelope />
              </div>
              <div className="social-text">
                <span className="social-platform">Email</span>
                <span className="social-handle">trend@ucsd.edu</span>
              </div>
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-item">
              <div className="social-icon instagram-icon">
                <BsInstagram />
              </div>
              <div className="social-text">
                <span className="social-platform">Instagram</span>
                <span className="social-handle">@trendatucsd</span>
              </div>
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="social-item">
              <div className="social-icon facebook-icon">
                <BsFacebook />
              </div>
              <div className="social-text">
                <span className="social-platform">Facebook</span>
                <span className="social-handle">/trenducsd</span>
              </div>
            </a>
            <a href={substack} target="_blank" rel="noopener noreferrer" className="social-item">
              <div className="social-icon substack-icon">
                <SiSubstack />
              </div>
              <div className="social-text">
                <span className="social-platform">Substack</span>
                <span className="social-handle">trendmagazine.substack.com</span>
              </div>
            </a>
          </div>
        </div>
        <div className="social-placeholders">
          <div className="placeholder-box">
            <img src={contactPlaceholder2} alt="Contact placeholder" />
          </div>
        </div>
      </div>
    ); *//*
    return (
      <div className="contact-hero">
        <img
          picture: () => import("../../static/team/exec.jpg")
          alt="Contact"
          className="hero-image"
        />

        <div className="overlay-text">
          CONTACT US CONTACT US CONTACT US
        </div>

        <div className="hero-content">
          <h2>Contact Us</h2>
          <p>
            Reach out if you would like to learn more about us or partner with us.
          </p>

          <div className="social-text">
            <span className="social-platform">Substack</span>
            <span className="social-handle">trendmagazine.substack.com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialLinks;
*/

// src/components/contactComponents/SocialLinks.js

import React from "react";
import { BsInstagram, BsFacebook, BsEnvelope } from "react-icons/bs";
import { SiSubstack } from "react-icons/si";
import heroImage from "../../static/team/exec.jpg";
import "../../styles/Contact.scss";

class SocialLinks extends React.Component {
  render() {
    const facebook = "https://www.facebook.com/trenducsd/";
    const instagram = "https://www.instagram.com/trendatucsd/";
    const substack = "https://trendmagazine.substack.com/";
    const email = "mailto:trend@ucsd.edu";

    return (
      <div className="contact-hero">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Contact"
          className="hero-image"
        />

        {/* Giant Overlay Text */}
        <div className="overlay-text">
          <div>CONTACT   US CONTACT US CONTACT US</div>
          <div>CONTACT   US CONTACT US CONTACT US</div>
          <div>CONTACT   US CONTACT US CONTACT US</div>

        </div>

        {/* Foreground Content */}
        <div className="hero-content">

          <div className="social-list">
            <a href={email} className="social-item">
              <BsEnvelope />
            </a>

            <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-item">
              <BsInstagram />
            </a>

            <a href={facebook} target="_blank" rel="noopener noreferrer" className="social-item">
              <BsFacebook />
            </a>

            <a href={substack} target="_blank" rel="noopener noreferrer" className="social-item">
              <SiSubstack />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialLinks;


