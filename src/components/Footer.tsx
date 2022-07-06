import SocialIcon from "./contact/SocialIcon";
import socials from "data/socials";

import "stylesheets/Footer.scss";

const Footer = () => {
  const renderSocials = () => {
    return socials.map(social => <SocialIcon {...social} key={social.url} />);
  };
  return (
    <footer>
      <div className="contact-details">
        <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a>
        <a href={"tel:+61431154056"}>0431 154 056</a>
      </div>
      <div className="socials">{renderSocials()}</div>
    </footer>
  );
};

export default Footer;
