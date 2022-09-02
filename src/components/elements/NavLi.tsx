import { useNavigate } from "react-router-dom";
import { MenuItem } from "./Submenu";
import useCtx from "contexts/NavbarCtx";

interface Proptypes {
  to: string;
  title: string;
  submenu?: MenuItem[];
}

const NavLi = ({ to, title, submenu }: Proptypes) => {
  const { newMenu } = useCtx();
  const nav = useNavigate();
  const handleNavigate: React.PointerEventHandler = e => {
    if (submenu && e.pointerType !== "mouse") {
      e.stopPropagation();
    } else {
      nav(to);
    }
  };
  const handleClick: React.MouseEventHandler = e => {
    if (submenu) {
      e.stopPropagation();
    } else {
      nav(to);
    }
  };
  return (
    <>
      <li
        className="sm:hover:border-b-2 sm:hover:text-green border-[#fff3] transition-colors border-r-2 sm:border-r-0 h-12 sm:h-8 text-center text-sm sm:text-lg cursor-pointer text-shadow flex flex-col justify-center items-center content-center sm:justify-end last-of-type:border-r-0"
        onClick={handleClick}
        onPointerEnter={() => newMenu(submenu)}
        onPointerDown={handleNavigate}
      >
        {title}
      </li>
    </>
  );
};

export default NavLi;
