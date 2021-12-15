import React from "react";
import PortfolioCard from "./PortfolioCard";
import imgSatisfactory from "assets/satisfactory.webp";
import imgGithub from "assets/github.png";
import "stylesheets/Portfolio.css";
const imgFarOut =
  "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const portfolio = [
  {
    title: "Satisfactory Planner",
    description: `This is a React project that handles asset management and optimising .
    
    Satisfactory is a complex game TODO.

    This project is designed to help the player plan out their factories with 100% efficiency.
    
    My 2nd React project set out to be a data driven one but encountered plenty of UI challenges.`,
    image: imgSatisfactory,
    repos: [
      {
        url: "https://github.com/bradbrad88/satisfactory-client",
        text: "Front end",
        id: 1,
      },
      {
        url: "https://github.com/bradbrad88/satisfactory-server",
        text: "Back end",
        id: 2,
      },
    ],
    id: 1,
    site: {
      url: "/",
      text: "Live site",
    },
  },
  {
    title: "Far Out Photography",
    description: `A first attempt at putting together a web-app. Using React as the frame work I put together a site for a photographer friend.
    
    This project tackled a few concepts around socials, authentication/authorisation with oauth and passport, rich text editing and basic photo manipulation (resizing).
    
    Storing photos in an S3 bucket and handling links to thumbnail/high-res versions in a PostgreSQL db. Tackled some landing page scolling animation concepts as well as implementing a UI so that the friend could set up his own custom galleries with drag & drop functionality.
    
    Recursive comment and reply section.`,
    image: imgFarOut,
    repos: [
      {
        img: imgGithub,
        url: "https://github.com/bradbrad88/satisfactory-client",
        text: "Front end",
        id: 1,
      },
      {
        img: imgGithub,
        url: "https://github.com/bradbrad88/satisfactory-server",
        text: "Back end",
        id: 2,
      },
    ],
    id: 1,
    site: {
      url: "/",
      text: "Live site",
    },
  },
];

const Portfolio = () => {
  const renderPortfolio = portfolio => {
    return portfolio.map(item => {
      return (
        <PortfolioCard
          title={item.title}
          description={item.description}
          url={item.url}
          urlText={item.urlText}
          image={item.image}
          active={true}
          id={item.id}
          repos={item.repos}
          key={item.id}
          site={item.site}
        />
      );
    });
  };

  return (
    <div className={"portfolio section"}>
      <h2>Portfolio</h2>
      <div className={"portfolio-items"}>{renderPortfolio(portfolio)}</div>
    </div>
  );
};
export default Portfolio;
