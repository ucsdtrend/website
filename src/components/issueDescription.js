import React from "react";
import { Row, Col } from "react-grid-system";
import "../styles/IssueDescription.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class IssueDescription extends React.Component {

  render () {
    return (
      <div className="issue-container">
        <Row>
          <Col md={8}>
            <a href={this.props.link}>
              <h3 className="issue-title" >{this.props.title}</h3> 
            </a>
            <h4>{this.props.description}</h4>
          </Col>
          <Col md={4}>
            <div className="issue-image-container">
              <LazyLoadImage className="issue-image" src={this.props.picture} alt={this.props.title} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default IssueDescription;