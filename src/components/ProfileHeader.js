import React, { useState, useEffect } from "react";
import backgroundImage from "assets/bg.jpg";
import profileImage from "assets/profileImg.png";
import grumpyCat from "assets/grumpycat.jpg";
import "stylesheets/ProfileHeader.scss";

const ProfileHeader = () => {
  useEffect(() => {
    const image = new Image(50, 50);
    image.src = grumpyCat;
    image.style.width = "50px";
    image.onload = () => (window["grumpycat"] = image);
  }, []);
  const onDragStart = e => {
    e.dataTransfer.setDragImage(window["grumpycat"], 137, 100);
  };
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
        <img onDragStart={onDragStart} src={profileImage} />
      </div>
    </div>
  );
};

export default ProfileHeader;
