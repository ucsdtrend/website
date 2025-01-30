import React from "react";
import FeaturedIssue from "../components/featuredIssue";
import WhoWeAre from "../components/whoWeAre";
import WhoWeAreV2 from "../components/WhoWeAreV2";
import HomepageVideo from "../components/homepageVideo.js"
import Blogs from "../components/blogs.js"
import Footer from "../components/footer.js"
import YouTrend from "../components/youTrend.js"

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
        <Blogs/>
        <WhoWeAreV2/>
        <YouTrend/>
        <Footer/>
        {/* <FeaturedBlog/> */}
      </div>
    )
  }
}

export default Home;