interface Proptypes {
  icon: string;
  url: string;
  altText: string;
}

const SocialIcon = ({ icon, url, altText }: Proptypes) => {
  return (
    <div className="w-12 h-12 rounded-md overflow-hidden">
      <a href={url} target={"_blank"} rel="noreferrer">
        <img className="block h-full w-full" src={icon} alt={altText} />
      </a>
    </div>
  );
};

export default SocialIcon;
