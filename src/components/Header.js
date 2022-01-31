import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { homeIcon } from "assets/svgIcons";
import { useEffect } from "react/cjs/react.development";

const Header = () => {
  const [active, setActive] = useState(true);
  const onscroll = useCallback(e => {
    console.log(e);
    const { deltaY } = e;
    const shouldBeActive = deltaY > 0;
    setActive(shouldBeActive);
  }, []);
  useEffect(() => {
    window.addEventListener("wheel", onscroll);
    return () => window.removeEventListener("wheel", onscroll);
  }, []);

  return (
    <div className={`header ${active ? "active" : ""}`}>
      <Link to={"/"} className="home">
        <h3>{homeIcon(50)}Brad Teague</h3>
      </Link>
      <div className="contact-info">
        <a href={"tel:+61431154056"}>0431 154 056</a>
        <a href={"mailto:b_rad88@live.com"}>brad.s.teague@gmail.com</a>
      </div>
    </div>
  );
};

export default Header;
