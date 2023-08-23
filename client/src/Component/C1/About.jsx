import React from "react";
import "./About.scss";

import profileImage from "./ani.jpg";
import defaultProfile from "./default-profile.png";

// import coverImage from "./nigogosyan.jpg";
// import coverImage from "./membrane.jpg";
import coverImage from "./rbc-fibrin.jpg";

import { useDarkMode } from '../../assets/DarkModeContext';

export default function About() {

  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark-about' : 'About'}>

      <div className="about-card">

        <div className="profile-image">

          <img className="user-image" src={profileImage} />

          <div className="bg-image">
            <img className="default-image" src={defaultProfile} />
          </div>
        </div>
        
        <div className="cover-image">
          <div className="cover-shadow"></div>
          <img src={coverImage} />
        </div>

        <div className="bio">
          <div className="bio-holder">
            <h1 className="bio-name">Aniruddha Sen</h1>

            <div className="bio-info">
              <p className="bio-topics">Bioinformatics Specialist</p>
              
              <div className="bio-tags">
                <div className="tag">Transcridivtomics</div>
                <div className="tag">Genomics</div>
                <div className="tag">Metagenomics</div>
              </div>
            </div>

            <p className="bio-description">Specialized in the study of the chemical processes and molecular mechanisms that underlie the structure, function, and regulation of biological molecules within living organisms. These researchers investigate the interactions, transformations, and reactions of biomolecules such as proteins, nucleic acids, lipids, carbohydrates, and small molecules, with the goal of understanding the fundamental principles governing life at the molecular level.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
