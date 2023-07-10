import React from "react";
import { Container, Row, Col } from "react-grid-system";
import '../styles/WhoWeAre.scss';
import who_we_are from "../static/film-strip/film-strip-8.jpg";
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
                    <p className="who-we-are-description">TREND is a student-run fashion, art, and lifestyle magazine at UCSD. We release two issues in an academic year - Fall/Winter and Spring/Summer.</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="issues-description">Read our issues <a className="issues-link" href="https://issuu.com/trenducsd" target="_blank">here</a>!</p>
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