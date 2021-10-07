import React, { useContext } from "react";
import Card from "./Card";
import PortfolioContext from "../../contexts/portfolioContext";

const Portfolio = () => {
  const portfolioContext = useContext(PortfolioContext);
  const renderPortfolio = portfolio => {
    return portfolio.map(item => {
      return (
        <Card
          title={item.title}
          description={item.description}
          url={item.url}
          urlText={item.urlText}
          image={item.image}
          active={true}
          id={item.id}
        />
      );
    });
  };

  return (
    <div className={"container portfolio"}>{renderPortfolio(portfolioContext)}</div>
  );
};
export default Portfolio;
