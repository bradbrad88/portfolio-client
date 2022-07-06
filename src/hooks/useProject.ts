import { useLocation } from "react-router-dom";
import projects from "data/projects";

const useProject = () => {
  const location = useLocation();
  const projectUrl = location.pathname.split("/")[2];
  const project = projects.find(project => project.path === projectUrl);
  return project;
};

export default useProject;
