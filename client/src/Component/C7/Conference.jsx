import React from "react";
import "./Conference.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Conference() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-conference" : "Conference"}>
      <div className="conference-card">Conference</div>
    </div>
  );
}
