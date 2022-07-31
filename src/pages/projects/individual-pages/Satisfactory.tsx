import mapgif from "assets/MapCapture.gif";
import H2 from "components/elements/H2";
import Section from "components/elements/Section";
import useProject from "hooks/useProject";

const Satisfactory = () => {
  const project = useProject();
  if (!project) return null;

  return (
    <article>
      <Section>
        <H2>Overview</H2>
        <p>
          This project was designed to help with the high level planning of your world in the
          game, Satisfactory.
        </p>
        <p>
          The gist is that you turn raw elements into useful materials. Each item has different
          recipes that it can be manufactured with. The different recipes offer different
          tradeoffs which can be time-consuming to work out.
        </p>
        <img src={mapgif} alt="" />
      </Section>
      <Section>
        <H2>Progress</H2>
        <p>
          This project is a work in progress. I've hit some pretty severe roadblocks with using
          native React functionality. Given the complexity of the data to be built, I'm
          considering a Redux implementation.
        </p>
        <p>
          Some features I want to achieve are an interactive map, drag and drop building steps
          that are fully interactive. Connecting lines between building step inputs and outputs
          using html canvas element.
        </p>
      </Section>
    </article>
  );
};

export default Satisfactory;
