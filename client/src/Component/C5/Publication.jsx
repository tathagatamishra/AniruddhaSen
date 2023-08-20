import React from "react";
import "./Publication.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Publication() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-publication" : "Publication"}>
      <div className="publication-card">Publication</div>
    </div>
  );
}
