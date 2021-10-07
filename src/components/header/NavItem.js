import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ href, text }) => {
  return (
    <Link className={"nav-item"} to={href}>
      {text}
    </Link>
  );
};

export default NavItem;
