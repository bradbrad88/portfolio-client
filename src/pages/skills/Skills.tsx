import skills from "data/skills";
import "stylesheets/Skills.scss";

const Skills = () => {
  const renderSkills = () => {
    return skills.map(skill => (
      <section key={skill.skill}>
        <h2>{skill.skill}</h2>
        {skill.concepts.map(concept => (
          <article key={concept.description}>
            <h3 className="ratings">
              {concept.description}
              <span className="stars">
                {concept.stars + " out of 5 "}
                {"💡".repeat(concept.stars) + "➖".repeat(5 - concept.stars)}
              </span>
            </h3>
            <p>{concept.comment}</p>
          </article>
        ))}
      </section>
    ));
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
