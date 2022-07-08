import classnames from "classnames";

interface ListItem {
  title: string;
  id: string;
  selected: boolean;
}

interface Proptypes {
  className?: string;
  list: ListItem[];
  onClick: (listItem: ListItem) => void;
}

const ButtonList = ({ className = "", list, onClick }: Proptypes) => {
  const renderList = () => {
    return list.map(listItem => {
      const classes = classnames(className, { selected: listItem.selected });
      return (
        <button className={classes} onClick={() => onClick(listItem)} key={listItem.id}>
          {listItem.title}
        </button>
      );
    });
  };

  return <>{renderList()}</>;
};

export default ButtonList;
