import SocialIcon from "components/contact/SocialIcon";
import socials from "data/socials";
import "stylesheets/Footer.scss";

const Footer = () => {
  const renderSocials = () => {
    return socials.map(social => <SocialIcon {...social} key={social.url} />);
  };

  return (
    <footer>
      <div className="socials">{renderSocials()}</div>
      <p>
        Email me:{" "}
        <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a>
      </p>
      <p>
        Call or msg: <a href={"tel:+61431154056"}>0431 154 056</a>
      </p>
    </footer>
  );
};

export default Footer;
