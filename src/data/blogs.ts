import React from "react";
import ExpressTypeScript from "pages/blogs/articles/ExpressTypeScript";

export interface Blog {
  path: string;
  title: string;
  date: Date;
  article: React.FunctionComponent<{ blog: Blog }>;
}

const blogs: Blog[] = [
  {
    title:
      "A Basic Guide to Setup A Node.js App with Typescript, Nodemon and ES Modules with Aliases",
    path: "express-typescript",
    date: new Date(2022, 7, 27),
    article: ExpressTypeScript,
  },
];

export default blogs;
