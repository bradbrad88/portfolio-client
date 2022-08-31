import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "components/elements/Navbar";
import Footer from "components/elements/Footer";
import Home from "pages/home/Home";
import ProjectsIndex from "pages/projects/ProjectsIndex";
import Skills from "pages/skills/Skills";
import BlogsIndex from "pages/blogs/BlogIndex";
import ContactPage from "pages/contact/ContactPage";
import ScrollTop from "./utils/ScrollTop";
import FlexWrapper from "components/styling/FlexWrapper";
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
          <Route index element={<Home />} />
          <Route path="projects/*" element={<ProjectsIndex />} />
          <Route path="skills" element={<Skills />} />
          <Route path="blogs/*" element={<BlogsIndex />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </FlexWrapper>
    </Router>
  );
};

export default App;
