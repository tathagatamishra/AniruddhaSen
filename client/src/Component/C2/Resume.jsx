import React from "react";
import "./Resume.scss";
import cvImage from "./cv-image.png";

export default function Resume() {
  return (
    <div className="Resume">

      <div className="resume-card">
        <div className="cv-lt">

          <div className="cv-text"></div>
          <div className="cv-btn"></div>

        </div>

        <div className="cv-rt">
          <img src={cvImage} />
        </div>

      </div>
    </div>
  );
}
