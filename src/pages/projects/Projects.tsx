import Main from "components/elements/Main";
import Section from "components/elements/Section";
import H1 from "components/elements/H1";
import CardGrid from "components/elements/CardGrid";
import { Project } from "data/projects";

const Projects = ({ projects }: { projects: Project[] }) => {
  const renderProjects = () => {
    return <CardGrid items={projects} />;
  };

  return (
    <Main>
      <H1>Projects</H1>
      <Section>{renderProjects()}</Section>
    </Main>
  );
};

export default Projects;
