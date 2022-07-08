import { useState, useEffect, MouseEventHandler } from "react";
import { useNavigate, Link } from "react-router-dom";
import ButtonList from "components/widgets/ButtonList";
import { Project } from "data/projects";
import { menuIcon } from "assets/svgIcons";

interface Proptypes {
  projects: Project[];
  selected?: Project;
}

const ProjectNav = ({ projects, selected }: Proptypes) => {
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
  const listProps = projects.map(project => ({
    ...project,
    id: project.path,
    selected: project.id === selected?.id,
  }));
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
        <ButtonList list={listProps} onClick={onClick} />
      </div>
    </nav>
  );
};

export default ProjectNav;
