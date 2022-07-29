import { Outlet } from "react-router-dom";
import useProject from "hooks/useProject";
import ProjectDetails from "./ProjectDetails";
import { Project } from "data/projects";
import Main from "components/elements/Main";
import NavbarSpacer from "components/elements/NavbarSpacer";

interface Proptypes {
  projects: Project[];
}
const ProjectView = ({ projects }: Proptypes) => {
  const project = useProject();

  return (
    <Main>
      <NavbarSpacer />
      {project && <ProjectDetails project={project} />}
      <Outlet />
    </Main>
  );
};

export default ProjectView;
