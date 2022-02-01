import React from "react";
import "stylesheets/About.scss";

const About = () => {
  return (
    <div className={"about section"}>
      <h2>About Me</h2>
      {/* <p>
        My entire working career has been within hospitality, however I'm excited to
        move into a developer role as soon as possible.
      </p>
      <p>
        My previous role was the assistant manager at the Hampstead Hotel. 3 years in
        that position allowed me to create IT solutions for a number of processes.
        These included accounting, stock ordering/management, gaming reporting,
        in-house communication and regulatory compliance.
      </p>
      <p>
        These programs were only built with Excel and Access, however they gave me
        the taste for what could be achieved with thoughtful programming.
      </p>
      <p>
        I have since focused on web development, specifically using React as a
        framework of choice and pursued a number of Udemy tutorials.
      </p> */}
      <div className="about__items">
        <div className="card">
          <h3>Career</h3>
          <p>Hospitality background - looking to pursue a developer's career</p>
          <p>
            Assistant manager in high-performing hotel - acting venue manager 2020
          </p>
          <p>
            Developed Access and Excel solutions to numerous processes and gained a
            taste for programming
          </p>
          <p>
            Since focused in web dev area with the help of Udemy, Youtube,
            documentation and various people to progress
          </p>
        </div>
        <div className="card">
          <h3>Personal</h3>
          <p>
            Enjoys sports and fitness - basketball on weekends and jogs on Anstey's
            Hill
          </p>
          <p>
            Unwinds with video games - currently Rocket League, Age of Empires, Halo
          </p>
          <p>Music lover and drummer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
