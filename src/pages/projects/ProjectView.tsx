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
    <div className="project-view">
      <ProjectNav projects={projects} />
      <main>
        <Outlet />
      </main>
      <ProjectDetails list={[]} />
    </div>
  );
};

export default ProjectView;
