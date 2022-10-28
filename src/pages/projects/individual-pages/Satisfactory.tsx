import H2 from "components/elements/H2";
import Section from "components/elements/Section";

const Satisfactory = () => {
  return (
    <article>
      <Section>
        <H2>Overview</H2>
        <p>
          This project was designed to help with the high level planning of your world in the
          game, Satisfactory.
        </p>
        <p>
          Logistics and planning are a core part of the experience in the first-person game.
          People often resort to spreadsheets or pen-and-paper planning to decide where to
          build different factories. Location depends on resource availability as well as the
          location of other factories that may consumer or supply resources to the new one.
        </p>
      </Section>
      <Section>
        <H2>Toolkit</H2>
        <p>This app is using Next.js, Redux Toolkit and Tailwind.</p>
        <p>
          I've implemented drag and drop functionality manually as an exercise, as well as used
          the html canvas element to draw connecting lines between inputs and outputs based on
          what segment of the map is in view.
        </p>
        <p></p>
      </Section>

      <Section>
        <H2>Work in Progress</H2>
        <p>
          This project is something I'm slowly chipping away at while completing various other
          projects within the bootcamp course I'm enrolled in.
        </p>
        <p>
          Previously I tried building this application with tools native to React, such as
          contexts and reducers. Given the deeply nested and complex relations between data,
          I've opted to use Redux (Toolkit) as the state manager now instead which is helping
          facilitate a much smoother developer experience.
        </p>
      </Section>
      <Section>
        <H2>Challenges</H2>
        <p>
          I'm spending a lot of time contemplating the user experience. When a change is made
          to a production-step, that change must be respected, however the app loses much of
          its potential if it doesn't automate the calculations of ingredients required, or new
          outputs produced.
        </p>
        <p>
          Another challenge is the idea of cyclical dependancies between different production
          steps. The outputs of two steps may feed into the inputs of each other, with a
          remainder amount of items left over as 'profit'. I'm revisiting some linear algebra
          concepts in the hopes of finding a method for handling these cases.
        </p>
      </Section>
    </article>
  );
};

export default Satisfactory;
