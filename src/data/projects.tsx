import Nibbles from "pages/projects/individual-pages/Nibbles";
import Satisfactory from "pages/projects/individual-pages/Satisfactory";
import DndCharacterCreator from "pages/projects/individual-pages/DndCharacterCreator";
import satisfactoryVid from "assets/satisfactory.webm";
import Photography from "pages/projects/individual-pages/Photography";
import Quizzles from "pages/projects/individual-pages/Quizzles";
import PasswordGenerator from "pages/projects/individual-pages/PasswordGenerator";
import nibblesImg from "assets/nibbles.png";
import coinCharterImg from "assets/coin-charter.png";
import photographyImg from "assets/photography.avif";
import pwgenImg from "assets/pwgen.gif";
import quizzlesImg from "assets/quizzles.gif";
import dndImg from "assets/dnd.gif";

export interface Project {
  id: string;
  path: string;
  title: string;
  repos: { link: string; text: string }[];
  deployed?: string;
  desc: string;
  complete: boolean;
  article: React.FunctionComponent<{ project: Project }>;
  image?: string;
  video?: string;
  feature?: boolean;
}

const projects: Project[] = [
  {
    id: "coin-charter",
    path: "coin-charter",
    title: "Coin Charter",
    repos: [{ link: "https://github.com/bradbrad88/coin-charter", text: "Github" }],
    deployed: "https://coin-charter-au.herokuapp.com",
    desc: "MERN stack application merging crypto analysis with socials.",
    complete: true,
    article: () => null,
    image: coinCharterImg,
    feature: true,
  },
  {
    id: "satisfactory",
    path: "satisfactory-planner",
    title: "Satisfactory Planner",
    repos: [{ link: "https://github.com/bradbrad88/satisfactory", text: "Github" }],
    desc: "Next.js and Redux project assisting the design and logistics of factories in the game, Satisfactory.",
    complete: false,
    article: Satisfactory,
    video: satisfactoryVid,
    feature: true,
  },
  {
    id: "dnd",
    path: "dnd-creator",
    title: "DnD Character Creator",
    repos: [{ link: "https://github.com/SamMarch/DnD-Character-Generator", text: "Github" }],
    desc: "A collaborative project to produce a full-stack Dungeons and Dragons Charactor web app. Uses Node.js,  Express, MySQL, Sequelize, S3 and Tailwind",
    article: DndCharacterCreator,
    complete: true,
    image: dndImg,
    deployed: "https://project-2-character-creator.herokuapp.com/update/34",
  },
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
