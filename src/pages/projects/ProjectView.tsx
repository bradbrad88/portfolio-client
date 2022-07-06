import { Outlet } from "react-router-dom";
import ProjectNav from "./ProjectNav";
import ProjectDetails from "./ProjectDetails";
import { Project } from "data/projects";
import useProject from "hooks/useProject";

interface Proptypes {
  projects: Project[];
}
const ProjectView = ({ projects }: Proptypes) => {
  const project = useProject();

  return (
    <div id="project-view">
      <div className="sidebar">
        <ProjectNav projects={projects} />
        {project && <ProjectDetails project={project} />}
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProjectView;
