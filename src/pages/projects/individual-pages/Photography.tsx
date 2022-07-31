import H2 from "components/elements/H2";
import Section from "components/elements/Section";
import useProject from "hooks/useProject";

const Photography = () => {
  const project = useProject();
  if (!project) return null;
  return (
    <article>
      <Section>
        <H2>Overview</H2>
        <p>
          Full stack project covering account management, Oauth and image manipulation. It
          allows the user to build their own photo albums without limiting them to a grid
          (unless they want that).
        </p>
        <p>
          Built in the same vain as Instagram, it is a social platform at heart. This project
          spawned from a smaller project where I built an interface for a website owner to
          easily create their own image galleries with drag-and-drop functionality.
        </p>
        <p></p>
      </Section>
      <Section>
        <H2>Auth and Auth</H2>
        <p>
          This project was a huge learning curve for me in terms of authentication and
          authorisation. I landed on a magic-link style login method, or the option to use
          Google or Facebook authentication with Oauth2.
        </p>
        <p>
          I did build a username/password method but replaced it when I realised the overlap
          with magic-link. My assumption was that the percentage of times a user would forget
          their password would be extremely high, so the user experience would be far more
          friendly if the process omitted the pain of trying to remember, and went straight to
          email authentication.
        </p>
        <p>
          I use Json Web Tokens within a custom built url for a user when they try to login
          with magic-link. I sign the JWT with a secret code from my server and load it with a
          unique code as well. I am also contemplating the idea of generating a code in local
          storage on the user's browser to verify that an authentication request came from the
          same location, but I'm concerned about the issues that would arise from requesting a
          code in one browser context and then redeeming it on another. Perhaps an IP address
          component would work.
        </p>
      </Section>
      <Section>
        <H2>The Canvas Problem</H2>
        <p>
          I wanted the user to be able to place images on a canvas in a free-form style. I also
          wanted the app to be responsive.
        </p>
        <p>
          I struggled with a coordinate system for a while, trying to figure out how it would
          work. On a fixed width canvas, I could position the image absolutely and set the
          'top', 'left', 'width' and 'height' properties without issue. Once things became
          responsive, these properties needed to be relative in nature. Setting the 'width' and
          'left' properties wasn't an issue here, but the 'top' and 'height' required more
          thought.
        </p>
        <p>
          With the height of the canvas being dynamic, there was no way to simply set 'height'
          and 'top' properties as a percentage of this. They would need to be relative to the
          width. I opted for absolute positioning and applying a scale to it. The scale could
          be calculated whenever a screen size change occurs, and then simply applied to
          arbitrary coordinates. Maybe not the simplest solution looking back now, but it's
          doing the job and is quite straightforward to work with.
        </p>
      </Section>
    </article>
  );
};

export default Photography;
