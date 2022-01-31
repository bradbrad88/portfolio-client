import React from "react";
import "../stylesheets/Main.scss";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import PortfolioPage from "./portfolio/PortfolioPage";
import Satisfactory from "./portfolio/portfolio-pages/Satisfactory";
import Photography from "./portfolio/portfolio-pages/Photography";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: `(min-width: 900px)` });
  return (
    <Router>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<PortfolioPage />}>
          <Route path="satisfactory" element={<Satisfactory />} />
          <Route path="photography" element={<Photography />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
