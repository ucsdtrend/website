import React from "react";
import "../styles/IssueBlock.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class IssueBlock extends React.Component {

  render () {
    return (
      <div className="issue-container" >
        <a className="issue-image-container" href={this.props.link}>
          <LazyLoadImage className="issue-image" src={this.props.picture} alt={this.props.title} />
          <div className="issue-description-layer">
            <div className="issue-description"><h4>{this.props.description}</h4></div>
          </div>
        </a>
      </div>
    )
  }
}

export default IssueBlock;