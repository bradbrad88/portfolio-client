import Satisfactory from "pages/projects/individual-pages/Satisfactory";
import Photography from "pages/projects/Photography";
import satisfactoryImg from "assets/satisfactory.webp";
import photographyImg from "assets/bg.jpg";
import pwgenImg from "assets/pwgen.gif";
import quizzlesImg from "assets/quizzles.gif";
export interface Project {
  id: string;
  path: string;
  title: string;
  repos: string[];
  deployed?: string;
  desc: string;
  complete: boolean;
  page: React.ReactNode;
  image: string;
}

const projects: Project[] = [
  {
    id: "satisfactory",
    path: "satisfactory-planner",
    title: "Satisfactory Planner",
    repos: [
      "https://github.com/bradbrad88/satisfactory-client",
      "https://github.com/bradbrad88/satisfactory-server",
    ],
    desc: "PERN stack project.",
    complete: false,
    page: <Satisfactory />,
    image: satisfactoryImg,
  },
  {
    id: "photography",
    path: "react-photography",
    title: "React Photography",
    repos: [
      "https://github.com/bradbrad88/photography-client",
      "https://github.com/bradbrad88/photography-server",
    ],
    desc: "PERN stack project featuring account management.",
    complete: false,
    page: <Photography />,
    image: photographyImg,
  },
  {
    id: "pwgen",
    page: (
      <div>
        <h1>PW Generator</h1>
      </div>
    ),
    title: "Password Generator",
    complete: true,
    desc: "Vanialla HTML, CSS and JS. A simple application that generates random passwords with the ability to set a few parameters.",
    image: pwgenImg,
    path: "pw-generator",
    repos: ["https://github.com/bradbrad88/password-generator"],
  },
  {
    id: "quizzles",
    page: (
      <div>
        <h1>Quizzles</h1>
      </div>
    ),
    title: "Quizzles",
    complete: true,
    desc: "Vanialla HTML, CSS and JS. Renders components dynamically to produce a multiple-choice style game.",
    image: quizzlesImg,
    path: "quizzles",
    repos: ["https://github.com/bradbrad88/code-quiz"],
    deployed: "https://bradbrad88.github.io/code-quiz/",
  },
];

export default projects;
