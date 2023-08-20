import React from "react";
import "./Skill.scss";

import skillImage from "./skills.png";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Skill() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-skill" : "Skill"}>
      <div className="skill-card">
        <div className="skill-heading">
          <h1>My Expertise Are In . . .</h1>
        </div>

        <div className="skill-content">
          <div className="skill-image">
            <img src={skillImage} />
          </div>

          <div className="skill-data">
            <div className="skill-tags">
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
              <div className="tag">Adaptability</div>
              <div className="tag">Ethical Awareness</div>
              <div className="tag">Leadership</div>
              <div className="tag">Persistence and Resilience</div>
              <div className="tag">Innovation</div>
            </div>

            <ul className="skill-list">
              <li>
                <b>Molecular Biology:</b> A solid understanding of molecular biology
                includes knowledge of DNA replication, transcription,
                translation, gene expression, genetic manipulation, and
                recombinant DNA technology.
              </li>
              <li>
                <b>Protein Structure and Function:</b> Understanding of techniques like
                X-ray crystallography, NMR spectroscopy, and computational
                modeling.
              </li>
              <li>
                <b>Genomics and Proteomics:</b> Proficiency in genomics (study of
                genomes) and proteomics (study of proteins) for analyzing
                large-scale biological data, identifying biomarkers, and
                understanding functional genomics.
              </li>
              <li>
                <b>Bioinformatics:</b> With the increasing availability of biological
                data, bioinformatics skills are vital. Researchers need to be
                able to analyze DNA and protein sequences, perform sequence
                alignments, and use computational tools for data analysis.
              </li>
              <li>
                <b>Chemical Biology:</b> Understanding of the intersection between
                chemistry and biology for developing chemical tools and probes
                to study biological processes.
              </li>
              <li>
                <b>Analytical Skills:</b> To interpret complex experimental data,
                identify trends, and draw meaningful conclusions. This involves
                statistical analysis, data visualization, and critical thinking.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
