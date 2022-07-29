import CardGrid from "components/elements/CardGrid";
import H1 from "components/elements/H1";
import { Project } from "data/projects";

interface Proptypes {
  projects: Project[];
}

const ProjectsHome = ({ projects }: Proptypes) => {
  return (
    <>
      <H1>Projects</H1>
      <CardGrid className="projects-grid" childClassName="project" items={projects} />
    </>
  );
};

export default ProjectsHome;
