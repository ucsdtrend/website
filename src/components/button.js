import React from "react";
import "../styles/Button.scss";

class Button extends React.Component {

  render() {
    return (
      <div className="button-container">
        <a href={this.props.link}>
          <button className="button-front">
            <h2>{this.props.text}</h2>
          </button>
          <div className="button-back">
            <h2 className="text">{this.props.text}</h2>
          </div>
        </a>
      </div>
    );
  }
}

export default Button;