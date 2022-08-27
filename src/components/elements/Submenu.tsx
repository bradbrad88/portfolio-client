import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface MenuItem {
  path: string;
  title: string;
  id: string;
}

interface Proptypes {
  menuItems: MenuItem[];
  root: string;
  expand: boolean;
  setExpand: Function;
}

const Submenu = ({ root, menuItems, expand, setExpand }: Proptypes) => {
  const nav = useNavigate();

  // window click listener set expand false
  useEffect(() => {
    window.addEventListener("click", collapse);
    return () => window.removeEventListener("click", collapse);
  }, []);

  function collapse() {
    setExpand(false);
  }

  const handleNavigation = (e: React.MouseEvent, path: string = "") => {
    e.stopPropagation();
    console.log(path);
    nav(`${root}/${path}`);
    setExpand(false);
  };

  const renderMenuItems = () => {
    return menuItems.map(menuItem => (
      <li
        className="hover:bg-white hover:bg-opacity-20 block transition-colors ease-in-out px-3 py-2 sm:py-1 m-0 cursor-pointer"
        key={menuItem.id}
        onClick={e => handleNavigation(e, menuItem.path)}
      >
        {menuItem.title}
      </li>
    ));
  };

  return (
    <div
      className="absolute w-full whitespace-nowrap left-0 bg-sky-800 sm:bg-black sm:bg-opacity-90 bottom-0 sm:bottom-auto origin-bottom sm:top-full sm:origin-top my-14 sm:mt-2 rounded-md sm:rounded-sm sm:border-[1px] sm:border-white sm:border-opacity-10 text-white text-left text-lg max-h-[70vh] overflow-y-auto transition-transform sm:shadow-lg sm:shadow-black"
      style={{
        transform: expand ? undefined : "scaleY(0)",
      }}
    >
      <ul>
        <li
          onClick={e => handleNavigation(e)}
          className="hover:bg-white hover:bg-opacity-20 block transition-colors ease-in-out px-3 py-3 sm:py-2 m-0 cursor-pointer"
        >
          All
        </li>
        <hr className="opacity-30" />
        {renderMenuItems()}
      </ul>
    </div>
  );
};

export default Submenu;
