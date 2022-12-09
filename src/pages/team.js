import React from "react";
import FilmStrip from "../components/filmStrip";
import TeamGrid from "../components/teamGrid";
import "../styles/Team.scss";

class Team extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render () {
    return (
      <div className="team-page">
        <FilmStrip />
        <TeamGrid />
      </div>
    )
  }
}

export default Team;