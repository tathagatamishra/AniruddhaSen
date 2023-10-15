import React from "react";
import "./Conference.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Conference() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-conference" : "Conference"}>
      <div className="conference-card">
      <div className="conference-heading">
          <h1>Conference</h1>
        </div>
      </div>
    </div>
  );
}
