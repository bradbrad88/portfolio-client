import Header from "pages/home/Header";
import About from "pages/home/About";
import FeatureProjects from "./FeatureProjects";
import "stylesheets/Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <FeatureProjects />
    </>
  );
};

export default Home;
