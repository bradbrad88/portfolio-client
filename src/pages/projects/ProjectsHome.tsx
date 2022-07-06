import CardGrid from "components/CardGrid";
import { Project } from "data/projects";

interface Proptypes {
  projects: Project[];
}

const ProjectsHome = ({ projects }: Proptypes) => {
  const props = projects.map(project => {
    return {
      ...project,
      caption: project.title,
      alt: "",
      src: project.image,
    };
  });

  return (
    <>
      <h1>Projects</h1>
      <p>Check it out</p>
      <CardGrid className="projects-grid" childClassName="project" items={props} />
    </>
  );
};

export default ProjectsHome;
