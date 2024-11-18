// src/components/Experience.js
import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
function Experience() {
  const [experience, setExperience] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const experienceRef = ref(db, "experience");

    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      setExperience(data);
    });
  }, []);

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">{experience.title}</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">{experience.title}</h2>
            <div className="article-container">
              <article>
                <img
                  src="./images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="./images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                  <br />
                </div>
              </article>
              <article>
                <img
                  src="./images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="./images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React JS</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./images/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
  );
}

export default Experience;
