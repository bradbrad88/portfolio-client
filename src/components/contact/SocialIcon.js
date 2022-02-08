import React from "react";

const SocialIcon = ({ icon, url, altText }) => {
  return (
    <div className="social icon">
      <a href={url} target={"_blank"}>
        <img src={icon} altText={altText} />
      </a>
    </div>
  );
};

export default SocialIcon;
