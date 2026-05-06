import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { SiSubstack } from "react-icons/si";
import heroImage from "../../static/team/exec.jpg";
import closedEnvelope from "../../static/contact-placeholders/closed envelope.png";
import openEnvelope from "../../static/contact-placeholders/open envelope.png";

import "../../styles/Contact.scss";

class SocialLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleEmailClick = () => {
    this.setState({ isOpen: true });

    setTimeout(() => {
      window.location.href =
        "https://mail.google.com/mail/?view=cm&fs=1&to=trend@ucsd.edu";
    }, 300);
  };

  render() {
    const facebook = "https://www.facebook.com/trenducsd/";
    const instagram = "https://www.instagram.com/trendatucsd/";
    const substack = "https://trendmagazine.substack.com/";

    return (
      <>
        {/* ================= HERO SECTION ================= */}
        <div className="contact-hero">
          <img src={heroImage} alt="Contact" className="hero-image" />

          <div className="overlay-text">
            <div>CONTACT US CONTACT US CONTACT US</div>
            <div>CONTACT US CONTACT US CONTACT US</div>
            <div>CONTACT US CONTACT US CONTACT US</div>
          </div>
        </div>

        {/* ================= SOCIAL SECTION (BELOW) ================= */}
        <div className="contact-social-section">
          <div className="social-list">
            
            {/* Email */}
            <div className="social-item">
              <img
                src={this.state.isOpen ? openEnvelope : closedEnvelope}
                alt="Email"
                className="envelope-icon"
                onClick={this.handleEmailClick}
              />
            </div>

            {/* Instagram */}
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <BsInstagram />
            </a>

            {/* Facebook */}
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <BsFacebook />
            </a>

            {/* Substack */}
            <a
              href={substack}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <SiSubstack />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default SocialLinks;