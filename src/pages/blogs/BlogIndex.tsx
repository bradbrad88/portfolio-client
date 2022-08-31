import { Routes, Route, useParams } from "react-router-dom";
import Main from "components/elements/Main";

import Blogs from "./Blogs";
import useArticle from "hooks/useDataList";
import blogs from "data/blogs";
import H3 from "components/elements/H3";

const Article = () => {
  const params = useParams();
  const item = useArticle(params.article!, blogs);
  if (!item)
    return (
      <Main>
        <H3>Couldn't find this blog...</H3>
      </Main>
    );
  const Element = item.article;
  return (
    <Main>
      <Element blog={item} />
    </Main>
  );
};

const BlogsIndex = () => {
  return (
    <Routes>
      <Route index element={<Blogs blogs={blogs} />} />
      <Route path=":article" element={<Article />} />
    </Routes>
  );
};

export default BlogsIndex;
