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
            <p key={repo.link}>
              <a href={repo.link} target="_blank" rel="noreferrer">
                {repo.text}
              </a>
            </p>
          ))}
        </div>
      </>
    );
  };

  return (
    <section id="details">
      <h1>{project.title}</h1>
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
        <p className="label">Description</p>
        <p style={{ whiteSpace: "pre-line" }}>{project.desc}</p>
      </div>
      <img src={project.image} alt="" />
    </section>
  );
};

export default ProjectDetails;
