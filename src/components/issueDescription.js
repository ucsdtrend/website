import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../styles/IssueDescription.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class IssueDescription extends React.Component {

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

  render () {
    const { windowWidth } = this.state; 

    return (
      <div className="issue-container">
        {windowWidth > 800 ? (
          <Container>
            <Row>
              <Col md={8}>
                <a href={this.props.link}>
                  <h3 className="issue-title" >{this.props.title}</h3> 
                </a>
                <h4>{this.props.description}</h4>
              </Col>
              <Col md={4}>
                <div className="issue-img-container" id="large-screen-container">
                  <LazyLoadImage className="issue-img" src={this.props.picture} alt={this.props.title} />
                </div>
              </Col>
            </Row>
          </Container>
        ):(
          <Container>
            <Row className="small-screen-row" align="center">
                <a href={this.props.link}>
                  <h3 className="issue-title" >{this.props.title}</h3> 
                </a>
                <h4>{this.props.description}</h4>
            </Row>
            <Row align="center">
                <div className="issue-img-container" id="small-screen-container">
                  <LazyLoadImage className="issue-img" id="small-screen" src={this.props.picture} alt={this.props.title} />
                </div>
            </Row>
          </Container>
        )}
      </div>

    )
  }
}

export default IssueDescription;