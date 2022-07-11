import CardGrid from "components/elements/CardGrid";
import { Project } from "data/projects";

interface Proptypes {
  projects: Project[];
}

const ProjectsHome = ({ projects }: Proptypes) => {
  return (
    <>
      <h1>Projects</h1>
      <CardGrid className="projects-grid" childClassName="project" items={projects} />
    </>
  );
};

export default ProjectsHome;
