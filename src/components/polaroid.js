import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import '../styles/polaroid.scss';

class Polaroid extends React.Component {
  render() {
    return(
      <div className="polaroid-container">
        <div className="polaroid-frame">
          <div className="image-frame">
            <LazyLoadImage className="polaroid-image" src={this.props.picture} alt={this.props.name} />
          </div>

          <div className="polaroid-info">
            <h4>
              {this.props.name}
            </h4>
            <p className="polaroid-position">
              {this.props.position}
            </p>
          </div>
        </div>
      </div>
      // <div className="members">
      //   <div className="member-wrapper">
      //     <div className="img-background"></div>
      //     <img className="memberImage" src={this.props.picture} alt={this.props.name} effect="blur"/>
      //   </div>
      //   <div className="teamImageBg"></div>
      //   <div className="teamInfo">
      //     <h3 className="teamName">
      //       <b> {this.props.name}</b>{" "}
      //     </h3>
      //     <h5 className="teamPosition"> {this.props.position} </h5>
      //   </div>
      // </div>
    )
  }
}

export default Polaroid;