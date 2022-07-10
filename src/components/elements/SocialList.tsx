import SocialIcon from "components/contact/SocialIcon";
import socials from "data/socials";

const SocialList = () => {
  const renderSocials = () => {
    return socials.map(social => <SocialIcon {...social} key={social.url} />);
  };
  return <div className="socials">{renderSocials()}</div>;
};

export default SocialList;
