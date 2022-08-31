import { Link } from "react-router-dom";

export interface Proptypes {
  className?: string;
  title: string;
  path: string;
  image: string;
  alt?: string;
}

const Card = ({ title, path, image, alt = "" }: Proptypes) => {
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
