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
import "../styles/FeaturedIssueGallery.scss";

///////////////////
/// This is where the featured issue is shown
///////////////////

class FeaturedIssueGallery extends React.Component {
  render() {
    // this is where you change the spacing between photos
    // From my understanding it changes the spacing when 1,2,3,..
    // elements are shown
    // I'd like it to be absolute
    const responsiveObject = {
      0: { items: 1 },
      450: { items: 2 },
      1100: { items: 3 },
      //992: { items: 4 },
      //1200: { items: 5 },
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
      featured9
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