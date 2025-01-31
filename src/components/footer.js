import React from "react";
import { Container, Row, Col } from "react-grid-system";
import '../styles/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container" id="footer-section">
          <Container fluid>
            <Row justify="between">
              <Col className='footer-name-container'>
                <h5>© TREND at UC San Diego 2025</h5>
              </Col>
              <h1>TREND</h1>
            </Row>
            <Row justify="end" className='email-container'>
              <h5>trend@ucsd.edu</h5>
            </Row>
          </Container>
      </div>
    )
  }
}

export default Footer;