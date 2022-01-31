import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "stylesheets/Portfolio.scss";

const Card = ({
  title,
  description,
  url,
  urlText,
  image,
  lastModified,
  active,
  repos,
  id,
  site,
}) => {
  const renderRepos = () => {
    if (!repos) return;
    return repos.map(repo => (
      <a href={repo.url} key={repos.id} target="_blank">
        <img
          src={repo.img}
          style={{
            maxHeight: "25px",
            maxWidth: "25px",
            display: "inline-block",
            verticalAlign: "text-bottom",
          }}
        />{" "}
        {repo.text}
      </a>
    ));
  };
  return (
    <div className="card">
      <div className="left">
        <Link to={`/portfolio/${url}`}>
          <h3>{title}</h3>
        </Link>
        <div className="text">
          <p>{description}</p>
          {/* <br /> */}
        </div>
      </div>
      <div className="right">
        {/* <div
          className="image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div> */}
        <img src={image} alt="" />
        {site && <a href={site.url}>{site.text}</a>}
        {/* <h4>Repos:</h4> */}
        {renderRepos()}
      </div>
    </div>
  );
};

export default Card;
