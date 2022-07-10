import ContactForm from "components/contact/ContactForm";
import SocialList from "components/elements/SocialList";

const ContactPage = () => {
  return (
    <main>
      <section>
        <h2>Get In Contact</h2>
        <p>
          I'm reachable by text or email - phone calls may fall through due to the large number
          of spam calls happening right now.
        </p>
        <p>
          Email me:{" "}
          <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a>
        </p>
        <p>
          Call or msg: <a href={"tel:+61431154056"}>0431 154 056</a>
        </p>
        <p>Catch me on socials</p>
        <SocialList />
      </section>
      <section>
        <h2>Send a Message</h2>
        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
