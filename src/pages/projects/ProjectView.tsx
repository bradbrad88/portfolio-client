import { Outlet } from "react-router-dom";
import ProjectNav from "./ProjectNav";
import ProjectDetails from "./ProjectDetails";
import { Project } from "data/projects";

interface Proptypes {
  projects: Project[];
}
const ProjectView = ({ projects }: Proptypes) => {
  // const location = useLocation();
  // console.log(location);
  return (
    <div id="project-view">
      <div className="sidebar">
        <ProjectNav projects={projects} />
        <ProjectDetails list={[]} />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProjectView;
