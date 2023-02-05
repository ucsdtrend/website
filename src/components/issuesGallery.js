import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import tide1 from "../static/gallery/tide-1.jpg";
import tide2 from "../static/gallery/tide-2.jpg";
import tide3 from "../static/gallery/tide-3.jpg";
import tide4 from "../static/gallery/tide-4.jpg";
import tide5 from "../static/gallery/tide-5.jpg";
import tide6 from "../static/gallery/tide-6.jpg";
import tide7 from "../static/gallery/tide-7.jpg";
import tide8 from "../static/gallery/tide-8.jpg";
import tide9 from "../static/gallery/tide-9.jpg";
import tide10 from "../static/gallery/tide-10.jpg";
import tide11 from "../static/gallery/tide-11.jpg";
import tide12 from "../static/gallery/tide-12.jpg";
import tide13 from "../static/gallery/tide-13.jpg";
import tide14 from "../static/gallery/tide-14.jpg";
import tide15 from "../static/gallery/tide-15.jpg";
import tide16 from "../static/gallery/tide-16.jpg";
import tide17 from "../static/gallery/tide-17.jpg";
import "../styles/Gallery.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Gallery extends React.Component {
  render() {
    const responsiveObject = {
      0: { items: 1 },
      450: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 5 },
    };

    const handleDragStart = (e) => e.preventDefault();

    const images = [
      tide1,
      tide2,
      tide3,
      tide4,
      tide5,
      tide6,
      tide7,
      tide8,
      tide9,
      tide10,
      tide11,
      tide12,
      tide13,
      tide14,
      tide15,
      tide16,
      tide17,
    ];

    const galleryImages = images.map(img => <div className="img-container">
      <LazyLoadImage className="gallery-img" src={img} onDragStart={handleDragStart} alt={img}/>
    </div>)

    return (
      <div className="gallery-container">
        <AliceCarousel
          items={galleryImages}
          disableDotsControls
          mouseTracking={true}
          infinite={true}
          responsive={responsiveObject}
        />
      </div>
    );
  }
}

export default Gallery;