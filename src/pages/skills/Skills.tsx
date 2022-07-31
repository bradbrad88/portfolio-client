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
          Please take the rating system with a grain of salt - it's only intended as a visual
          indicator of my confidence within a subject (however mis-guided).
        </p>
      </Section>
      {renderSkills()}
    </Main>
  );
};
export default Skills;
