import useScrollDirection from "hooks/useScrollDirection";
import NavLi from "components/elements/NavLi";
import projects from "data/projects";

const NavBar = () => {
  // sets to true whenever use scrolls up
  const { up } = useScrollDirection();

  return (
    <nav
      className={
        (up
          ? "animate-drop-in-below sm:animate-drop-in-above"
          : "animate-drop-out-below sm:animate-drop-out-above") +
        " fixed w-[90%]  bottom-0 left-1/2 -translate-x-1/2 bg-sky-800 sm:bg-transparent sm:w-fit  sm:p-3 sm:rounded-none mb-3 sm:bottom-auto sm:right-0 mr-2 rounded-lg z-10"
      }
    >
      <ul className="relative grid grid-flow-col auto-cols-fr justify-center sm:flex sm:gap-6 font-bold ">
        <NavLi to="/" title="Home" />
        <NavLi to="/projects" title="Projects" submenu={projects} />
        <NavLi to="/skills" title="Skills" />
        <NavLi to="/blogs" title="Blogs" />
        <NavLi to="/contact" title="Contact" />
      </ul>
    </nav>
  );
};

export default NavBar;
