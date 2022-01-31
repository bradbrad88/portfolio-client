import React from "react";
import { Outlet, Link } from "react-router-dom";
import { homeIcon } from "assets/svgIcons";
import "stylesheets/Portfolio.css";

const PortfolioPage = ({ children }) => {
  return (
    <div className="portfolio-page">
      <Link to={"/"}>{homeIcon(50)}</Link>
      <Outlet />
    </div>
  );
};

export default PortfolioPage;
