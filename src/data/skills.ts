import Skill from "pages/skills/Skill";

interface Concept {
  description: string;
  stars: 1 | 2 | 3 | 4 | 5;
  comment?: string;
}

export interface Skill {
  skill: string;
  concepts: Concept[];
}

const skills: Skill[] = [
  {
    skill: "HTML and CSS",
    concepts: [
      {
        description: "Semantic Html",
        stars: 4,
        comment: "Confident with a good range of semantic HTML elements.",
      },
      {
        description: "Accessibility",
        stars: 2,
        comment:
          "Inexperienced with Aria labels but familiar with details such as alt text and contrast ratios.",
      },
      {
        description: "Responsive Design",
        stars: 4,
        comment:
          "Able to achieve responsive designs through CSS media queries, CSS layout systems as well as Tailwind/Bootstrap techniques.",
      },

      {
        description: "Libraries and Extensions",
        stars: 3,
        comment:
          "Some experience with Bootstrap and actively using SCSS. Currently using Tailwind in more recent React projects.",
      },
      {
        description: "CSS Basics",
        stars: 4,
        comment:
          "Confident I can achieve nearly any design, given time. Good knowledge of selectors, formatting and layouts.",
      },
      {
        description: "CSS Layous",
        stars: 4,
        comment:
          "Comfortable with grid and flex systems. Solid understanding of the box model.",
      },
    ],
  },
  {
    skill: "Javascript",
    concepts: [
      {
        description: "In General",
        stars: 4,
        comment:
          "Completed freeCodeCamp's Javascript course. Utilise codewars.com training. Have solved many issues in day-to-day work on projects. Reasonable understanding of the call stack, prototype inheritance and object references.",
      },
      {
        description: "ES6",
        stars: 4,
        comment:
          "Across most ES6 syntax, including array methods, arrow functions, spread operators, destructuring, async/await ",
      },
      {
        description: "Regular Expressions",
        stars: 4,
        comment:
          "Able to create from scratch but know when to utilise existing solutions. Had some practise in freeCodeCamp and codewars. Created and unit tested an expression that hyphenated a title to be used in a URL.",
      },
      {
        description: "Browser",
        stars: 4,
        comment:
          "Have had some good practice at creating elements with the Document API. Some experience with Location and Navigation APIs, event handling including bubbling and delegation. Familiar with AJAX technique and sending different kinds of requests.",
      },
      {
        description: "jQuery",
        stars: 3,
        comment: "Have used and studied jQuery in boot camp course work.",
      },
      {
        description: "Typescript",
        stars: 3,
        comment:
          "Intermediate stages of typescript. Comfortable creating generic types. Have had success in creating functions that required generics to be inferred dynamically based on argument types.",
      },
    ],
  },
  {
    skill: "Git",
    concepts: [
      {
        description: "General Understanding",
        stars: 3,
        comment:
          "Comfortable with the basics; able to commit, ignore, manage branches, stash and reset",
      },
      {
        description: "Three Trees",
        stars: 3,
        comment:
          "Modest understand of the three trees of git - the working directory, staging index and commit history.",
      },
      {
        description: "Rebasing",
        stars: 3,
        comment:
          "Experimented with rebasing in a collaborative project and now understand that the process will create a new set of commits from where the branch initially diverged. The new commits are based on the current head of the branch specified (generally main branch) and may result in having to resolve conflicts on each commit in the chain depending on circumstances. The result is a linear set of commits that can be pulled into the main branch. This means the main branch can keep all commits without squashing them and have them flow in a one dimensional timeline, allowing for much easier analysis of problems that may have been introduced.",
      },
      {
        description: "Collaboration",
        stars: 3,
        comment:
          "Recently had success completing a collaborative project with 3 other people. We protected the main branch and submitted pull requests that required authorisation by at least one other person. This provided excellent practice in navigating multiple features concurrently and resolving code conflicts.",
      },
    ],
  },
  {
    skill: "React",
    concepts: [
      {
        description: "Class Components",
        stars: 3,
        comment:
          "Have created and debugged class components on occasion. Able to deal with state and refs, component lifecycle and rendering method.",
      },
      {
        description: "Functional Components",
        stars: 4,
        comment:
          "My default for creating components. Very comfortable with most aspects of functional components.",
      },
      {
        description: "Hooks (Custom and Provided)",
        stars: 5,
        comment:
          "Good understanding of the build-in hooks as well as using 3rd party ones. Have also become proficient at recognising when component logic can be extracted as a hook and reused within an application. Good understanding of the rendering implications of state changes within hooks and the instance scope.",
      },
      {
        description: "State",
        stars: 4,
        comment:
          "Competent with managing state and a good understanding of renders performed due to state change. Able to memoize data when required. ",
      },
      {
        description: "Context",
        stars: 4,
        comment: "Have worked with both class and functional context. ",
      },
      {
        description: "Routing",
        stars: 3,
        comment:
          "Currently using React Router V6 with this site. Have some experience with version 5 as well. Have discovered that routing is best kept simple and organised.",
      },
      {
        description: "Typescript with React",
        stars: 3,
        comment:
          "A little rough but making progress with typing in React. Have encountered difficulties with typing contexts where typescript expects the possibility of a null value that will never happen. Have found solutions to all the issues I've encountered but it can be time consuming.",
      },
    ],
  },
  {
    skill: "Node",
    concepts: [
      {
        description: "Node Modules",
        stars: 3,
        comment:
          "Have some experience with the console, file system, OS, path, process, http and crypto modules. ",
      },
      {
        description: "Express",
        stars: 4,
        comment:
          "Comfortable with the core elements of Express. Able to handle errors, route effectively, write and implement middleware and process responses.",
      },
      {
        description: "Libraries",
        stars: 3,
        comment:
          "Some experience with Sequelize, Passport, Bcrypt, Express-Sessions, Jsonwebtoken, AWS-SDK, Multer, Nodemailer, Sharp (image manipulation)",
      },
      {
        description: "Object Relational Mapping",
        stars: 3,
        comment:
          "Experience using Sequelize as an ORM for PostgreSQL as well as using pure SQL queries.",
      },
    ],
  },
  {
    skill: "Databases",
    concepts: [
      {
        description: "Relational Databases",
        stars: 3,
        comment:
          "Confident in building relational data structures. I've had experience in building programs in MS Access that were used in the business I worked in for a few years. The programs contained data on employees in relation to business compliance, for example, who had signed off on Safe Work Practices, who had been onboarded correctly based on which department they were hired into. I created a number of other small utility applications to replace spreadsheets and make my life easier. One of these addressed stock ordering, helping me to achieve some of the best results in terms of minimising stock on hand while almost never running out of items. Currently using PostgreSQL in several applications in development.",
      },
      {
        description: "Indexing",
        stars: 2,
        comment:
          "An understanding that there are a number of different ways to index a field to optimise it based on how it is most commonly accessed (read/write). I also understand that there is a trade-off in terms of space required and that write times become more expensive. Don't have an intimate understanding of different index types at this point.",
      },
      {
        description: "Sql Language",
        stars: 3,
        comment:
          "Still much to learn but able to do most of the basics in terms of CRUD operations, joins, aggregation and analysis.",
      },
    ],
  },
  {
    skill: "Test Driven Development",
    concepts: [
      {
        description: "Unit Testing",
        stars: 3,
        comment:
          "Have used Jest in a recent project to attain 100% code coverage. The project (team profile generator) was a command-line application used to create an HTML file displaying team details. The project took an object oriented design and required that all objects were thoroughly tested.",
      },
      {
        description: "Testing Experience",
        stars: 3,
        comment:
          "Testing exceptions, testing asynchronous code and mocking modules and their return values. One challege I faced was trying to look for an object in an array of objects that contained certain properties; not an exact match but a minimum set of expected properties. The syntax became tricky however I was able to break the problem down and get individual parts of the test working until I could then create a 2 dimensional loop to properly handle the test.",
      },
      {
        description: "Test Coverage",
        stars: 3,
        comment:
          "Went to the effort of linking a Github repository with Codecov and automating the process of generating a coverage report using Github Actions. The end result was a tasty badge on the README.md file. And code coverage I guess...",
      },
    ],
  },
];

export default skills;
