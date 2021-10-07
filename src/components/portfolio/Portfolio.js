import React, { useContext } from "react";
import Card from "./Card";
import PortfolioContext from "../../contexts/portfolioContext";

// import satisfactoryImage from "../../../public/satisfactory.webp";

// const portfolio1 = [
//   {
//     id: 1,
//     title: "Photography",
//     description: `The first project I tackled that saw me finally stepping out of tutorial hell was a website for a photographer friend.

//   To clarify, they had ambitions to start a photography business 'one of these days', and I offered to help him start putting together a site.
//   I wanted something more ambitious than a static content site, so I focussed on how I could bring in web-app functionality to an otherwise static concept.

//   My goal became offering a full UI experience for the site-owner.

//   I wanted to give them interactive ways to update their own site, from blog posting to image gallery design, socials as well as develop a custom landing page.

//   I landed with AWS S3 buckets to host images and Heroku to host the app, both React client and Node backend. I utilised the Google Oauth system as a means for both the site owner to administer their content and potential clients to interact with photos.

//   I used the Sharp image manipulation library to render web-friendly sized images, replicating both a thumbnail and high(er) res versions. I tracked these in S3 with a PostgresQL database, along with other information relevant to the images.

//   With SQL queries being quite basic, I kept to raw SQL, opting to dive into an ORM (Sequelize) on future projects.

//   I became fascinated with the idea of providing real-time updates about the upload status of images. I landed on server-sent events to facilitate this with great results. Being a slightly lengthy process I felt it necessary to provide user feedback on their actions.

//   The blog creation side of the app required some trial and error with different libraries. The user should have the ability to add custom images to their blogs as well as a good amount of design control with a rich text editor.
//       `,
//     url: "https://far-out-client.herokuapp.com",
//     urlText: "Far Out Photography",
//     image:
//       "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//   },
//   {
//     id: 2,
//     title: "Satisfactory Planner",
//     description: `The first project I tackled that saw me finally stepping out of tutorial hell was a website for a photographer friend.

// To clarify, they had ambitions to start a photography business 'one of these days', and I offered to help him start putting together a site.
// I wanted something more ambitious than a static content site, so I focussed on how I could bring in web-app functionality to an otherwise static concept.

// My goal became offering a full UI experience for the site-owner.

// I wanted to give them interactive ways to update their own site, from blog posting to image gallery design, socials as well as develop a custom landing page.

// I landed with AWS S3 buckets to host images and Heroku to host the app, both React client and Node backend. I utilised the Google Oauth system as a means for both the site owner to administer their content and potential clients to interact with photos.
//     `,
//     url: "https://far-out-client.herokuapp.com",
//     urlText: "Satisfactory Planner",
//     image: "/satisfactory.webp",
//   },
//   {
//     id: 3,
//     title: "Pidgeon Trainer",
//     description: `The first project I tackled that saw me finally stepping out of tutorial hell was a website for a photographer friend.

// To clarify, they had ambitions to start a photography business 'one of these days', and I offered to help him start putting together a site.
// I wanted something more ambitious than a static content site, so I focussed on how I could bring in web-app functionality to an otherwise static concept.

// My goal became offering a full UI experience for the site-owner.

// I wanted to give them interactive ways to update their own site, from blog posting to image gallery design, socials as well as develop a custom landing page.

// I landed with AWS S3 buckets to host images and Heroku to host the app, both React client and Node backend. I utilised the Google Oauth system as a means for both the site owner to administer their content and potential clients to interact with photos.
//     `,
//     url: "https://far-out-client.herokuapp.com",
//     urlText: "Satisfactory Planner",
//     image: "/satisfactory.webp",
//   },
// ];

const Portfolio = () => {
  const portfolioContext = useContext(PortfolioContext);
  const renderPortfolio = portfolio => {
    return portfolio.map(item => {
      return (
        <Card
          title={item.title}
          description={item.description}
          url={item.url}
          urlText={item.urlText}
          image={item.image}
          active={true}
          id={item.id}
        />
      );
    });
  };

  return (
    <div className={"container portfolio"}>{renderPortfolio(portfolioContext)}</div>
  );
};
export default Portfolio;
