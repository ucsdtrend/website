import React from "react";
import FilmStrip from "../components/filmStrip";
import TeamGrid from "../components/teamGrid";
import "../styles/Team.scss";

class About extends React.Component {
  render () {
    return (
      <div className="team-page">
        <FilmStrip />
        <TeamGrid />
      </div>
    )
  }
}

export default About;