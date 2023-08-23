import React from "react";
import "./Resume.scss";
import cvImage from "./cv-image.png";

import { useDarkMode } from '../../assets/DarkModeContext';

export default function Resume() {

  const { isDarkMode } = useDarkMode();

  function handleDownload() {
    const link = document.createElement("a");
    link.href = 'https://raw.githubusercontent.com/tathagatamishra/AniruddhaSen/9d983eac1c4aa13443049fa0076e3c89359de544/client/src/Component/C2/DEMO.pdf';
    link.target = "_blank"; // Open the link in a new tab
    link.rel = "noopener noreferrer";
    link.click();
  }

  function handleView() {
    const link = document.createElement("a");
    link.href = 'https://drive.google.com/file/d/1exZOsuXLdEyrwVwZ2I0mhjA-k7BwvSw8/view?usp=sharing';
    link.target = "_blank"; // Open the link in a new tab
    link.rel = "noopener noreferrer";
    link.click();
  }

  return (
    <div className={isDarkMode ? 'dark-resume' : 'Resume'}>

      <div className="resume-card">
        <div className="cv-lt">

          <div className="cv-text">
            <div className="dot"></div>
            <h1>Get a copy of my resume</h1>
            </div>
          
          <div className="cv-btn">
            <button onClick={handleView}>View</button>
            <button onClick={handleDownload}>Download</button>
          </div>

        </div>

        <div className="cv-rt">
          <img src={cvImage} />
        </div>

      </div>
    </div>
  );
}
