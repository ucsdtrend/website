import React from "react";
import "../styles/WhoWeAre.scss";
import AllStaffPic from "../static/who-are-we-imgs/AllStaffPic.JPG";
import ExecPic from "../static/who-are-we-imgs/ExecPic.JPG";

const WhoWeAre = () => {
  return (
    <div className="who-we-are-container">
      <div className="content">
        <div className="image-large">
          <img src={AllStaffPic} alt="Large Image Placeholder" />
        </div>
        <div className="text-section">
          <h2 className="title">Who We Are</h2>
          <p className="description">
            TREND is a student-run fashion and lifestyle magazine at UCSD. As a vibrant collective of student artists, designers, writers, photographers, stylists, and marketing managers, we strive to capture the pulse of campus life and foster an inclusive community of creatives at UCSD. Each academic year, we release two issues—Fall/Winter and Spring/Summer—and organize a fashion show that showcases innovative pieces and compelling narratives, amplifying diverse voices. Explore our issues, meet our team, and discover TREND.
          </p>
        </div>
        <div className="image-small">
          <img src={ExecPic} alt="Small Image Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
