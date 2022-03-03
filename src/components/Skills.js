import React from "react";
import "stylesheets/Skills.scss";

const Skills = () => {
  return (
    <div className={"skills section"}>
      <h2>Skills</h2>
      <ul>
        <li>
          <h3>GIT</h3>
          <p>
            Comfortable with the basics of git. Enough knowledge to get out of
            trouble.
          </p>
        </li>
        <li>
          <h3>HTML & CSS</h3>
          <p>
            Competent at building a with a good range of HTML elements and able to
            style pages responsively. Have mostly worked with raw CSS but have
            recently enjoyed working with Sass. Most of my learning here has been
            practised within a react framework.
          </p>
        </li>
        <li>
          <h3>JAVASCRIPT</h3>
          <p>
            Have practiced with ES5 and ES6 syntaxes. Comfortable with object
            referential equality, recursion concepts, regex, classes and functional
            programming.
            <ul>
              <li>
                <a
                  href="https://freecodecamp.org/certification/fcc6977236b-7ae3-4420-8096-7ca9e9ff4adf/javascript-algorithms-and-data-structures"
                  target={"_blank"}
                >
                  freeCodeCamp Javascript Algorithms and Data Structures
                  Certification (300 hours)
                </a>
              </li>
            </ul>
          </p>
        </li>
        <li>
          <h3>REACT</h3>
          <p>
            Have spent a decent amount of time developing my own projects now,
            outside of tutorials on udemy and youtube. At least a basic-intermediate
            knowledge and definitely a foundation to work on.
          </p>
        </li>
        <li>
          <h3>3RD PARTY LIBRARIES</h3>
          <p>
            I've utilised OAuth, Express, Passport, Sequelize, Sharp and Draft-JS
            libraries among a few others.
          </p>
        </li>
        <li>
          <h3>DATABASES</h3>
          <p>
            Utilised PostgreSQL with recent projects using raw queries as well as
            with Sequelize (an ORM library). Have used MS Access on workplace
            solutions previously.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
