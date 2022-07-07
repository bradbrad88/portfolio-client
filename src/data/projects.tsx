import Satisfactory from "pages/projects/individual-pages/Satisfactory";
import Photography from "pages/projects/individual-pages/Photography";
import Quizzles from "pages/projects/individual-pages/Quizzles";
import PasswordGenerator from "pages/projects/individual-pages/PasswordGenerator";
import satisfactoryImg from "assets/satisfactory.webp";
import photographyImg from "assets/bg.jpg";
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
  page: React.ReactNode;
  image: string;
  feature?: boolean;
}

const projects: Project[] = [
  {
    id: "satisfactory",
    path: "satisfactory-planner",
    title: "Satisfactory Planner",
    repos: [
      { link: "https://github.com/bradbrad88/satisfactory-client", text: "Github - client" },
      { link: "https://github.com/bradbrad88/satisfactory-server", text: "Github - server" },
    ],
    desc: "PERN stack project.",
    complete: false,
    page: <Satisfactory />,
    image: satisfactoryImg,
    feature: true,
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
    page: <Photography />,
    image: photographyImg,
    feature: true,
  },
  {
    id: "pwgen",
    page: <PasswordGenerator />,
    title: "Password Generator",
    complete: true,
    desc: "Vanialla HTML, CSS and JS. A simple application that generates random passwords with the ability to set a few parameters.",
    image: pwgenImg,
    path: "pw-generator",
    repos: [{ link: "https://github.com/bradbrad88/password-generator", text: "Github" }],
  },
  {
    id: "quizzles",
    page: <Quizzles />,
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
