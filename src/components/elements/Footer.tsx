import SocialList from "./SocialList";
import "stylesheets/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <SocialList />
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
