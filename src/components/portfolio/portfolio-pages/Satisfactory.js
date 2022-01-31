import React from "react";
import cap1 from "assets/MapCapture.gif";
import "stylesheets/Satisfactory.scss";

const Satisfactory = () => {
  return (
    <div className="satisfactory">
      <div className="content">
        <h1>SATISFACTORY</h1>
        <h2>HIGH LEVEL PLANNING</h2>
        <p>High level planning for your Satisfactory world.</p>
        <p>
          This application was built to assist in designing factories at their most
          complicated.
        </p>
        <p>
          It allows the user to run the numbers on different recipe choices, asses
          power consumption and production building count with ease.
        </p>
        <img src={cap1} />
      </div>
    </div>
  );
};

export default Satisfactory;
