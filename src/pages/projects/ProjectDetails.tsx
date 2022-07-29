import { Project } from "data/projects";
import H2 from "components/elements/H2";
import Section from "components/elements/Section";
interface Proptypes {
  project: Project;
}

const ProjectDetails = ({ project }: Proptypes) => {
  const renderRepos = () => {
    return (
      <>
        <p className="text-purple">Repos</p>
        <div>
          {project.repos.map(repo => (
            <p key={repo.link}>
              <a
                className="text-green underline"
                href={repo.link}
                target="_blank"
                rel="noreferrer"
              >
                {repo.text}
              </a>
            </p>
          ))}
        </div>
      </>
    );
  };

  return (
    <Section>
      <H2>{project.title}</H2>
      <div className="grid grid-cols-2 text-lg">
        <p className="text-purple">Title</p>
        <p>{project.title}</p>
        {renderRepos()}
        {project.deployed && (
          <>
            <p className="text-purple">Deployment</p>
            <a className="text-green underline" href={project.deployed} target="_blank">
              Live Site
            </a>
          </>
        )}
        <p className="text-purple">Status</p>
        <p>{project.complete ? "Complete" : "WIP"}</p>
        <p className="text-purple">Description</p>
        <p className="whitespace-pre-line">{project.desc}</p>
      </div>
      <img className="mt-3 border-[1px] border-white rounded-lg" src={project.image} alt="" />
    </Section>
  );
};

export default ProjectDetails;
