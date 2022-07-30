import { Link } from "react-router-dom";

export interface Proptypes {
  className?: string;
  title: string;
  path: string;
  image: string;
  alt?: string;
}

const Card = ({ title, path, image, alt = "" }: Proptypes) => {
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
    <article className="group rounded-lg overflow-hidden border-[1px] border-white first-of-type:col-span-full sm:first-of-type:text-3xl text-2xl hover:opacity-90">
      <Link to={path}>
        <figure className="aspect-video">
          <img className="block object-cover h-full w-full" src={image} alt={alt} />
          <figcaption className="bg-purple text-center group-hover:tracking-wide py-2 transition-all">
            {title}
          </figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default Card;
