import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  path: string;
  title: string;
  id: string;
}

interface Proptypes {
  menuItems: MenuItem[];
  root: string;
  title: string;
}

const Submenu = ({ title, root, menuItems }: Proptypes) => {
  const [expand, setExpand] = useState(false);
  // window click listener set expand false

  useEffect(() => {
    window.addEventListener("click", collapse);
    return () => window.removeEventListener("click", collapse);
  }, []);

  function collapse() {
    // console.log("collapsing", expand);
    setExpand(false);
  }

  const renderMenuItems = () => {
    return menuItems.map(menuItem => (
      <li
        className="hover:bg-white hover:bg-opacity-30 block transition-colors ease-in-out px-3 py-1 m-0"
        key={menuItem.id}
      >
        <Link to={`/${root}/${menuItem.path}`}>{menuItem.title}</Link>
      </li>
    ));
  };

  const onAnchorClick: React.MouseEventHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    setExpand(!expand);
  };

  return (
    <>
      <a onClick={onAnchorClick}>{title}</a>
      <div
        className="absolute w-full whitespace-nowrap left-0 bg-purple bottom-0 sm:bottom-auto origin-bottom sm:origin-top my-14 sm:mt-2 rounded-md text-white text-left"
        style={{
          transform: expand ? undefined : "scaleY(0)",
          transition: "ease-in-out 300ms",
        }}
      >
        <ul>
          <Link to="projects">
            <li className="hover:bg-white hover:bg-opacity-30 block transition-colors ease-in-out px-3 py-1 m-0">
              All
            </li>
          </Link>
          <hr />
          {renderMenuItems()}
        </ul>
      </div>
    </>
  );
};

export default Submenu;
