import Card, { Proptypes as CardProps } from "components/elements/Card";
import Section from "components/elements/Section";

interface Proptypes {
  className?: string;
  childClassName?: string;
  items: CardProps[];
}

const CardGrid = ({ className, childClassName, items }: Proptypes) => {
  const renderCards = () => {
    return (
      <>
        {items.map(item => (
          <Card {...item} key={item.path} />
        ))}
      </>
    );
  };
  return <div className="grid sm:grid-cols-2 gap-5">{renderCards()}</div>;
};

export default CardGrid;
