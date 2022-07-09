import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalFormProvider from "contexts/ModalFormContext";
import Navbar from "components/elements/Navbar";
import Footer from "components/elements/Footer";
import Home from "pages/home/Home";
import Projects from "pages/projects/Projects";
import Skills from "pages/skills/Skills";
import ScrollTop from "./utils/ScrollTop";
import FlexWrapper from "components/styling/FlexWrapper";
import "stylesheets/Main.scss";
import "stylesheets/Effects.scss";

const App = () => {
  return (
    <Router>
      <ScrollTop />
      <ModalFormProvider>
        <FlexWrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects/*" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
          </Routes>
          <Footer />
        </FlexWrapper>
      </ModalFormProvider>
    </Router>
  );
};

export default App;
