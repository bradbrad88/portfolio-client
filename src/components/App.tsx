import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "components/elements/Navbar";
import Footer from "components/elements/Footer";
import Home from "pages/home/Home";
import Projects from "pages/projects/Projects";
import Skills from "pages/skills/Skills";
import ContactPage from "pages/contact/ContactPage";
import ScrollTop from "./utils/ScrollTop";
import FlexWrapper from "components/styling/FlexWrapper";
// import "stylesheets/Main.scss";
// import "stylesheets/Effects.scss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <ScrollTop />
      <ToastContainer
        position="top-left"
        theme="dark"
        toastClassName="toasty"
        autoClose={3000}
      />
      <FlexWrapper>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="projects/*" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </FlexWrapper>
    </Router>
  );
};

export default App;
