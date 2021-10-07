import React from "react";
import NavItem from "./NavItem";
import "../../stylesheets/Header.css";

const Footer = ({ title, desc }) => {
  return (
    <div className={"footer"}>
      <NavItem href={"/about"} text={"about"} />
      <NavItem href={"/portfolio"} text={"portfolio"} />
      <NavItem href={"/blog"} text={"blog"} />
      <NavItem href={"/contact"} text={"contact"} />
    </div>
  );
};

export default Footer;
