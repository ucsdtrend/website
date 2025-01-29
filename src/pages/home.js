import React from "react";
import FeaturedIssue from "../components/featuredIssue";
import WhoWeAre from "../components/whoWeAre";
import HomepageVideo from "../components/homepageVideo.js"
import Blogs from "../components/blogs.js"
import Upcoming from "../components/upcomingEvents"

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
        {/* <FeaturedIssue/> */}
        <HomepageVideo />
        <FeaturedIssue/>
        <Blogs/>
        <WhoWeAre/>
        <Upcoming/>
        {/* <FeaturedBlog/> */}
      </div>
    )
  }
}

export default Home;