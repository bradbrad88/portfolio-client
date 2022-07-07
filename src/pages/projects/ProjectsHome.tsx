import CardGrid from "components/CardGrid";
import { Project } from "data/projects";

interface Proptypes {
  projects: Project[];
}

const ProjectsHome = ({ projects }: Proptypes) => {
  return (
    <>
      <h1>Projects</h1>
      <p>Check it out</p>
      <CardGrid className="projects-grid" childClassName="project" items={projects} />
    </>
  );
};

export default ProjectsHome;
