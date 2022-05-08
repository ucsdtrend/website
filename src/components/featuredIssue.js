import React from "react";
import { Container, Row, Col } from "react-grid-system";
import '../styles/FeaturedIssue.scss';
import FeaturedIssueGallery from "./featuredIssueGallery";

class FeaturedIssue extends React.Component {
  render() {
    return(
      <div className="featured-issue-container">
        <FeaturedIssueGallery />
        <Container className="title-container">
          <Row >
            <Col md={3} offset={{ md: 10}} >
              <a href="https://issuu.com/trenducsd/docs/revival_issue_fw22" target="_blank">
                <h2 className="issue-title">revival</h2>
                <p className="issue-date">FW22</p>
              </a>
              
            </Col>
          </Row>
        </Container>
        
      </div>
    )
  }
}

export default FeaturedIssue;