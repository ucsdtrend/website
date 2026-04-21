import React from "react";
import StaticLanding from "./StaticLanding";
import HomepageVideoOriginal from "./homepageVideo.original";
//change value to false to revert back to original vid and home page from now on
//USE FOR FUTURE ISSUES AS WELL
const SHOW_SPECIAL_LANDING = false;

export default function HomepageVideo(props) {
  return SHOW_SPECIAL_LANDING ? <StaticLanding /> : <HomepageVideoOriginal {...props} />;
}
