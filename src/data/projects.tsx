import Nibbles from "pages/projects/individual-pages/Nibbles";
import Satisfactory from "pages/projects/individual-pages/Satisfactory";
import Photography from "pages/projects/individual-pages/Photography";
import Quizzles from "pages/projects/individual-pages/Quizzles";
import PasswordGenerator from "pages/projects/individual-pages/PasswordGenerator";
import nibblesImg from "assets/nibbles.png";
import satisfactoryImg from "assets/satisfactory.webp";
import photographyImg from "assets/photography.avif";
import pwgenImg from "assets/pwgen.gif";
import quizzlesImg from "assets/quizzles.gif";

export interface Project {
  id: string;
  path: string;
  title: string;
  repos: { link: string; text: string }[];
  deployed?: string;
  desc: string;
  complete: boolean;
  article: React.FunctionComponent<{ project: Project }>;
  image: string;
  feature?: boolean;
}

const projects: Project[] = [
  {
    id: "nibbles",
    path: "nibbles",
    title: "Nibbles",
    repos: [{ link: "https://github.com/rouge86/Nibbles", text: "Github" }],
    desc: "A two  week long collaborative project that provides a Tinder-esque experience with meal recipes. Features the ability to filter based on dietary requirements and stores information locally.",
    complete: true,
    article: Nibbles,
    image: nibblesImg,
    feature: true,
    deployed: "https://rouge86.github.io/Nibbles/",
  },

  {
    id: "photography",
    path: "react-photography",
    title: "React Photography",
    repos: [
      { link: "https://github.com/bradbrad88/photography-client", text: "Github - client" },
      { link: "https://github.com/bradbrad88/photography-server", text: "Github - server" },
    ],
    desc: "PERN stack project featuring account management.",
    complete: false,
    article: Photography,
    image: photographyImg,
    feature: true,
  },
  {
    id: "satisfactory",
    path: "satisfactory-planner",
    title: "Satisfactory Planner",
    repos: [
      { link: "https://github.com/bradbrad88/satisfactory-client", text: "Github - client" },
      { link: "https://github.com/bradbrad88/satisfactory-server", text: "Github - server" },
    ],
    desc: "React project assisting the design of factories in the game, Satisfactory.\nComplex relationships between the inputs and outputs of factories are best described by a graph model.",
    complete: false,
    article: Satisfactory,
    image: satisfactoryImg,
    feature: false,
  },
  {
    id: "pwgen",
    article: PasswordGenerator,
    title: "Password Generator",
    complete: true,
    desc: "Vanialla HTML, CSS and JS. A simple application that generates random passwords with the ability to set a few parameters.",
    image: pwgenImg,
    path: "pw-generator",
    repos: [{ link: "https://github.com/bradbrad88/password-generator", text: "Github" }],
  },
  {
    id: "quizzles",
    article: Quizzles,
    title: "Quizzles",
    complete: true,
    desc: "Vanialla HTML, CSS and JS. Renders components dynamically to produce a multiple-choice style game.",
    image: quizzlesImg,
    path: "quizzles",
    repos: [{ link: "https://github.com/bradbrad88/code-quiz", text: "Github" }],
    deployed: "https://bradbrad88.github.io/code-quiz/",
    feature: true,
  },
];

export default projects;
