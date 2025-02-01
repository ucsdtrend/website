import React from "react";
import FeaturedIssue from "../components/featuredIssue";
import WhoWeAre from "../components/whoWeAre";
import HomepageVideo from "../components/homepageVideo.js";
import Blogs from "../components/blogs.js";
import Upcoming from "../components/upcomingEvents";
import YouTrend from "../components/youTrend.js";
import "../styles/Home.scss";

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home-container">
        {/* Background Elements */}
        <div className="background-main"></div>
        <div className="background-pattern"></div>
        <div className="background-icons">
          <div className="icon icon-1"></div>
          <div className="icon icon-2"></div>
          <div className="icon icon-3"></div>
          <div className="icon icon-4"></div>
        </div>

        {/* Page Sections */}
        <HomepageVideo />
        <FeaturedIssue />
        <Blogs />
        <WhoWeAre />
        <Upcoming />
        <YouTrend />
      </div>
    );
  }
}

export default Home;
