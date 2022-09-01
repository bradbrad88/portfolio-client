import Main from "components/elements/Main";
import Section from "components/elements/Section";
import H1 from "components/elements/H1";
import H2 from "components/elements/H2";
import CardGrid from "components/elements/CardGrid";
import { Project } from "data/projects";
import Repos from "./Repos";

const Projects = ({ projects }: { projects: Project[] }) => {
  const renderProjects = () => {
    return (
      <>
        <Repos />
        <Section>
          <H2>Detailed Project Pages</H2>
          <CardGrid items={projects} />
        </Section>
      </>
    );
  };

  return (
    <Main>
      <H1>Projects</H1>
      <Section>{renderProjects()}</Section>
    </Main>
  );
};

export default Projects;
