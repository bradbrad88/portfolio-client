import { Routes, Route } from "react-router-dom";
import ProjectView from "./ProjectView";
import projects from "data/projects";

const Projects = () => {
  const renderRoutes = () => {
    return (
      <Route path="" element={<ProjectView projects={projects} />}>
        <Route
          path="/"
          element={
            <div>
              <h1>Project List Grid styles</h1>
            </div>
          }
        />
        {projects.map(project => (
          <Route path={project.path} element={project.page} key={project.path} />
        ))}
      </Route>
    );
  };

  return <Routes>{renderRoutes()}</Routes>;
};

export default Projects;
