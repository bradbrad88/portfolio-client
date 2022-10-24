import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "./Submenu";
import useCtx from "contexts/NavbarCtx";
import classnames from "classnames";

interface Proptypes {
  to: string;
  title: string;
  submenu?: MenuItem[];
}

const NavLi = ({ to, title, submenu }: Proptypes) => {
  const { newMenu } = useCtx();
  const nav = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/")[1] === to.replace("/", "");

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

  const className = classnames(
    "sm:hover:border-b-2 sm:hover:text-green border-[#fff3] transition-colors border-r-2 sm:border-r-0 h-12 sm:h-8 text-center text-sm sm:text-lg cursor-pointer text-shadow flex flex-col justify-center items-center content-center sm:justify-end last-of-type:border-r-0",
    { "underline sm:text-green sm:no-underline bg-green sm:bg-transparent": active }
  );

  return (
    <>
      <li
        className={className}
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
