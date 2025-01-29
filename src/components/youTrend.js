import React from "react";
import "../styles/youTrend.scss";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";

class YouTrend extends React.Component {
  render() {
    const facebook = "https://www.facebook.com/trenducsd/";
    const instagram = "https://www.instagram.com/trenducsd/";
    const medium = "https://medium.com/@trenducsd";

    return (
      <div className="youTrend-container">
        {/* Header section */}
        <div className="header">
          <div className="text-content">
            <h2 className="title">You + <span className="bold">TREND</span></h2>
            <p className="subtext">Keep up with us on our socials!</p>
            <div className="social-icons">
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
              <a href={medium} target="_blank" rel="noopener noreferrer"> 
                <FaMedium />
              </a>
            </div>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="image-grid">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className={`grid-item ${index % 2 === 0 ? "gray-bg" : "white-bg"}`}
            >
              <img
                src={`image-${index + 1}.jpg`} // Replace with actual image paths
                alt={`Grid Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default YouTrend;
