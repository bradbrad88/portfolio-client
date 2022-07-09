interface Concept {
  description: string;
  stars: 1 | 2 | 3 | 4 | 5;
  comment?: string;
}

interface Skill {
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
          "Some expreience with Bootstrap and actively using SCSS. Quite sure I have not even scratched the surface on SCSS yet however.",
      },
      {
        description: "CSS Basics",
        stars: 4,
        comment:
          "Confident I can achieve nearly any design, given enough time. Good knowledge of selectors, formatting and layouts.",
      },
      {
        description: "CSS Layous",
        stars: 4,
        comment:
          "Comfortable with grid and flex systems. Not to brag but I once centred an element 😜\nTried",
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
        description: "Typescript",
        stars: 3,
        comment:
          "Intermediate stages of typescript. Comfortable creating generic types. Have had success in creating functions that required generics to be inferred dynamically based ",
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
      { description: "Context", stars: 4, comment: "" },
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
];

export default skills;
