import React from "react";
import "stylesheets/About.scss";

const About = () => {
  return (
    <div className={"about section"}>
      <h2>About Me</h2>
      <div className="about__items">
        <div className="card">
          <h3>Career</h3>
          <p>Hospitality background - looking to pursue a developer's career</p>
          <p>Assistant manager in high-performing hotel - acting venue manager 2020</p>
          <p>
            Developed Access and Excel solutions to numerous processes and gained a taste for
            programming
          </p>
          <p>
            Since focused in web dev area with the help of Udemy, Youtube, documentation and
            various people to progress
          </p>
        </div>
        <div className="card">
          <h3>Personal</h3>
          <p>Enjoys sports and fitness - basketball on weekends and jogs on Anstey's Hill</p>
          <p>Unwinds with video games - currently Rocket League, Age of Empires, Halo</p>
          <p>Music lover and drummer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
