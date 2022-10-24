import React from "react";
import { Project } from "data/projects";
import H2 from "components/elements/H2";
import Section from "components/elements/Section";

interface Proptypes {
  project: Project;
}

const ProjectDetails = ({ project }: Proptypes) => {
  const renderRepos = () =>
    project.repos.map(repo => (
      <React.Fragment key={repo.link + repo.text}>
        <p className="text-purple whitespace-pre pr-5">{repo.text}</p>
        <p>
          <a
            className="text-green underline"
            href={repo.link}
            target="_blank"
            rel="noreferrer"
          >
            {repo.link}
          </a>
        </p>
      </React.Fragment>
    ));

  return (
    <Section>
      <H2>Details</H2>
      <div className="grid grid-cols-[min-content,_minmax(0,1fr)] text-lg">
        <p className="text-purple">Title</p>
        <p>{project.title}</p>
        {renderRepos()}
        {project.deployed && (
          <>
            <p className="text-purple">Live Site</p>
            <p>
              <a className="text-green underline" href={project.deployed} target="_blank">
                {project.deployed}
              </a>
            </p>
          </>
        )}
        <p className="text-purple">Status</p>
        <p>{project.complete ? "Complete" : "WIP"}</p>
        <p className="text-purple mr-8">Description</p>
        <p className="whitespace-pre-line">{project.desc}</p>
      </div>
      <img className="mt-3 border-[1px] border-white rounded-lg" src={project.image} alt="" />
    </Section>
  );
};

export default ProjectDetails;
