import { Link } from "react-router-dom";

export interface Proptypes {
  className?: string;
  caption: string;
  path: string;
  src: string;
  alt: string;
}

const Card = ({ className, caption, path, src, alt }: Proptypes) => {
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
    textAlign: "center",
    padding: "0.4rem",
    transition: "200ms",
    fontSize: "2rem",
  };
  return (
    <article style={articleStyles} className={"card " + className}>
      <Link to={path}>
        <figure>
          <img style={imgStyles} src={src} alt={alt} />
          <figcaption style={figCaptionStyles}>{caption}</figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default Card;
