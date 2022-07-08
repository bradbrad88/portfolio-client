import { Routes, Route } from "react-router-dom";
import ProjectView from "./ProjectView";
import ProjectsHome from "./ProjectsHome";
import projects from "data/projects";
import "stylesheets/Projects.scss";

const Projects = () => {
  const renderRoutes = () => {
    return (
      <Route path="" element={<ProjectView projects={projects} />}>
        <Route path="/" element={<ProjectsHome projects={projects} />} />
        {projects.map(project => (
          <Route path={project.path} element={project.page} key={project.path} />
        ))}
      </Route>
    );
  };

  return <Routes>{renderRoutes()}</Routes>;
};

export default Projects;
