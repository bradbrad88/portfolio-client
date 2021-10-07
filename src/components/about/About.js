import React from "react";
import Card from "./Card";
import desk from "../../assets/desk.jpg";
import "../../stylesheets/About.css";

const About = () => {
  return (
    <div className={"container"}>
      {/* <Card /> */}
      <div className="card">
        <h2>to the point</h2>
        <p>
          intrinsically motivated, seeking career change and cognitively capable when
          caffeinated
        </p>
      </div>
      <div className="card">
        <h2>technologies i've played with</h2>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
          <li>react</li>
          <li>git</li>
          <li>node</li>
          <li>express</li>
          <li>postgres</li>
        </ul>
      </div>
      <div className="card">
        <h2>I have some experience in:</h2>
        <ul>
          <li>unit testing</li>
          <li>continuous integration/deployment</li>
          <li>object relational mapping with sequelize</li>
          <li>typescript</li>
          <li>oauth with google</li>
          <li>backend server authentication</li>
        </ul>
      </div>
      <div className="card">
        <h2>personal stuff</h2>
        <p>long walks on the beach</p>
      </div>
    </div>
  );
};

export default About;
