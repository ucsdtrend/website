import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import featured1 from "../static/featured-issue/featured_1.jpg";
import featured2 from "../static/featured-issue/featured_2.jpg";
import featured3 from "../static/featured-issue/featured_3.jpg";
import featured4 from "../static/featured-issue/featured_4.jpg";
import featured5 from "../static/featured-issue/featured_5.jpg";
import featured6 from "../static/featured-issue/featured_6.jpg";
import featured7 from "../static/featured-issue/featured_7.jpg";
import featured8 from "../static/featured-issue/featured_8.jpg";
import featured9 from "../static/featured-issue/featured_9.jpg";
import "../styles/Gallery.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

///////////////////
/// This is where the featured issue is shown
///////////////////

class Gallery extends React.Component {
  render() {
    const responsiveObject = {
      0: { items: 1 },
      450: { items: 2 },
      1200: { items: 3 },
    };

    const handleDragStart = (e) => e.preventDefault();
    
    const images = [
      featured1,
      featured2,
      featured3,
      featured4,
      featured5,
      featured6,
      featured7,
      featured8,
      featured9,
    ];
    // const galleryImages = ImageGallery(vault)
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
