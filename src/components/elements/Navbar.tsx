import { Link } from "react-router-dom";
import classnames from "classnames";
import useScrollDirection from "hooks/useScrollDirection";
import resume from "assets/Resume.pdf";
import "stylesheets/Navbar.scss";

const NavBar = () => {
  const { up } = useScrollDirection();
  const classes = classnames("main", { display: up });
  return (
    <nav className={classes}>
      <ul>
        <li className="link-hover">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="link-hover">
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li className="link-hover">
          <Link to={"/skills"}>Skills</Link>
        </li>
        <li className="link-hover">
          <a href={resume} download={"Brad_Teague_Resume.pdf"}>
            Resume
          </a>
        </li>
        <li className="link-hover">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
