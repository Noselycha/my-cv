// src/components/Projects.js
import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
function Projects() {
  const [project, setProject] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const projectRef = ref(db, "project");

    onValue(projectRef, (snapshot) => {
      const data = snapshot.val();
      setProject(data);
    });
  }, []);

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">{project.title}</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./images/project1.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              {project.subtilte1}
            </h2>
            <p>{project.desc1}</p>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./images/project2.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              {project.subtilte2}
            </h2>
            <p>{project.desc2}</p>
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
              {project.subtilte3}
            </h2>
            <p>{project.desc3}</p>
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
}

export default Projects;
