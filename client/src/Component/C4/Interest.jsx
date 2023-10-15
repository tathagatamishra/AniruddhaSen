import React from "react";
import "./Interest.scss";
import researchImage from "./data.png";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Interest() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-interest" : "Interest"}>
      <div className="interest-card">
        <div className="interest-heading">
          <h1>Research Interests</h1>
        </div>

        <div className="interest-content">
          <div className="interest-data">
            <div className="interest-tags">
              <div className="tag">Genomics</div>
              <div className="tag">Bioinformatics</div>
              <div className="tag">Laboratory Techniques</div>
              <div className="tag">Experimental Design</div>
              <div className="tag">Data Analysis</div>
              <div className="tag">Critical Thinking</div>
              <div className="tag">Problem-Solving</div>
              <div className="tag">Collaboration</div>
              <div className="tag">Attention to Detail</div>
              <div className="tag">Time Management</div>
            </div>

            <ul className="interest-list">
              <li>
                <b>Molecular Mechanisms of Cancer:</b> nvestigating the genetic
                and biochemical factors contributing to the development and
                progression of cancer.
              </li>
              <li>
                <b>Metabolic Diseases and Therapeutics:</b> Exploring the
                metabolic basis of diseases like diabetes and obesity to develop
                novel therapeutic strategies.
              </li>
              <li>
                <b>Neurodegenerative Disorders:</b> Studying the biochemical
                underpinnings of diseases like Alzheimer's and Parkinson's to
                develop potential treatments.
              </li>
              <li>
                <b>Epigenetics and Disease:</b> Exploring the role of epigenetic
                modifications in various diseases and potential interventions.
              </li>
            </ul>
          </div>

          <div className="interest-image">
            <img src={researchImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
