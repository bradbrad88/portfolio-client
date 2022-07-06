interface Proptypes {
  icon: string;
  url: string;
  altText: string;
}

const SocialIcon = ({ icon, url, altText }: Proptypes) => {
  return (
    <div className="social icon">
      <a href={url} target={"_blank"} rel="noreferrer">
        <img src={icon} alt={altText} />
      </a>
    </div>
  );
};

export default SocialIcon;
