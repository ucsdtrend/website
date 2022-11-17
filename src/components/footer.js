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
        <div>
          <Container fluid>
            <Row justify="between">
              <Col>
                <h4>© TREND at University of California, San Diego 2022</h4>
              </Col>
              <Col className='logo-container'>
                <Row>
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
                </Row>
               
                  
              </Col>
            </Row>
            <Row justify="right" className='email-container'>
              <h4>trenducsd@gmail.com</h4>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Footer;