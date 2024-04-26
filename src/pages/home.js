import React from "react";
import FeaturedIssue from "../components/featuredIssue";
import WhoWeAre from "../components/whoWeAre";
import HomepageVideo from "../components/homepageVideo.js"

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
        {/* <FeaturedIssue/> */}
        <HomepageVideo/>
        <FeaturedIssue/>
        <WhoWeAre/>
        {/* <FeaturedBlog/> */}
      </div>
    )
  }
}

export default Home;