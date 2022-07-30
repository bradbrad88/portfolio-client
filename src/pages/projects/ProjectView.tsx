import { Outlet } from "react-router-dom";
import useProject from "hooks/useProject";
import ProjectDetails from "./ProjectDetails";
import { Project } from "data/projects";
import Main from "components/elements/Main";
import NavbarSpacer from "components/elements/NavbarSpacer";
import Section from "components/elements/Section";
import H1 from "components/elements/H1";

interface Proptypes {
  projects: Project[];
}
const ProjectView = ({ projects }: Proptypes) => {
  const project = useProject();

  return (
    <Main>
      <NavbarSpacer />
      <Section>
        <H1>Projects</H1>
        {project && <ProjectDetails project={project} />}
      </Section>
      <Outlet />
    </Main>
  );
};

export default ProjectView;
