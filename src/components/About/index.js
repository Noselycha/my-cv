// src/components/About.js
import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
function About() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");

    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">{about.title}</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./images/likaprofile.jpg"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="text-container">
            <p>
              {about.subtitle1}
              <br />
              {about.subtitle2}
            </p>
          </div>
        </div>
      </div>
      <img
        src="./images/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
  );
}

export default About;
