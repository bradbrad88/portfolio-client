import React from "react";
import { useHistory } from "react-router";
import "../../stylesheets/Portfolio.css";

const Card = ({
  title,
  description,
  url,
  urlText,
  image,
  lastModified,
  active,
  id,
}) => {
  const history = useHistory();
  const onCardClick = () => {
    window.open(url);
  };
  const onClick = e => {
    e.stopPropagation();
    history.push(`/portfolio/${id}`);
  };
  return (
    <div className="card portfolio" onClick={onCardClick}>
      <h2>{title}</h2>
      <div className="content">
        <div className="text">
          <p>{description}</p>
          <button onClick={onClick}>Read more</button>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
