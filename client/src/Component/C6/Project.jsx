import React from "react";
import "./Project.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Project() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-project" : "Project"}>
      <div className="project-card">
        <div className="project-heading">
          <h1>Project</h1>
        </div>
      </div>
    </div>
  );
}
