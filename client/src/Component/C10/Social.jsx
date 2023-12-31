import React from "react";
import "./Social.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Social() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-social" : "Social"}>
      <div className="social-card">
      <div className="social-heading">
          <h1>Social</h1>
        </div>
      </div>
    </div>
  );
}
