import { CSSProperties, useState } from "react";
import CollapseCard from "components/elements/CollapseCard";
import { Skill as SkillType } from "data/skills";

interface Proptypes {
  skill: SkillType;
}

const Skill = ({ skill }: Proptypes) => {
  const [fold, setFold] = useState(true);

  const style: CSSProperties = {
    cursor: "pointer",
  };

  return (
    <section key={skill.skill}>
      <h2 style={style} onClick={() => setFold(!fold)}>
        {skill.skill}
      </h2>
      <CollapseCard fold={fold}>
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
      </CollapseCard>
    </section>
  );
};

export default Skill;
