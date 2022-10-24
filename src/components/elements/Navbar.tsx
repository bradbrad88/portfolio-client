import React, { useState, useRef } from "react";
import useScrollDirection from "hooks/useScrollDirection";
import NavLi from "components/elements/NavLi";
import projects from "data/projects";
import Submenu, { MenuItem } from "./Submenu";
import { Provider } from "contexts/NavbarCtx";

const NavBar = () => {
  const { up } = useScrollDirection();
  const [submenu, setSubmenu] = useState<MenuItem[] | undefined>(undefined);
  const [expand, setExpand] = useState(false);
  const timerRef = useRef<any>();

  function newMenu(submenu?: MenuItem[]) {
    if (submenu) {
      setSubmenu(submenu);
      setExpand(true);
    } else {
      setExpand(false);
    }
  }

  const onMouseLeave: React.PointerEventHandler = e => {
    if (e.pointerType === "mouse") {
      timerRef.current = setTimeout(() => {
        setExpand(false);
      }, 100);
    }
  };

  const onMouseEnter: React.PointerEventHandler = e => {
    clearTimeout(timerRef.current);
  };

  return (
    <nav
      className={
        (up
          ? "animate-drop-in-below sm:animate-drop-in-above"
          : "animate-drop-out-below sm:animate-drop-out-above") +
        " fixed w-[90%] bottom-0 left-1/2 -translate-x-1/2 sm:w-fit sm:p-3 mb-3 sm:bottom-auto sm:right-0 mr-2 z-10"
      }
      onPointerLeave={onMouseLeave}
      onPointerUp={onMouseEnter}
      onPointerEnter={onMouseEnter}
    >
      <ul className="relative grid grid-flow-col auto-cols-fr justify-center sm:flex sm:gap-6 font-bold rounded-lg bg-sky-800 sm:bg-transparent overflow-hidden">
        <Provider value={{ submenu, newMenu }}>
          <NavLi to="/" title="Home" />
          <NavLi to="/projects" title="Projects" submenu={projects} />
          <NavLi to="/skills" title="Skills" />
          <NavLi to="/blogs" title="Blogs" />
          <NavLi to="/contact" title="Contact" />
        </Provider>
      </ul>
      {submenu && (
        <Submenu menuItems={submenu} expand={expand} setExpand={setExpand} root={"projects"} />
      )}
    </nav>
  );
};

export default NavBar;
