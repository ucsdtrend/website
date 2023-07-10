import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import filmStrip1 from "../static/film-strip/film-strip-1.jpg";
import filmStrip2 from "../static/film-strip/film-strip-2.jpg";
import filmStrip3 from "../static/film-strip/film-strip-3.jpg";
import filmStrip4 from "../static/film-strip/film-strip-4.jpg";
import filmStrip5 from "../static/film-strip/film-strip-5.jpg";
import filmStrip6 from "../static/film-strip/film-strip-6.jpg";
import filmStrip7 from "../static/film-strip/film-strip-7.jpg";
import filmStrip8 from "../static/film-strip/film-strip-8.jpg";
import filmStrip9 from "../static/film-strip/film-strip-9.jpg";
import filmStrip10 from "../static/film-strip/film-strip-10.jpg";
import filmStrip11 from "../static/film-strip/film-strip-11.jpg";
import filmStrip12 from "../static/film-strip/film-strip-12.jpg";
import filmStrip13 from "../static/film-strip/film-strip-13.jpg";
import filmStripEdge from "../static/film-strip/film-strip-edge.jpg";
import "../styles/FilmStrip.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class FilmStrip extends React.Component {
  render() {
    const responsiveObject = {
      0: { items: 1 },
      450: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    };

    const handleDragStart = (e) => e.preventDefault();

    const images = [
      filmStrip1,
      filmStrip2,
      filmStrip3,
      filmStrip4,
      filmStrip5,
      filmStrip6,
      filmStrip7,
      filmStrip8,
      filmStrip9,
      filmStrip10,
      filmStrip11,
      filmStrip12,
      filmStrip13,
    ];

    const filmStripImages = images.map(img => <div className="img-container">
      <img className="film-strip-img" src={img} onDragStart={handleDragStart} alt={img}/>
    </div>)

    return (
      <div className="film-strip-container">
        <LazyLoadImage className="film-strip-edge" src={filmStripEdge} />
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
        <LazyLoadImage className="film-strip-edge" src={filmStripEdge} />
      </div>
    );
  }
}

export default FilmStrip;
