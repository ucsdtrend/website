import React from "react";
import { Container, Row, Col } from "react-grid-system";
import '../styles/FeaturedIssue.scss';
import FeaturedIssueGallery from "./featuredIssueGallery";

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

    return(
      <div className="featured-issue-container">
        <FeaturedIssueGallery />
        <Container className="title-container" fluid>
          {windowWidth > 800 ? (
            <Row align="end" justify="end" direction="row">
              <Col align="end" md={6}>
                <a class="issue-link" href="https://issuu.com/trenducsd/docs/revival_issue_fw22" target="_blank">
                  <h2 className="issue-title">revival</h2>
                  <p>FW22</p>
                </a>
              </Col>
            </Row>
          ):(
            <Row align="center" justify="center" direction="row">
              <Col align="center" md={6}>
                <a class="issue-link" href="https://issuu.com/trenducsd/docs/revival_issue_fw22" target="_blank">
                  <h2 className="issue-title">revival</h2>
                  <p>FW22</p>
                </a>
              </Col>
            </Row>
          )}
        </Container>
        
      </div>
    )
  }
}

export default FeaturedIssue;