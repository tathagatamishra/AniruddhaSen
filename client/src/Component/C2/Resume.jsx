import React from "react";
import "./Resume.scss";
import cvImage from "./cv-image.png";

export default function Resume() {

  function handleDownload() {
    const link = document.createElement("a");
    link.href = './DEMO.pdf';
    link.target = "_blank"; // Open the link in a new tab
    link.rel = "noopener noreferrer";
    link.click();
  }

  return (
    <div className="Resume">

      <div className="resume-card">
        <div className="cv-lt">

          <div className="cv-text"><div className="dot"></div>Get a copy of my resume</div>
          
          <div className="cv-btn">
            <button>View</button>
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
