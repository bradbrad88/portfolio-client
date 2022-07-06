import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import resume from "assets/Resume.pdf";
import useScrollDirection from "hooks/useScrollDirection";
import "stylesheets/Navbar.scss";

const NavBar = () => {
  const { up } = useScrollDirection();
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  const classes = classnames("main", { display: up });
  return (
    <nav className={classes}>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"/skills"}>Skills</Link>
        </li>
        <li>
          <a href={resume} download={"Brad_Teague_Resume.pdf"}>
            Resume
          </a>
        </li>
        <li>
          <Link to={"/#contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
