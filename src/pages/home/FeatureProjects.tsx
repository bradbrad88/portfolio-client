import projects from "data/projects";
import CardGrid from "components/elements/CardGrid";
import Section from "components/elements/Section";
import H2 from "components/elements/H2";

const FeatureProjects = () => {
  const featureProjects = projects
    .filter(project => project.feature)
    .map(project => ({ ...project, path: "projects/" + project.path }));

  return (
    <Section>
      <H2>Feature Projects</H2>
      <CardGrid items={featureProjects} />
    </Section>
  );
};

export default FeatureProjects;
