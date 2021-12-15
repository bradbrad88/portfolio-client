import React from "react";
import backgroundImage from "assets/bg.jpg";
import profileImage from "assets/profileImg.jpg";
import "stylesheets/ProfileHeader.css";

const ProfileHeader = () => {
  return (
    <div className={"profile-header"}>
      <div
        className={"profile-info"}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1>Brad Teague</h1>
        <div className={"profile-contact"}>
          <a href={"tel:+61431154056"}>0431 154 056</a>
          <a href={"mailto:b_rad88@live.com"}>brad.s.teague@gmail.com</a>
        </div>
      </div>
      <div className={"profile-image"}>
        <img src={profileImage} />
      </div>
    </div>
  );
};

export default ProfileHeader;
