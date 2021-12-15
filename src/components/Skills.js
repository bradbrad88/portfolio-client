import React from "react";
import "stylesheets/Skills.css";

const Skills = () => {
  return (
    <div className={"skills section"}>
      <h2>Skills</h2>
      <ul>
        <li>
          • GIT
          <p>Comfortable with the basics of git</p>
        </li>
        <li>
          • HTML CSS
          <p>
            Most of my learning here has been practised within a react framework.
          </p>
        </li>
        <li>
          • JAVASCRIPT
          <p></p>
        </li>
        <li>
          • REACT
          <p>
            Have spent a decent amount of time developing my own projects now,
            outside of tutorials on udemy and youtube. At least a basic-intermediate
            knowledge and definitely a foundation to work on.
          </p>
        </li>
        <li>
          • 3RD PARTY LIBRARIES
          <p>
            I've utilised OAuth, Express, Passport, Sequelize, Sharp and Draft-JS
            libraries among a few others.
          </p>
        </li>
        <li>
          • DATABASES
          <p>
            Utilised PostgreSQL with recent projects. Have used MS Access on
            workplace solutions previously.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
