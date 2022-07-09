import Card, { Proptypes as CardProps } from "components/elements/Card";

interface Proptypes {
  className?: string;
  childClassName?: string;
  items: CardProps[];
}

const CardGrid = ({ className, childClassName, items }: Proptypes) => {
  const gridStyles: React.CSSProperties = {
    display: "grid",
  };
  const renderCards = () => {
    return (
      <>
        {items.map(item => (
          <Card className={childClassName} {...item} key={item.path} />
        ))}
      </>
    );
  };
  return (
    <div style={gridStyles} className={className}>
      {renderCards()}
    </div>
  );
};

export default CardGrid;
