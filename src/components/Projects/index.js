// src/components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./images/project1.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <p>
              A car buying and selling website designed to ease the user
              experience for buyers and sellers. The website features vehicle
              ads with full descriptions, images and prices.
            </p>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./images/project2.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <p>
              Designed a website for Dukcapil Minahasa Utara in Figma with the
              aim of facilitating access to information and online services.
              This design allows users to see information on the files that must
              be brought when visiting the office, as well as providing online
              document processing features.
            </p>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./images/project3.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Project Three
            </h2>
            <p>
              My team and I designed a website interface to support various
              administrative needs, such as absence scanning, file registration,
              points management, as well as the delivery of information from the
              village dean and sitting information.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./images/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#contact'"
      />
    </section>
  );
};

export default Projects;
