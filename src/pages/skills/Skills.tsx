import skills from "data/skills";
import Skill from "./Skill";
import Main from "components/elements/Main";
import Section from "components/elements/Section";
import H1 from "components/elements/H1";

// import "stylesheets/Skills.scss";

const Skills = () => {
  const renderSkills = () => {
    return skills.map(skill => <Skill key={skill.skill} skill={skill} />);
  };
  return (
    <Main>
      <Section>
        <H1>Skills</H1>
        <p>
          Honest feedback regarding my experience with various concepts and technology. A
          non-comprehensive list I'm slowly adding to.
        </p>
      </Section>
      {renderSkills()}
    </Main>
  );
};
export default Skills;
