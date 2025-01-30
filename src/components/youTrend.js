import React from "react";
import "../styles/youTrend.scss";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import img1 from "../static/youTrend-imgs/img-1.png";
import img2 from "../static/youTrend-imgs/img-2.png";
import img3 from "../static/youTrend-imgs/img-3.png";
import img4 from "../static/youTrend-imgs/img-4.png";
import img5 from "../static/youTrend-imgs/img-5.png";
import img6 from "../static/youTrend-imgs/img-6.png";
import img7 from "../static/youTrend-imgs/img-7.png";
import img8 from "../static/youTrend-imgs/img-8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

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
  {images.map((imgSrc, index) => (
    <div
      key={index}
      className={`grid-item ${index % 2 === 0 ? "gray-bg" : "white-bg"}`}
    >
      <img src={imgSrc} alt={`Grid Image ${index + 1}`} />
    </div>
  ))}
</div>
      </div>
    );
  }
}

export default YouTrend;
