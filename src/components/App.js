import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PortfolioProvider } from "../contexts/portfolioContext";
import portfolioValue from "../assets/portfolio";
import Header from "./header/Header";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import "../stylesheets/Main.css";
import Fullscreen from "./portfolio/Fullscreen";

const App = () => {
  return (
    <Router>
      <Header title={"Brad Teague"} desc={"junior web dev job seeker"} />
      <Route path={"/about"} exact component={About} />
      <PortfolioProvider value={portfolioValue}>
        <Route path={"/portfolio"} component={Portfolio} />
        <Route path={"/portfolio/:id"} component={Fullscreen} />
      </PortfolioProvider>
      <Route path={"/blog"} exact component={Blog} />
      <Route path={"/contact"} exact component={Contact} />
    </Router>
  );
};

export default App;
