import skills from "data/skills";
import Skill from "./Skill";

import "stylesheets/Skills.scss";

const Skills = () => {
  const renderSkills = () => {
    return skills.map(skill => <Skill key={skill.skill} skill={skill} />);
  };
  return (
    <main id="skills">
      <section>
        <h1 style={{ fontSize: "4rem", marginTop: "4rem" }}>Skills</h1>
        <p>
          Please take the rating system with a grain of salt - it's only intended as a visual
          indicator of my confidence within a subject (however mis-guided).
        </p>
      </section>
      {renderSkills()}
    </main>
  );
};
export default Skills;
