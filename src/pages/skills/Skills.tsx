import skills from "data/skills";
import "stylesheets/Skills.scss";

const Skills = () => {
  const renderSkills = () => {
    return skills.map(skill => (
      <article>
        <h2>{skill.skill}</h2>
        {skill.concepts.map(concept => (
          <article>
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
      </article>
    ));
  };
  return (
    <main>
      <section id="skills">
        <h1 style={{ fontSize: "4rem", marginTop: "4rem" }}>Skills</h1>
        <p>
          Take the rating system with a grain of salt - it's only intended as a visual
          indicator on how I feel about a concept.
        </p>
        {renderSkills()}
      </section>
    </main>
  );
};
export default Skills;
