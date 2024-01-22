import React from "react";
import { Container, Row, Col } from "react-grid-system";
import '../styles/Footer.scss';
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    const facebook = "https://www.facebook.com/trenducsd/";
    const instagram = "https://www.instagram.com/trenducsd/";
    const medium = "https://medium.com/@trenducsd";

    return (
      <div className="footer-container" id="footer-section">
          <Container fluid>
            <Row justify="between">
              <Col className='footer-name-container'>
                <h5>© TREND at UC San Diego 2024</h5>
              </Col>
              <Col className='footer-logo-container'>
                  <div className="horizontal-links-container" id="navbar-socials">
                    <a href={instagram}>
                      <BsInstagram />
                    </a>
                    <a href={facebook}>
                      <BsFacebook />
                    </a>
                    <a href={medium}> 
                      <FaMedium />
                    </a>
                  </div>
              </Col>
            </Row>
            <Row justify="end" className='email-container'>
              <h5>trenducsd@gmail.com</h5>
            </Row>
          </Container>
      </div>
    )
  }
}

export default Footer;