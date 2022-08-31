import { Link } from "react-router-dom";
import Main from "components/elements/Main";
import Section from "components/elements/Section";
import H1 from "components/elements/H1";
import { Blog } from "data/blogs";

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <Link to={blog.path}>
      <li>
        <span className="underline text-xl">{blog.title}</span>
        {" - "}
        <time className="text-green no-underline" dateTime={blog.date.toDateString()}>
          {blog.date.toDateString()}
        </time>
      </li>
    </Link>
  );
};

const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const renderBlogs = () => {
    return blogs.map(blog => <BlogItem key={blog.path} blog={blog} />);
  };

  return (
    <Main>
      <H1>Blogs</H1>
      <Section>{renderBlogs()}</Section>
    </Main>
  );
};

export default Blogs;
