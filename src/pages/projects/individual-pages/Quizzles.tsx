import H2 from "components/elements/H2";
import Section from "components/elements/Section";
import useProject from "hooks/useProject";

const Quizzles = () => {
  const project = useProject();
  if (!project) return null;
  return (
    <article>
      <Section>
        <H2>The Timer</H2>
        <p>
          This project has one element I'm super proud of. The title. But the timer is a close
          second.
        </p>
        <p>
          It was created from scratch using a canvas and absolutely positioned gif. First issue
          was drawing a segment of a circle on a canvas. After a little time spent in
          documentation land and a swift trip to trial and error boulevard, I was able to draw
          out a path in a circle segment. I was able to then create a function that took a
          percentage parameter and drew the cirle based on that.
        </p>
        <p>
          Animating it became a simple task of requesting animation frames and looping
          recursively, calculating the time remaining as a percentage of the original time.
        </p>
        <p>
          I thought it would be great to add sparks to the moving corner of the timer, to give
          the whole animation a bit more punch. This was just a matter of calculating the
          position of the circumference of a circle, relative to the radius and as a percentage
          of radians. It took a bit of playing with but came together nicely.
        </p>
      </Section>
    </article>
  );
};

export default Quizzles;
