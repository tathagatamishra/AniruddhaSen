import React from "react";
import "./About.scss";
import profileImage from "./ani.jpg";
import coverImage from "./nigogosyan.jpg";
import defaultProfile from "./default-profile.png";

export default function About() {
  return (
    <div className="About">

      <div className="about-card">

        <div className="cover-image">
          <img src={coverImage} />
        </div>
        
        <div className="profile-image">

          {/* <img className="user-image" src={profileImage} /> */}

          <div className="bg-image">
            <img className="default-image" src={defaultProfile} />
          </div>
        </div>

        <div className="bio">
          <div className="bio-holder">

          <h1></h1>
          <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
