interface ListItem {
  title: string;
  id: string;
}

interface Proptypes {
  list: ListItem[];
  onClick: (listItem: ListItem) => void;
}

const ButtonList = ({ list, onClick }: Proptypes) => {
  const renderList = () => {
    return (
      <>
        {list.map(listItem => (
          <button onClick={() => onClick(listItem)} key={listItem.id}>
            {listItem.title}
          </button>
        ))}
      </>
    );
  };

  return renderList();
};

export default ButtonList;
