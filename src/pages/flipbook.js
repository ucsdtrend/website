import React from "react";
import HTMLFlipBook from 'react-pageflip';
import "../styles/Team.scss";

class Flipbook extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    
    render () {
        return (
            <div>
                <HTMLFlipBook width={300} height={500}>
                    <img src={require("../static/fb/page1.jpg")}></img>
                    <img src={require("../static/fb/page2.jpg")}></img>
                    <img src={require("../static/fb/page3.jpg")}></img>
                    <img src={require("../static/fb/page4.jpg")}></img>
                </HTMLFlipBook>
            </div>
        )
    }
  }
  
  
  export default Flipbook;