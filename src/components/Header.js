import React, { useCallback, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { homeIcon } from "assets/svgIcons";
import { useEffect } from "react/cjs/react.development";

const Header = () => {
  const [hide, setHide] = useState(false);
  const scrollRef = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  const onscroll = useCallback(
    e => {
      const {
        target: {
          scrollingElement: { scrollTop },
        },
      } = e;
      const scrolledDown = scrollTop > scrollRef.current;
      const scrolledUp = scrollTop < scrollRef.current;
      if (scrolledDown && !hide) {
        setHide(true);
      } else if (scrolledUp && hide) {
        setHide(false);
      }
      scrollRef.current = scrollTop;
    },
    [hide]
  );
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, [onscroll]);
  console.log("render");
  return (
    <div className={`header ${hide ? "hide" : ""}`}>
      <Link to={"/"} className="home">
        <h3>{!isMobile && homeIcon(40)}Brad Teague</h3>
      </Link>
      <div className="contact-info">
        <a href={"tel:+61431154056"}>0431 154 056</a>
        <a href={"mailto:b_rad88@live.com"}>brad.s.teague@gmail.com</a>
      </div>
    </div>
  );
};

export default Header;
