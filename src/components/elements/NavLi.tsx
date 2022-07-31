import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Submenu, { MenuItem } from "./Submenu";

interface Proptypes {
  to: string;
  title: string;
  children?: React.ReactNode;
  submenu?: MenuItem[];
}

const NavLi = ({ children, to, title, submenu }: Proptypes) => {
  const [expand, setExpand] = useState(false);
  const nav = useNavigate();
  const handleNavigate: React.MouseEventHandler = e => {
    if (submenu) {
      e.stopPropagation();
      setExpand(!expand);
    } else {
      nav(to);
    }
  };
  return (
    <>
      <li
        className="sm:hover:border-b-2 sm:hover:text-green border-[#fff3] transition-colors border-r-2 sm:border-r-0 h-12 text-center text-sm sm:text-lg cursor-pointer text-shadow flex flex-col justify-center items-center content-center sm:justify-end last-of-type:border-r-0"
        onClick={handleNavigate}
      >
        {title}
      </li>
      {submenu && (
        <Submenu menuItems={submenu} expand={expand} setExpand={setExpand} root={to} />
      )}
    </>
  );
};

export default NavLi;
