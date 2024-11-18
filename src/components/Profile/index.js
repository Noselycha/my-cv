// src/components/Profile.js
import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "profile");

    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      setProfile(data);
    });
  }, []);
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src="./images/likaprofile3.png"
          alt="Profile picture"
          className="about-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">{profile.subtitle}</p>
        <h1 className="title">{profile.title}</h1>
      </div>
    </section>
  );
}

export default Profile;
