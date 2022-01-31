import React from "react";
import { Outlet, Link } from "react-router-dom";
import { homeIcon } from "assets/svgIcons";
import "stylesheets/Portfolio.scss";

const PortfolioPage = ({ children }) => {
  return (
    <div className="portfolio-page">
      <Outlet />
    </div>
  );
};

export default PortfolioPage;
