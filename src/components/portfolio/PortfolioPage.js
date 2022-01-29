import React from "react";
import { Outlet, Link } from "react-router-dom";

const PortfolioPage = ({ children }) => {
  return (
    <div>
      <Link to={"/"}>
        <h1 style={{ display: "inline-block" }}>Home</h1>
      </Link>
      <Outlet />
    </div>
  );
};

export default PortfolioPage;
