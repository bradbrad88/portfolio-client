import React from "react";
import PortfolioCard from "./PortfolioCard";

import portfolio from "./portfolioItems";
import "stylesheets/Portfolio.css";

const Portfolio = () => {
  const renderPortfolio = portfolio => {
    return portfolio.map(item => {
      return (
        <PortfolioCard
          title={item.title}
          description={item.description}
          url={item.url}
          urlText={item.urlText}
          image={item.image}
          active={true}
          id={item.id}
          repos={item.repos}
          key={item.id}
          site={item.site}
        />
      );
    });
  };

  return (
    <div className={"portfolio section"}>
      <h2>Portfolio</h2>
      <div className={"portfolio-items"}>{renderPortfolio(portfolio)}</div>
    </div>
  );
};
export default Portfolio;
