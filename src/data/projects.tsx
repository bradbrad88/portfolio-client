import Satisfactory from "pages/projects/Satisfactory";
import Photography from "pages/projects/Photography";
export interface Project {
  path: string;
  title: string;
  repos: string[];
  desc: string;
  complete: boolean;
  page: React.ReactNode;
}

const projects: Project[] = [
  {
    path: "satisfactory-planner",
    title: "Satisfactory Planner",
    repos: [],
    desc: "",
    complete: false,
    page: <Satisfactory />,
  },
  {
    path: "react-photography",
    title: "React Photography",
    repos: [],
    desc: "",
    complete: false,
    page: <Photography />,
  },
];

export default projects;
