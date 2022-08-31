import { Routes, Route, useParams } from "react-router-dom";
import Main from "components/elements/Main";
import H1 from "components/elements/H1";
import H3 from "components/elements/H3";
import Projects from "./Projects";
import useDataList from "hooks/useDataList";
import projects from "data/projects";
import ProjectDetails from "./ProjectDetails";

const Article = () => {
  const params = useParams();
  const item = useDataList(params.article!, projects);
  if (!item)
    return (
      <Main>
        <H3>This project doesn't exist... yet</H3>
      </Main>
    );
  const Element = item.article;
  return (
    <Main>
      <H1>{item.title}</H1>
      <ProjectDetails project={item} />
      <Element project={item} />
    </Main>
  );
};

const ProjectsIndex = () => {
  return (
    <Routes>
      <Route index element={<Projects projects={projects} />} />
      <Route path=":article" element={<Article />} />
    </Routes>
  );
};

export default ProjectsIndex;
