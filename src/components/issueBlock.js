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
            <h4 className="issue-description">{this.props.description}</h4>
          </div>
        </a>
      </div>
    )
  }
}

export default IssueBlock;