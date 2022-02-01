import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "stylesheets/Portfolio.scss";
import { clickIcon, touchIcon } from "assets/svgIcons";

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
  const isDesktop = useMediaQuery({ query: "(min-width: 650px)" });
  console.log("is desktop?", isDesktop);
  const renderRepos = () => {
    if (!repos) return;
    return repos.map(repo => (
      <a href={repo.url} key={repo.id} target="_blank">
        {repo.img && (
          <img
            src={repo.img}
            style={{
              maxHeight: "25px",
              maxWidth: "25px",
              display: "inline-block",
              verticalAlign: "text-bottom",
            }}
          />
        )}
        {repo.text}
      </a>
    ));
  };
  return (
    <div className="card">
      <div className="card-section one">
        <Link to={`/portfolio/${url}`} className="title cell">
          <h3>
            {title}
            <span className="icon-span">
              &nbsp;<span className="icon-span-object">{touchIcon(24)}</span>
            </span>
          </h3>
        </Link>
        <div className="description cell">
          <p>{description}</p>
        </div>
      </div>
      <div className="card-section two">
        <img className="image cell" src={image} alt="" />
        <div className="links cell">
          {site && <a href={site.url}>{site.text}</a>}
          {renderRepos()}
        </div>
      </div>
    </div>
  );
};

export default Card;
