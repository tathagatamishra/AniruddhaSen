import React from "react";
import "./Resource.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Resource() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-resource" : "Resource"}>
      <div className="resource-card">Resource</div>
    </div>
  );
}
