import React from "react";
import "../stylesheets/Main.css";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./Skills";
import About from "./About";
import PageFooter from "./PageFooter";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: `(min-width: 900px)` });
  return (
    <Router>
      <ProfileHeader />
      <Portfolio />
      <Skills />
      <About />
      <PageFooter />
    </Router>
  );
};

export default App;
