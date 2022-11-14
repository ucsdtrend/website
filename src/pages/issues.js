import React from "react";
import { Container } from "react-grid-system";
import Gallery from "../components/issuesGallery";
import { issuesInfo } from "../components/issuesInfo";
import IssueDescription from "../components/issueDescription";
import "../styles/Issues.scss";
import Footer from "../components/footer";

class Issues extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render () {
    return (
      <div className="issues-page">
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
        <Footer />
      </div>
      
    )
  }
}

export default Issues;