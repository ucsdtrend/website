// src/pages/contact.js

import React from "react";
import { Helmet } from "react-helmet";
import SocialLinks from "../components/contactComponents/socialLinks";

class Contact extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Contact | TREND at UCSD</title>
          <link rel="canonical" href="https://www.trendatucsd.com/contact" />
        </Helmet>

        <div className="contact-page">
          <SocialLinks />
        </div>
      </>
    );
  }
}
export default Contact;
