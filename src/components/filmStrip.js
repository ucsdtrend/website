import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import "../styles/FilmStrip.scss";
import "../styles/FeaturedIssueGallery.scss";

class FilmStrip extends React.Component {
  render() {
    const responsiveObject = {
      0: { items: 1 },
      500: { items: 2 },
      900: { items: 3, itemsFit: "contain" },
    };

    const handleDragStart = (e) => e.preventDefault();

    // Dynamically require images instead of importing them
    const images = [
      require("../static/film-strip/film-strip-1.jpg"),
      require("../static/film-strip/film-strip-2.jpg"),
      require("../static/film-strip/film-strip-3.jpg"),
      require("../static/film-strip/film-strip-4.jpg"),
      require("../static/film-strip/film-strip-5.jpg"),
      require("../static/film-strip/film-strip-6.jpg"),
      require("../static/film-strip/film-strip-7.jpg"),
      require("../static/film-strip/film-strip-8.jpg"),
      require("../static/film-strip/film-strip-9.jpg"),
      require("../static/film-strip/film-strip-10.jpg"),
    ];

    const filmStripImages = images.map((img, index) => (
      <div className="img-container" key={index}>
        <img className="film-strip-img" src={img} onDragStart={handleDragStart} alt={`Film Strip ${index + 1}`} />
      </div>
    ));

    return (
      <div className="gallery-container">
        <AliceCarousel
          items={filmStripImages}
          disableDotsControls
          disableButtonsControls
          mouseTrackingEnabled
          infinite={true}
          autoPlay={true}
          autoPlayInterval={1500}
          responsive={responsiveObject}
        />
      </div>
    );
  }
}

export default FilmStrip;
