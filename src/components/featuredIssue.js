import React from "react";
import { Container, Row, Col } from "react-grid-system";
import '../styles/FeaturedIssue.scss';
import FeaturedIssueGallery from "./featuredIssueGallery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import cover from "../static/issues/Diorama_Master.jpg";



class FeaturedIssue extends React.Component {
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

    return (
      <div className="featured-issue-container">
        {/* <FeaturedIssue/> */}

        <Container className="title-container" fluid>
          <Row>
            <Col>
                <p className="featured-issue-title">Dive into our issues</p>

              <button
                className="explore-button"
                onClick={() =>
                  (window.location.href = "/issues")
                }
              >
                More issues <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor" class="arrow-icon">
                                <path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z"/>
                            </svg>

              </button>
            </Col>
          </Row>

          {/* Main content (responsive layout for large and small screens) */}
          {windowWidth > 800 ? (
            <Row align="flex-end" justify="end">
              <p className="featured-issue-description">
                      REALM OF INTERSECTING NARRATIVES AND LIMINAL SPACES <br />
                      DIORAMA <br />
                      FALL / WINTER ISSUE <br />
                      VOL. 26
                    </p>
              <Col md={5}>
                  <div className="featured-issues-img-container">
                    <LazyLoadImage className="who-we-are-img" src={cover} />
                  </div>
              </Col>
            </Row>

          ) : (
            <Row align="center" justify="end">
              <Col md={5}>
                  <div className="featured-issues-img-container">
                    <LazyLoadImage className="who-we-are-img" src={cover} />
                  </div>
              </Col>
            </Row>

          )}
        </Container>


      </div>
    )
  }
}

export default FeaturedIssue;