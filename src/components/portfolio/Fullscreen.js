import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import PortfolioContext from "../../contexts/portfolioContext";

const Fullscreen = ({ portfolio }) => {
  const portfolioContext = useContext(PortfolioContext);
  const params = useParams();
  const history = useHistory();
  const portfolioItem = portfolioContext.find(
    item => item.id === parseInt(params.id)
  );
  const onClick = () => {
    history.push("/portfolio");
  };
  return (
    <div className="fullscreen-overlay" onClick={onClick}>
      <div className="fullscreen-container">
        <h2>{portfolioItem?.title}</h2>
        <div className="content">
          <div className="text">{portfolioItem.description}</div>
          <div
            className="image"
            style={{ backgroundImage: `url(${portfolioItem.image})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Fullscreen;
