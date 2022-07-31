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
        comment:
          "Able to use most semantic Html elements as intended. Room for more experience with",
      },
      {
        description: "Accessibility",
        stars: 2,
        comment:
          "Inexperienced with Aria labels. Across details such as alt text and contrast ratios.",
      },
      {
        description: "Responsive Design",
        stars: 4,
        comment:
          "Able to achieve good quality responsiveness through custom CSS or Bootstrap.",
      },

      {
        description: "Libraries and Extensions",
        stars: 3,
        comment:
          "Some expreience with Bootstrap and actively using SCSS. Recently touched on Tailwind which seems like a great fit with React.",
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
        description: "In Browser",
        stars: 4,
        comment:
          "Have had some good practice at creating elements with the Document API. Some experience with Location and Navigation APIs, event handling including bubbling and delegation. Familiar with AJAX technique and sending different kinds of requests.",
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
          "Comfortable with the basics; able to commit, ignore, branch, merge and rebase. ",
      },
      {
        description: "Collaboration",
        stars: 3,
        comment:
          "Recently had success completing a collaborative project with 3 other people. We protected the main branch and submitted pull requests that required authorisation by at least one other person. This provided excellent practice in navigating multiple features concurrently.",
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
    ],
  },
  {
    skill: "Databases",
    concepts: [
      {
        description: "Relational Databases",
        stars: 3,
        comment:
          "Only rating myself a 3 in terms of confidence here given that I've had a glimpse as to how involved DB architecture and admin can be. I'm fairly confident in building up simple data structures. I've had experience in building programs in MS Access that were used in the business I worked in for a few years. The programs contained data on employees in relation to business compliance, for example, who had signed off on Safe Work Practices, who had been onboarded correctly based on which department they were hired into. I created a number of other small utility applications to replace spreadsheets and make my life easier. One of these addressed stock ordering, helping me to achieve some of the best results in terms of minimising stock on hand while almost never running out of items. Currently using PostgreSQL in several applications in development. Trying a pure SQL approach in one app and using an ORM in another.",
      },
      {
        description: "Indexing",
        stars: 2,
        comment:
          "I understand that there are a number of different ways to index a field to optimise it based on how it is most commonly accessed. I also understand that there is a trade-off in terms of space required and that write times become more expensive. I'm only familiar with a b-tree index at this point however.",
      },
      {
        description: "Sql Language",
        stars: 3,
        comment:
          "Still much to learn but able to do most of the basics in terms of CRUD operations, joins, aggregation and analysis.",
      },
      {
        description: "Redis",
        stars: 1,
        comment:
          "No practical experience with this type of DB yet. Basic understanding of how it is an in-memory db used frequently with caching.",
      },
    ],
  },
];

export default skills;
