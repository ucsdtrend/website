import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
// import filmStrip1 from "../film-strip/film-strip-1.JPG";
// import filmStrip2 from "../film-strip/film-strip-2.JPG";
// import filmStrip3 from "../film-strip/film-strip-3.jpg";
// import filmStrip4 from "../film-strip/film-strip-4.JPG";
// import filmStrip5 from "../film-strip/film-strip-5.JPG";
// import filmStrip6 from "../film-strip/film-strip-6.JPG";
// import filmStrip7 from "../film-strip/film-strip-7.JPG";
// import filmStrip8 from "../film-strip/film-strip-8.JPG";
// import filmStrip9 from "../film-strip/film-strip-9.JPG";
// import filmStrip10 from "../film-strip/film-strip-10.JPG";

import "../styles/FilmStrip.scss";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/FeaturedIssueGallery.scss";



// This is where you change the width between images
class FilmStrip extends React.Component {
  render() {
    const responsiveObject = {
      0: { items: 1 },
      500: { items: 2 },
      900: { items: 3, itemsFit: "contain"},
    };

    const handleDragStart = (e) => e.preventDefault();

    const images = [
      "/film-strip/film-strip-1.JPG",
      "/film-strip/film-strip-2.JPG",
      "/film-strip/film-strip-3.jpg",
      "/film-strip/film-strip-4.JPG",
      "/film-strip/film-strip-5.JPG",
      "/film-strip/film-strip-6.JPG",
      "/film-strip/film-strip-7.JPG",
      "/film-strip/film-strip-8.JPG",
      "/film-strip/film-strip-9.JPG",
      "/film-strip/film-strip-10.JPG",
    ];

    const filmStripImages = images.map(img => <div className="img-container">
      <img className="film-strip-img" src={img} onDragStart={handleDragStart} alt={img}/>
    </div>)

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
