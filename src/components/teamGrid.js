import React from "react";
import { Container, Row, Col } from "react-grid-system";
import {teamInfo} from "./teamInfo"
import Polaroid from "./polaroid";
import "../styles/TeamGrid.scss";

class TeamGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: -1
    };
  }

  openModal = value => {
    this.setState({
      showModal: value
    });
  };

  hideModal = value => {
    this.setState({
      showModal: -1
    });
  };

  render () {
    return (
      <div className="team-grid-section">
        <Container className="team-grid-container">
          <Row className="top-margin-section">
            <h2>TREND Team</h2>
          </Row>
          <Row className="top-margin-subsection">
            <h3>2024 - 2025</h3>
          </Row>
            <div className="team">
              <Row className="top-margin-section">
                <h4>Editors in Chief</h4>
              </Row>
              <Row className>
                {teamInfo.map((teamMember, idx) => {
                      if (teamMember.position === 'Editor in Chief') {
                        return (
                          <React.Fragment key={teamMember.name}>
                            <Col xs={6} sm={6} md={3} l={4} key={idx}>
                              <div onClick={() => this.openModal(idx)}>
                                <Polaroid
                                  picture={teamMember.picture}
                                  name={teamMember.name}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      }
                  })}
              </Row>

              <Row className="top-margin-section">
                <h4>Photography</h4>
              </Row>
              <Row className>
                {teamInfo.map((teamMember, idx) => {
                      if (teamMember.position === 'Photographer') {
                        return (
                          <React.Fragment key={teamMember.name}>
                            <Col xs={6} sm={6} md={3} l={4} key={idx}>
                              <div onClick={() => this.openModal(idx)}>
                                <Polaroid
                                  picture={teamMember.picture}
                                  name={teamMember.name}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      }
                  })}
              </Row>

              <Row className="top-margin-section">
                <h4>Writing</h4>
              </Row>
              <Row className>
                {teamInfo.map((teamMember, idx) => {
                      if (teamMember.position === 'Writer') {
                        return (
                          <React.Fragment key={teamMember.name}>
                            <Col xs={6} sm={6} md={3} l={4} key={idx}>
                              <div onClick={() => this.openModal(idx)}>
                                <Polaroid
                                  picture={teamMember.picture}
                                  name={teamMember.name}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      }
                  })}
              </Row>

              <Row className="top-margin-section">
                <h4>Graphic Design</h4>
              </Row>
              <Row className>
                {teamInfo.map((teamMember, idx) => {
                      if (teamMember.position === 'Graphic Designer') {
                        return (
                          <React.Fragment key={teamMember.name}>
                            <Col xs={6} sm={6} md={3} l={4} key={idx}>
                              <div onClick={() => this.openModal(idx)}>
                                <Polaroid
                                  picture={teamMember.picture}
                                  name={teamMember.name}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      }
                  })}
              </Row>

              <Row className="top-margin-section">
                <h4>External</h4>
              </Row>
              <Row className>
                {teamInfo.map((teamMember, idx) => {
                      if (teamMember.position === 'External') {
                        return (
                          <React.Fragment key={teamMember.name}>
                            <Col xs={6} sm={6} md={3} l={4} key={idx}>
                              <div onClick={() => this.openModal(idx)}>
                                <Polaroid
                                  picture={teamMember.picture}
                                  name={teamMember.name}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      }
                  })}
              </Row>

              <Row className="top-margin-section">
                <h4>Marketing</h4>
              </Row>
              <Row className>
                {teamInfo.map((teamMember, idx) => {
                      if (teamMember.position === 'Marketing') {
                        return (
                          <React.Fragment key={teamMember.name}>
                            <Col xs={6} sm={6} md={3} l={4} key={idx}>
                              <div onClick={() => this.openModal(idx)}>
                                <Polaroid
                                  picture={teamMember.picture}
                                  name={teamMember.name}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      }
                  })}
              </Row>

              <Row className="top-margin-section">
                <h4>Styling</h4>
              </Row>
              <Row className>
                {teamInfo.map((teamMember, idx) => {
                      if (teamMember.position === 'Stylist') {
                        return (
                          <React.Fragment key={teamMember.name}>
                            <Col xs={6} sm={6} md={3} l={4} key={idx}>
                              <div onClick={() => this.openModal(idx)}>
                                <Polaroid
                                  picture={teamMember.picture}
                                  name={teamMember.name}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      }
                  })}
              </Row>
              
              <Row className="top-margin-section">
                <h4>Web Development</h4>
              </Row>
              <Row className>
                {teamInfo.map((teamMember, idx) => {
                      if (teamMember.position === 'Web Developer') {
                        return (
                          <React.Fragment key={teamMember.name}>
                            <Col xs={6} sm={6} md={3} l={4} key={idx}>
                              <div onClick={() => this.openModal(idx)}>
                                <Polaroid
                                  picture={teamMember.picture}
                                  name={teamMember.name}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      }
                  })}
              </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default TeamGrid;