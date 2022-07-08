import { useState, useEffect, MouseEventHandler } from "react";
import { useNavigate, Link } from "react-router-dom";
import ButtonList from "components/widgets/ButtonList";
import { Project } from "data/projects";
import { menuIcon } from "assets/svgIcons";

const ProjectNav = ({ projects }: { projects: Project[] }) => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    const handler = () => {
      setOpen(false);
    };
    window.addEventListener("click", handler);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);
  const onClick = (project: any) => {
    nav(project.path);
  };
  const onMenu: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    setOpen(!open);
  };
  const mapId = projects.map(project => ({ ...project, id: project.path }));
  return (
    <nav className="project-nav">
      <div style={{ display: "flex", gap: "1rem" }}>
        <div className="nav-menu" onClick={onMenu}>
          {menuIcon(40)}
        </div>
      </div>
      <div className={`display-menu ${open && "active"}`}>
        <Link to={"/projects"}>
          <h2>Projects</h2>
        </Link>
        <ButtonList list={mapId} onClick={onClick} />
      </div>
    </nav>
  );
};

export default ProjectNav;
