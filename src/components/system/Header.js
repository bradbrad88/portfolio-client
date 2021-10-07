import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "../../stylesheets/Header.css";

const Header = ({ title, desc, isDesktopOrLaptop }) => {
  return (
    <div className={"header"}>
      <Link className="nav-header" to="/">
        <h1>{title}</h1>
      </Link>
      <div className={"sub-header"}>
        <p>{desc}</p>
      </div>
      <div className="contact-info">
        <div className={"contact-item phone"}>0431 154 056</div>
        <div className={"contact-item email"}>b_rad88@live.com</div>
      </div>
      {isDesktopOrLaptop && (
        <div className="nav-bar">
          <NavItem href={"/about"} text={"about"} />
          <NavItem href={"/portfolio"} text={"portfolio"} />
          <NavItem href={"/blog"} text={"blog"} />
          <NavItem href={"/contact"} text={"contact"} />
        </div>
      )}
    </div>
  );
};

export default Header;
