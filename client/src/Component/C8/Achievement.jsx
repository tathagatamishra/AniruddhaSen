import React from "react";
import "./Achievement.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Achievement() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-achievement" : "Achievement"}>
      <div className="achievement-card">Achievement</div>
    </div>
  );
}
