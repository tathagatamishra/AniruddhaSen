import React from "react";
import "./Interest.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Interest() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-interest" : "Interest"}>
      <div className="interest-card">Interest</div>
    </div>
  );
}
