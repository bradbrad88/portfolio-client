import Syntaxer from "components/utils/Syntaxer";
import useProject from "hooks/useProject";

const PasswordGenerator = () => {
  const project = useProject();
  if (!project) return null;

  return (
    <article>
      <section>
        <h2>The Algorithm</h2>
        <p>
          There are four options that can be toggled - lowercase, uppercase, numeric and
          special characters.
        </p>
        <p>
          The algorithm I created ensures that every option selected is used at least once, but
          a random amount more. Each character is inserted into the password at a random
          location so that the final password doesn't have a pattern of character types,
          maximising entropy.
        </p>
        <p>
          I created a function for each of the options, eg: getLower, getUpper etc. Given that
          the options were dynamic, it made sense to me to build an array of these functions
          based on options selected. For example, if the user selected lowercase, uppercase and
          numeric characters we would get an array:
        </p>
        <Syntaxer code={`const functionArray = [getLower, getUpper, getNumeric]`} />
        <p>
          I chose this method so that I could access functions randomly using the array index,
          meaning that each character type would be used a random number of times.
        </p>
        <Syntaxer
          code={`const idx = Math.floor(Math.random() * functionArray.length);
functionArray[idx]();`}
        />
        <p></p>
      </section>
      <section>
        <h2>The Animation</h2>
        <p>
          Saddened that the project was over before I'd had my fill of it, I had a crack at
          making it a bit more visually appealing. The animation begins after the password has
          been generated, holding onto the intended password that meets the criteria to set as
          the final value.
        </p>
        <p>
          The animation begins by creating a Span element for each password character, setting
          the intended letter as the inner text. A function grabs the parent container and
          creates an array from its children, the spans, and uses a forEach loop to run an
          animation function on each element.
        </p>
        <p>
          The animation function holds the intended character in memory to set on the final
          loop. An interval is set to run after an initial delay. The interval is consistent,
          the delay is randomised using a setTimeout function. The characters used in the
          animation are not consistent with the options set, they are randomly selected from a
          string of placeholder text.
        </p>
        <p></p>
      </section>
    </article>
  );
};

export default PasswordGenerator;
