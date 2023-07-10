import React from "react";
import "../styles/PolaroidBio.scss";
import { FaLinkedin, FaInstagram, FaFacebook, FaSpotify } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class PolaroidBio extends React.Component {
  constructor(props) {
    super(props);
    this.memberRef = React.createRef();
  }

  componentDidMount() {
    // this.positionMember();
  }

  positionMember() {
    // if (this.memberRef) {
    //   console.log(this.memberRef.current);
    // }
  }

  render() {
    const index = this.props.index;
    return (
      <div className="bio-container">
        {this.props.show && (
          <div className="background-tint">
            <div className="bio-outer-frame">
              <div className="bio-content">
                  <div className="bio-inner-frame" justify="center">
                      <h3>{this.props.name}</h3>
                      <LazyLoadImage className="bio-image" src={this.props.picture} alt={this.props.name} />
                      <p>{this.props.bio}</p>
                  </div>
                  <div className="bio-side" md={2}>
                    <button className="close-modal" onClick={this.props.onHide}>
                      <p>x</p>
                    </button>
                    <div className="bio-socials">
                      {this.props.instagram && 
                        <a href={this.props.instagram} target="_blank">
                          <FaInstagram />
                        </a>
                      }
                      {this.props.facebook && 
                        <a href={this.props.facebook} target="_blank">
                          <FaFacebook />
                        </a>
                      }
                      {this.props.linkedin &&
                        <a href={this.props.linkedin} target="_blank">
                          <FaLinkedin />
                        </a>
                      }
                      {this.props.spotify &&
                        <a href={this.props.spotify} target="_blank">
                          <FaSpotify />
                        </a>
                      }
                    </div>
                    
                  </div>
              </div>

                  
            </div>
          </div>
          
        )}
        
      </div>
    );
  }
}

export default PolaroidBio;