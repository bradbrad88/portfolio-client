import Header from "pages/home/Header";
import About from "pages/home/About";
import FeatureProjects from "./FeatureProjects";
import ContactForm from "components/contact/ContactForm";
import "stylesheets/Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <FeatureProjects />
        <section>
          <h2>Contact Me</h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
};

export default Home;
