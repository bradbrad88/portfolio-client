interface ListItem {
  title: string;
  id: string;
}

interface Proptypes {
  className: string;
  list: ListItem[];
  onClick: (listItem: ListItem) => void;
}

const ButtonList = ({ className, list, onClick }: Proptypes) => {
  const renderList = () => {
    return (
      <>
        {list.map(listItem => (
          <button className={className} onClick={() => onClick(listItem)} key={listItem.id}>
            {listItem.title}
          </button>
        ))}
      </>
    );
  };

  return renderList();
};

export default ButtonList;
