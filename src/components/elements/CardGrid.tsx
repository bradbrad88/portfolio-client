import Card, { Proptypes as CardProps } from "components/elements/Card";

interface Proptypes {
  items: CardProps[];
}

const CardGrid = ({ items }: Proptypes) => {
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
