import { useNavigate } from "react-router-dom";
import ButtonList from "components/widgets/ButtonList";
import { Project } from "data/projects";

const ProjectNav = ({ projects }: { projects: Project[] }) => {
  const nav = useNavigate();
  const onClick = (project: any) => {
    console.log(project);
    nav(project.path);
  };
  const mapId = projects.map(project => ({ ...project, id: project.path }));
  return (
    <nav>
      <h2>Projects Navigation</h2>
      <ButtonList list={mapId} onClick={onClick} />
    </nav>
  );
};

export default ProjectNav;
