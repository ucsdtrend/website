import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import featured1 from "../static/featured-issue/vault-1.jpg";
import featured2 from "../static/featured-issue/vault-2.jpg";
import featured3 from "../static/featured-issue/vault-3.jpg";
import featured4 from "../static/featured-issue/vault-4.jpg";
import featured5 from "../static/featured-issue/vault-5.jpg";
import featured6 from "../static/featured-issue/vault-6.jpg";
import featured7 from "../static/featured-issue/vault-7.jpg";
import featured8 from "../static/featured-issue/vault-8.jpg";
import featured9 from "../static/featured-issue/vault-9.png";
import featured10 from "../static/featured-issue/vault-10.jpg";
import featured11 from "../static/featured-issue/vault-11.jpg";
import featured12 from "../static/featured-issue/vault-12.jpg";
import "../styles/FeaturedIssueGallery.scss";

class FeaturedIssueGallery extends React.Component {
  render() {
    const responsiveObject = {
      0: { items: 1 },
      450: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 },
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
      featured10,
      featured11,
      featured12,
    ];

    const featuredIssueImages = images.map(img => <div className="img-container">
      <img className="img" src={img} onDragStart={handleDragStart} alt={img}/>
    </div>)

    return (
      <div className="gallery-container">
        <AliceCarousel
          items={featuredIssueImages}
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

export default FeaturedIssueGallery;