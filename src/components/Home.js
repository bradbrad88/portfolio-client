import ProfileHeader from "./ProfileHeader";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./Skills";
import About from "./About";
import PageFooter from "./Footer";

const Home = () => {
  return (
    <>
      <ProfileHeader />
      <Portfolio />
      <Skills />
      {/* <About /> */}
    </>
  );
};

export default Home;