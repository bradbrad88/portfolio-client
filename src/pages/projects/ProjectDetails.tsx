import { Project } from "data/projects";

interface Proptypes {
  project: Project;
}

const ProjectDetails = ({ project }: Proptypes) => {
  const renderRepos = () => {
    return (
      <>
        <p className="label">Repos</p>
        <div>
          {project.repos.map(repo => (
            <a href={repo.link} target="_blank">
              {repo.text}
            </a>
          ))}
        </div>
      </>
    );
  };

  return (
    <section id="details">
      <h2>Project Details</h2>
      <div className="project-details">
        <p className="label">Title</p>
        <p>{project.title}</p>
        {renderRepos()}
        {project.deployed && (
          <>
            <p className="label">Deployment</p>
            <a href={project.deployed}>Live Site</a>
          </>
        )}
        <p className="label">Status</p>
        <p>{project.complete ? "Complete" : "WIP"}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
