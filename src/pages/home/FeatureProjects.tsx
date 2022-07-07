import projects from "data/projects";
import CardGrid from "components/CardGrid";

const FeatureProjects = () => {
  const featureProjects = projects
    .filter(project => project.feature)
    .map(project => ({ ...project, path: "projects/" + project.path }));

  return (
    <section id="feature">
      <h2>Feature Projects</h2>
      <CardGrid items={featureProjects} childClassName="project" className="projects-grid" />
    </section>
  );
};

export default FeatureProjects;
