import React from "react";
import { Container } from "react-grid-system";
import Gallery from "../components/gallery";
import { issuesInfo } from "../components/issuesInfo";
import IssueDescription from "../components/issueDescription";
import "../styles/Issues.scss";

class Issues extends React.Component {
  render () {
    return (
      <div className="issues-page">
        {/* <Container className="issue-button-container">
          <Row justify="center">
            <Col>
              <Button 
                text="Read Our Issues" 
                link="https://issuu.com/trenducsd"
              />
            </Col>
          </Row>
        </Container> */}
        
        <Gallery />
        <Container>
            {issuesInfo.map((issue, idx) => {
              return (
                <React.Fragment key={issue.title}>
                  {/* <Row> */}
                      <IssueDescription
                        key={idx}
                        picture={issue.picture}
                        title={issue.title}
                        link={issue.link}
                        description={issue.description}
                      />
                  {/* </Row> */}
                </React.Fragment>
              );
            })}
        </Container>
      </div>
    )
  }
}

export default Issues;