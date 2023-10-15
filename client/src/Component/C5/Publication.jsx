import React from "react";
import "./Publication.scss";
import publicationImage from "./publication.png";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Publication() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-publication" : "Publication"}>
      <div className="publication-card">
        <div className="publication-heading">
          <h1>Publications</h1>
        </div>

        <div className="publication-content">
          <div className="publication-image">
            <img src={publicationImage} />
          </div>

          <div className="publication-data">
            <div className="pub-top"></div>

            <div className="publication-list">
              <div className="list-item">
                <h2>
                  The Role of Oxidative Stress in Neurodegenerative Diseases
                </h2>
                <p>Journal of Medical Biochemistry Research</p>
                <p>June 15, 2022</p>
                <a href="www.example.com/publication1">
                  www.example.com/publication1
                </a>
                <p>
                  This study explores the link between oxidative stress and
                  neurodegenerative diseases, providing insights into potential
                  therapeutic strategies.
                </p>
              </div>
              <div className="list-item">
                <h2>Metabolic Profiling of Breast Cancer Patients</h2>
                <p>International Journal of Medical Biochemistry</p>
                <p>October 5, 2021</p>
                <a href="www.example.com/publication2">
                  www.example.com/publication2
                </a>
                <p>
                  This research presents a comprehensive metabolic profiling of
                  breast cancer patients, highlighting potential diagnostic
                  biomarkers.
                </p>
              </div>
              <div className="list-item">
                <h2>
                  Targeting Mitochondrial Dysfunction in Cardiovascular Disease
                </h2>
                <p>Biochemical Insights</p>
                <p>March 20, 2020</p>
                <a href="www.example.com/publication3">
                  www.example.com/publication3
                </a>
                <p>
                  This publication delves into the role of mitochondrial
                  dysfunction in cardiovascular diseases and discusses
                  therapeutic interventions.
                </p>
              </div>
              <div className="list-item">
                <h2>Epigenetic Regulation of Gene Expression in Diabetes</h2>
                <p>Medical Biochemistry Journal</p>
                <p>July 8, 2019</p>
                <a href="www.example.com/publication4">
                  www.example.com/publication4
                </a>
                <p>
                  Examining epigenetic modifications and their impact on gene
                  expression in the context of diabetes.
                </p>
              </div>
              <div className="list-item">
                <h2>The Gut-Brain Axis in Autoimmune Disorders</h2>
                <p>Frontiers in Medical Biochemistry</p>
                <p>December 3, 2020</p>
                <a href="www.example.com/publication5">
                  www.example.com/publication5
                </a>
                <p>
                  Investigating the intricate relationship between the gut
                  microbiota and autoimmune disorders, shedding light on
                  potential therapeutic approaches.
                </p>
              </div>
            </div>

            <div className="pub-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
