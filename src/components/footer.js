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
      <footer className="home-page" id="footer-section">
        <div>
          <Container fluid>
            <Row justify="between" debug>
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
            <Row justify="between" debug className='email-container'>
              <h4>trenducsd@gmail.com</h4>
            </Row>
          </Container>
        </div>
      </footer>
    )
    // return(
    //   <div className="home-page" id="who-we-are-section">
    //     <div>
    //       <Container fluid>
    //         <Row>
    //           <Col md={7}>
    //             <Row>
    //               <Col>
    //                 <h2>Who we are</h2>
    //               </Col>
    //             </Row>
    //             <Row>
    //               <Col>
    //                 <h4 className="who-we-are-description">TREND is a student-run fashion, art, and lifestyle magazine at UCSD. We release two issues in an academic year - Fall/Winter and Spring/Summer.</h4>
    //               </Col>
    //             </Row>
    //             <Row>
    //               <Col>
    //                 <h4 className="interest-form-description">Interested in joining our 2022-2023 team? Fill out our interest form <a className="interest-form-link" href="https://docs.google.com/forms/d/e/1FAIpQLSfGeGLoM6nZdLjKUUaBmA9U0NG9JU3B-DFYgGoC1NGgswt6-w/viewform" target="_blank">here</a>!</h4>
    //               </Col>
    //             </Row>
    //           </Col>
                
    //           <Col>
    //             <div className="img-container">
    //               <LazyLoadImage className="who-we-are-img" src={who_we_are} />
    //             </div>
    //           </Col>
              
    //         </Row>
            
    //       </Container>
    //     </div>
        
        
    //   </div>
    // )
  }
}

export default Footer;