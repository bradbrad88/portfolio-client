import Header from "pages/home/Header";
import About from "pages/home/About";
import FeatureProjects from "./FeatureProjects";
import ContactForm from "components/contact/ContactForm";
import Main from "components/elements/Main";
import Section from "components/elements/Section";
import H2 from "components/elements/H2";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <About />
        <FeatureProjects />
        <Section>
          <H2>Contact Me</H2>
          <ContactForm />
        </Section>
      </Main>
    </>
  );
};

export default Home;
