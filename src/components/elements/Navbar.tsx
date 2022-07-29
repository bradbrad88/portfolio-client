import { Link } from "react-router-dom";
import classnames from "classnames";
import useScrollDirection from "hooks/useScrollDirection";
import NavLi from "components/elements/NavLi";
import projects from "data/projects";
import resume from "assets/Resume.pdf";

import Submenu from "./Submenu";

const NavBar = () => {
  // sets to true whenever use scrolls up
  const { up } = useScrollDirection();

  const classes = classnames("main", { display: up });

  return (
    <nav className="fixed w-[90%] sm:w-fit bottom-0 left-1/2 -translate-x-1/2 bg-sky-800 sm:bg-transparent mb-3 sm:bottom-auto sm:right-0 mr-2 rounded-lg z-10">
      <ul className="grid grid-flow-col auto-cols-fr justify-center sm:flex sm:gap-6 font-bold ">
        <NavLi>
          <Link to={"/"}>Home</Link>
        </NavLi>
        <NavLi>
          <Submenu root="projects" title="Projects" menuItems={projects}></Submenu>
        </NavLi>
        <NavLi>
          <Link to={"/skills"}>Skills</Link>
        </NavLi>
        <NavLi>
          <a href={resume} download={"Brad_Teague_Resume.pdf"}>
            Resume
          </a>
        </NavLi>
        <NavLi>
          <Link to={"/contact"}>Contact</Link>
        </NavLi>
      </ul>
    </nav>
  );
};

export default NavBar;
