import Satisfactory from "pages/projects/individual-pages/Satisfactory";
import Photography from "pages/projects/Photography";
import satisfactoryImg from "assets/satisfactory.webp";
import photographyImg from "assets/bg.jpg";
export interface Project {
  id: string;
  path: string;
  title: string;
  repos: string[];
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
    desc: "PERN stack project",
    complete: false,
    page: <Satisfactory />,
    image: satisfactoryImg,
  },
  {
    id: "photography",
    path: "react-photography",
    title: "React Photography",
    repos: [],
    desc: "",
    complete: false,
    page: <Photography />,
    image: photographyImg,
  },
];

export default projects;
