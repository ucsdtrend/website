import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import gallery1 from "../static/gallery/gallery-1.jpg";
import gallery2 from "../static/gallery/gallery-2.jpg";
import gallery3 from "../static/gallery/gallery-3.jpg";
import gallery4 from "../static/gallery/gallery-4.jpg";
import gallery5 from "../static/gallery/gallery-5.jpg";
import gallery6 from "../static/gallery/gallery-6.jpg";
import gallery7 from "../static/gallery/gallery-7.jpg";
import gallery8 from "../static/gallery/gallery-8.jpg";
import "../styles/Gallery.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Gallery extends React.Component {
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
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery6,
      gallery7,
      gallery8,
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