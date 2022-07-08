import { Link } from "react-router-dom";

export interface Proptypes {
  className?: string;
  title: string;
  path: string;
  image: string;
  alt?: string;
}

const Card = ({ className, title, path, image, alt = "" }: Proptypes) => {
  const articleStyles: React.CSSProperties = {
    borderRadius: "1rem",
    overflow: "hidden",
    border: "solid 1px white",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)",
  };
  const imgStyles: React.CSSProperties = {
    display: "block",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    width: "100%",
  };
  const figCaptionStyles: React.CSSProperties = {
    transition: "200ms",
  };
  return (
    <article style={articleStyles} className={"card " + className}>
      <Link to={path}>
        <figure>
          <img style={imgStyles} src={image} alt={alt} />
          <figcaption style={figCaptionStyles}>{title}</figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default Card;
