import H2 from "components/elements/H2";
import Section from "components/elements/Section";
import Syntaxer from "components/utils/Syntaxer";

const DndCharacterCreator = () => {
  return (
    <article>
      <Section>
        <H2>Overview</H2>
        <p>
          This app uses basic account management with email and password authentication using
          bcrypt for password hashing.
        </p>
        <p>
          You are able to create new fictional characters with statistics that are based on
          dice rolls, as well as store information about their story and update this as you
          need.
        </p>
      </Section>
      <Section>
        <H2>Dice Animation</H2>
        <p>
          We were originally content with settling for some pretty bland dice rolling
          animations. Maybe just flick through a few numbers to simulate the 'random'
          experience.
        </p>
        <p>
          This all changed after a quick browse through{" "}
          <a href="https://codepen.io/search/pens?q=dice">Codepen</a> where we found examples
          of three-dimensional dice rolling in space using three.js. The code required to get
          the dice floating aimlessly was quite intuitive, but the challenge would be getting
          the dice to land on a given side.
        </p>
        <p>
          The first decision was - would the value be dependant on where the dice landed, or
          would the dice land on a given value?
        </p>
        <p>
          I chose to create these dice so that their animation depended on a given value. This
          meant the value could be determined ahead of the animation and any interruption to
          the animation would not affect the application logic.
        </p>
        <p>
          Creating the algorithm for landing on a given side was surprising straight-forward. I
          created a map of the x, y and z rotations required to land on each side:
        </p>
        <Syntaxer>{`const displayRoll = {
  1: {
    x: 0,
    y: (Math.PI * 3) / 2,
    z: 0,
  },
  2: {
    x: 0,
    y: (Math.PI * 1) / 2,
    z: 0,
  },
  3: {
    x: (Math.PI * 1) / 2,
    y: 0,
    z: 0,
  },
  4: {
    x: (Math.PI * 3) / 2,
    y: 0,
    z: 0,
  },
  5: {
    x: 0,
    y: 0,
    z: 0,
  },
  6: {
    x: 0,
    y: Math.PI,
    z: 0,
  },
};`}</Syntaxer>
        <p>
          All I had to do at this point was get the dice to roll randomly for a given duration
          while making its way to those (x, y, z) rotations.
        </p>
        <p>
          I did this by making the duration variable a scale from some arbitrary number based
          on duration, down to zero.
        </p>
        <p>
          This meant I could use a formula:{" "}
          <Syntaxer>
            const xRotation = mappedValue + durationScale * fancyAnimationAlgorithm;
          </Syntaxer>
          The durationScale ending on zero means that the right hand side of the equation will
          always end up being zero, leaving only the map value that we need to land on. I did
          the same thing for the 'y' and 'z' axis rotations, using slightly different formulae
          on the right hand side of the equation to create good-looking animations.
        </p>
        <p>
          The right hand side (the part that needs to result in zero) needed to be exponential
          in nature to achieve the effect of the dice slowing down as they near the end of the
          roll. I also used a sine function on one of the axis to add to the random look of the
          roll.
        </p>
      </Section>
    </article>
  );
};

export default DndCharacterCreator;
