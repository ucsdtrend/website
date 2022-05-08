import React from "react";
import { Container, Row, Col } from "react-grid-system";
import '../styles/WhoWeAre.scss';
import who_we_are from "../static/who_we_are.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

class WhoWeAre extends React.Component {
  render() {
    return(
      <div className="home-page" id="who-we-are-section">
        <div>
          <Container fluid>
            <Row>
              <Col md={7}>
                <Row>
                  <Col>
                    <h2>Who we are</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="who-we-are-description">TREND is a student-run fashion, art, and lifestyle magazine at UCSD. We release two issues in an academic year - Fall/Winter and Spring/Summer.</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="interest-form-description">Interested in joining our 2022-2023 team? Fill out our interest form here!</h4>
                  </Col>
                </Row>
              </Col>
                
              <Col>
                <div className="img-container">
                  <LazyLoadImage className="who-we-are-img" src={who_we_are} />
                </div>
              </Col>
              
            </Row>
            
          </Container>
        </div>
        
        
      </div>
    )
  }
}

export default WhoWeAre;