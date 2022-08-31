import Section from "components/elements/Section";
import H2 from "components/elements/H2";

const PasswordGenerator = () => {
  return (
    <article>
      <Section>
        <H2>Overview</H2>
        <p>
          A collaborative project where the four of us went about designing an application to
          assist in finding new and interesting recipes. The project was born out of a desire
          to mitigate the tedium of deciding what to cook or order every night.
        </p>
        <p>
          The result was a swipe-card approach powered by the Edamam Recipe API, utilising
          random results filtered by dietary requirements of the user that persist in local
          storage.
        </p>
      </Section>
      <Section>
        <H2>Implementation</H2>
        <p>
          Using a front-end framework was not an option given the experience of most of our
          team was limited to vanilla HTML and JavaScript.
        </p>
        <p>
          We opted for an approach where we rendered the app in a single HTML file and set
          sections as hidden until required. This resulted in about 5 {"<main>"} sections that
          we could navigate to as desired.
        </p>
        <p>
          The Edamam API was handled with a class object that was responsible for preparing
          queries, accessing resulting data and holding static properties related to the Edamam
          query options. The class held an array of recipe objects (maximum of 20) that were
          consumed upon rendering to the DOM. The class exposed a method called getRecipe that
          would retrieve a recipe and top up the recipes in storage with another query to
          Edamam if necessary.
        </p>
      </Section>
      <Section>
        <H2>The Experience</H2>
        <p>
          This was my first collaborative project and it was an awesome learning experience. At
          this point, I had quite a bit more experience in developing than the rest of the team
          so I took on a team leader position.
        </p>
        <p>
          We contributed to the project by submitting pull requests that required at least one
          other team member to authorise.
        </p>
        <p>
          We organised ourselves with an Agile methodology, using the Github Projects Kanban
          board, creating issues with acceptance criteria and meeting regularly to scrum.
        </p>
        <p>
          Overall the project was a success, we were able to deliver an MVP (minimum viable
          product) and present it to a group. The application solved the problem that we set
          out to achieve and I firmly believe that the 4 of us walked away from the experience
          with a lot more knowledge, confidence and excitement to tackle the next challenge.
        </p>
      </Section>
    </article>
  );
};

export default PasswordGenerator;
