import { useNavigate } from "react-router-dom";
import { MenuItem } from "./Submenu";
import { useCtx } from "./Navbar";

interface Proptypes {
  to: string;
  title: string;
  submenu?: MenuItem[];
}

const NavLi = ({ to, title, submenu }: Proptypes) => {
  const { newMenu } = useCtx();
  const nav = useNavigate();
  const handleNavigate: React.MouseEventHandler = e => {
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
        onClick={handleNavigate}
        onPointerEnter={() => newMenu(submenu)}
      >
        {title}
      </li>
    </>
  );
};

export default NavLi;
