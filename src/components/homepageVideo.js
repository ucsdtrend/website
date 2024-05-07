import React from 'react'
import video from '../static/fefty.mp4'

class HomepageVideo extends React.Component {

  render() {

    return (
      <div className="Video">
        <video width="100%" autoPlay muted loop>
        <source src={video} type="video/mp4"/>
        </video>
      </div>
    );
  }   
}

export default HomepageVideo;