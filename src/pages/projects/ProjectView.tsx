import { Outlet } from "react-router-dom";
import useProject from "hooks/useProject";
import ProjectNav from "./ProjectNav";
import ProjectDetails from "./ProjectDetails";
import { Project } from "data/projects";

interface Proptypes {
  projects: Project[];
}
const ProjectView = ({ projects }: Proptypes) => {
  const project = useProject();

  return (
    <div id="project-view">
      <ProjectNav projects={projects} />
      <main>
        {project && <ProjectDetails project={project} />}
        <Outlet />
      </main>
    </div>
  );
};

export default ProjectView;
