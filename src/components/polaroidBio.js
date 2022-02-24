import React from "react";
import "../styles/PolaroidBio.scss";
// import { teamInfo } from "./teamInfo";
import { Container, Row, Col } from "react-grid-system";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
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
                      {this.props.linkedin &&
                        <a href={this.props.linkedin} target="_blank">
                          <FaLinkedin />
                        </a>
                      }
                    </div>
                    
                  </div>
              </div>

                  
            </div>
          </div>
          
        )}
        
      </div>
      // <>
      //   <div className="lightest-background-section">
      //     {this.props.show && (
      //       <div
      //         className="member-popup"
      //         ref={this.memberRef}
      //         onLoad={this.positionMember}
      //       >
      //         <button className="exitButton" onClick={this.props.onHide}>
      //           {" "}
      //           X{" "}
      //         </button>
      //         <Row justify="center" type="flex">
      //           <Col xs={10} md={4}>
      //             <LazyLoadImage src={all_members[index].picture} alt={all_members[index].name} effect="blur"/>
      //           </Col>
      //           <Col xs={10} className="member-popup-info" md={6}>
      //             <div>
      //               <h2>{all_members[index].name}</h2>
      //               <h3>{all_members[index].position}</h3>
      //               <p>{all_members[index].year}</p>
      //               <p>{all_members[index].bio}</p>
      //             </div>
      //           </Col>
      //         </Row>
      //         <Row>
      //           <Col className="member-popup-socials">
      //           { all_members[index].github && 
      //             <a href={all_members[index].github} target="_blank">
      //               <FaGithub />
      //             </a>
      //           }
      //           { all_members[index].linkedin && 
      //             <a href={all_members[index].linkedin} target="_blank">
      //               <FaLinkedinIn />
      //             </a>
      //           }
      //           {all_members[index].instagram && 
      //             <a href={all_members[index].instagram} target="_blank">
      //               <FaInstagram />
      //             </a>
      //           }
      //           </Col>
      //         </Row>
      //       </div>
      //     )}
      //   </div>
      // </>
    );
  }
}

export default PolaroidBio;