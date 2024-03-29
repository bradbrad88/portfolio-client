import { useState } from "react";
import CollapseCard from "components/elements/CollapseCard";
import { Skill as SkillType } from "data/skills";
import Section from "components/elements/Section";
import H2 from "components/elements/H2";
import H3 from "components/elements/H3";

interface Proptypes {
  skill: SkillType;
}

const Skill = ({ skill }: Proptypes) => {
  const [fold, setFold] = useState(true);

  return (
    <Section styles={{ marginTop: 0, marginBottom: 0 }}>
      <div
        className="flex cursor-pointer justify-between items-center border-b-[1px] border-[#fff3]"
        onClick={() => setFold(!fold)}
      >
        <H2 divider={false} styles={{ fontSize: "1.5rem", marginBottom: 0 }}>
          {skill.skill}
        </H2>
        <div
          className={
            (fold ? "rotate-90" : "rotate-180") +
            " h-[12px] w-[12px] border-l-transparent border-l-[12px] border-r-[12px] border-r-transparent border-b-[12px] border-[#fff6] transition-all ease-in-out origin-bottom -translate-y-2"
          }
        ></div>
      </div>
      <CollapseCard fold={fold}>
        {skill.concepts.map(concept => (
          <article key={concept.description} className="">
            <div className="sm:flex justify-between">
              <H3 styles={{ fontSize: "1.4rem" }}>{concept.description}</H3>
              {/* <span className="text-right sm:text-left block">
                {concept.stars + " out of 5 "}
                {"💡".repeat(concept.stars) + "➖".repeat(5 - concept.stars)}
              </span> */}
            </div>
            <p>{concept.comment}</p>
          </article>
        ))}
      </CollapseCard>
    </Section>
  );
};

export default Skill;
