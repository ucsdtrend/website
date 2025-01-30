import React from "react";
import { Container, Row, Col } from "react-grid-system";
import '../styles/WhoWeAreV2.scss';
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
                    <p className="who-we-are-description">TREND is a student-run fashion and lifestyle magazine at UCSD. As a vibrant collective of student artists, designers, writers, photographers, stylists, and marketing managers, we strive to capture the pulse of campus life and foster an inclusive community of creatives at UCSD. Each academic year, we release two issues—Fall/Winter and Spring/Summer—and organize a fashion show that showcases innovative pieces and compelling narratives, amplifying diverse voices. Explore our issues, meet our team, and discover TREND.</p>
                  </Col>
                </Row>
                <Row>
                  
                    <p className="issues-description">Read our issues <a className="issues-link" href="https://issuu.com/trenducsd" target="_blank">here</a>.</p>
                  
                </Row>
              </Col>
                
              <Col align="center" justify="space between" direction="beginning"l>
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