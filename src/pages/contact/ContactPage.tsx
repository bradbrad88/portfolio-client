import ContactForm from "components/contact/ContactForm";
import SocialList from "components/elements/SocialList";
import Main from "components/elements/Main";
import Section from "components/elements/Section";
import H1 from "components/elements/H1";
import H2 from "components/elements/H2";
import NavbarSpacer from "components/elements/NavbarSpacer";

const ContactPage = () => {
  return (
    <Main>
      <NavbarSpacer />
      <Section>
        <H1>Get In Contact</H1>
        <H2>Preferred methods</H2>
        <p>
          I'm reachable by text or email - phone calls may fall through due to the large number
          of spam calls happening right now.
        </p>
        <p>
          Email me:{" "}
          <a className="text-green" href={`mailto:${process.env.REACT_APP_EMAIL}`}>
            {process.env.REACT_APP_EMAIL}
          </a>
        </p>
        <p>
          Call or msg:{" "}
          <a className="text-green" href={"tel:+61431154056"}>
            0431 154 056
          </a>
        </p>
        <p>Catch me on socials</p>
        <SocialList />
      </Section>
      <Section>
        <H2>Send a Message</H2>
        <ContactForm />
      </Section>
    </Main>
  );
};

export default ContactPage;
