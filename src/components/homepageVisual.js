import React from "react";
import { Container, Row, Col } from "react-grid-system";
import '../styles/FeaturedIssue.scss';
import FeaturedIssueGallery from "./featuredIssueGallery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import who_we_are from "../static/issues/metamorphosis.png";



class FeaturedOnHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  } 

  render() {
    const { windowWidth } = this.state; 

    return(
      <div className="featured-issue-container">
        <FeaturedIssue/>
        <Container className="title-container" fluid>
          {windowWidth > 800 ? (
            <Row align="center" justify="space between" direction="beginning">
              
              <Col>
              <a class="issue-link" href="https://issuu.com/trenducsd/docs/trend_fw23-24_1_" target="_blank">
                <div className="img-container">
                <LazyLoadImage className="who-we-are-img" src={who_we_are} />
                </div>
              </a>
          </Col>
          <Col align="center" md={6} >
                <a class="issue-link" href="https://issuu.com/trenducsd/docs/trend_fw23-24_1_" target="_blank">
                  <h2 className="issue-title">METAMORPHOSIS</h2>
                  <h7>Fall 2023</h7>
                  
                  </a>
              </Col>
            </Row>
            
          ):(
            <Row align="center" justify="end" direction="row">

              <Col>
              <a class="issue-link" href="https://issuu.com/trenducsd/docs/trend_fw23-24_1_" target="_blank">
                  <div className="img-container">
                  <LazyLoadImage className="who-we-are-img" src={who_we_are} />
                  </div>
              </a>
          </Col>
          <Col align="center" md={5}>
                <a class="issue-link" href="https://issuu.com/trenducsd/docs/trend_fw23-24_1_" target="_blank">
                  <h2 className="issue-title">Out of Bounds</h2>
                  <h7>Spring/Summer 2024</h7>
                
                </a>
              </Col>
            </Row>
          )}
        </Container>
        
      </div>
    )
  }
}

export default FeaturedOnHome;