import React from "react";
import FeaturedBlog from "../components/featuredBlog";
import FeaturedIssue from "../components/featuredIssue";
import WhoWeAre from "../components/whoWeAre";
import Footer from "../components/footer";

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
        <FeaturedIssue/>
        <WhoWeAre/>
        {/* <FeaturedBlog/> */}
        <Footer/>
      </div>
    )
  }
}

export default Home;