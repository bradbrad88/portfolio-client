import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ModalFormProvider from "contexts/ModalFormContext";
import Header from "./Header";
import Footer from "./Footer";
import Home from "components/Home";
import PortfolioPage from "./portfolio/PortfolioPage";
import Satisfactory from "./portfolio/portfolio-pages/Satisfactory";
import Photography from "./portfolio/portfolio-pages/Photography";
import ScrollTop from "./ScrollTop";
import "../stylesheets/Main.scss";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: `(min-width: 900px)` });
  return (
    <Router>
      <ScrollTop />
      <ModalFormProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<PortfolioPage />}>
            <Route path="satisfactory" element={<Satisfactory />} />
            <Route path="photography" element={<Photography />} />
          </Route>
        </Routes>
        <Footer />
      </ModalFormProvider>
    </Router>
  );
};

export default App;
