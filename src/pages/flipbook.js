import React from "react";
import { useCallback, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import {PageFlip} from 'page-flip';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Team.scss";

class Flipbook extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    
    render () {
        return (
            <div width={100} height={100}>
                <LazyLoadImage width={350} height={500} className="page1" src={require("../static/fb/page1.jpg")} alt={"Page 1"} />
            </div>
        )
    }
  }
  
  
  export default Flipbook;