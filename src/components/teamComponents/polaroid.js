import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../styles/polaroid.scss";

const Polaroid = ({ picture, name, position, pronouns, major, minor, about, portfolio }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (typeof picture === "function") {
      picture().then((module) => setImageSrc(module.default));
    } else {
      setImageSrc(picture);
    }
  }, [picture]);

  return (
    <div
      className="polaroid-container"
    >
      <div className="polaroid-frame">
        <h6 className="polaroid-position">{position}</h6>

        <div className="image-frame">
          {imageSrc && (
            <LazyLoadImage
              className="polaroid-image"
              src={imageSrc}
              alt={name}
              effect="blur"
              width ={300}
              height ={400}
              decoding ="async"
              fetchPriority="low"
            />
          )}

          {/*  Hover Overlay
          Angelo Note: Hi I changed this a little bit just to improve loading pls dont hate me */}
          {(pronouns || major || minor || about || portfolio) && (
            <div className="polaroid-hover-overlay">
              
              {/*<h5>{name}</h5>*/}
              
              {pronouns && (
                <p className="hover-pronouns">
                  <span className="label">Pronouns:</span> {pronouns}
                </p>
              )}

              {major && (
                <p className="hover-major">
                  <span className="label">Major:</span> {major}
                </p>

              )}

              {minor && (
                <p className="hover-minor">
                  <span className="label">Minor:</span> {minor}
                </p>
              )}

              {about && (
                <p className="hover-about">{about}</p>
              )}

              {portfolio && (
                <p className="hover-about">Portfolio: {portfolio}</p>
              )}
            </div>
          )}
        </div>

        <div className="polaroid-info">
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Polaroid;



/*import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import '../../styles/polaroid.scss';

const Polaroid = ({picture, name, position}) => {

  const[imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if(typeof picture === "function") {
      picture().then((module) => setImageSrc(module.default));
    } else {
      setImageSrc(picture);
    }
  }, [picture]);

  return(
    <div className="polaroid-container">
      <div className="polaroid-frame">
          <h6 className="polaroid-position">
            {position}
          </h6>
        <div className="image-frame">
          {imageSrc && (
            <LazyLoadImage 
              className="polaroid-image" 
              src={imageSrc} 
              alt={name} 
              effect="blur" 
            />
          )}
        </div>
        <div className="polaroid-info">
          <h5>
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Polaroid;
*/