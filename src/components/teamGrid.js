import React from "react";
import { Container, Row, Col } from "react-grid-system";
import {teamInfo} from "./teamInfo"
import Polaroid from "./polaroid";
import PolaroidBio from "./polaroidBio";
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
            <h4>TREND Team</h4>
          </Row>
          <Row className="top-margin-subsection">
            <h3>2023 - 2024</h3>
          </Row>

          <div className="team">
            <Row className>
              {teamInfo.map((teamMember, idx) => {
                  return (
                    <React.Fragment key={teamMember.name}>
                      <Col xs={6} sm={6} md={3} l={4} key={idx}>
                        <div onClick={() => this.openModal(idx)}>
                          <Polaroid
                            picture={teamMember.picture}
                            name={teamMember.name}
                            position={teamMember.position}
                          />
                        </div>
                      </Col>
                      <PolaroidBio
                        // show={this.state.showModal === idx}
                        // onHide={() => {
                        //   this.hideModal(idx);
                        // }}
                        // index={idx}
                        // picture={teamMember.picture}
                        // name={teamMember.name}
                        // position={teamMember.position}
                        // bio={teamMember.bio}
                        // instagram={teamMember.instagram}
                        // facebook={teamMember.facebook}
                        // linkedin={teamMember.linkedin}
                        // spotify={teamMember.spotify}
                      />
                    </React.Fragment>
                  );
                })}
            </Row>

          </div>

        </Container>
      </div>
    )
  }
}

export default TeamGrid;