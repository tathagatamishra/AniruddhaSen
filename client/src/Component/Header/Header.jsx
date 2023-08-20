import React, { useState } from "react";
import "./Header.scss";

export default function Header() {
    
  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeMode() {

    const bodyStyle = document.body.style;

    if (isDarkMode) {
      // Revert to the original body styles if turning off dark mode
      bodyStyle.background = "whitesmoke";
      bodyStyle.backgroundImage = "radial-gradient(white 2px, transparent 0%)";
      bodyStyle.backgroundSize = "15px 15px";
      bodyStyle.backgroundRepeat = "repeat";
    } 
    else {
        // Apply dark mode styles
        bodyStyle.background = "#484f58";
        bodyStyle.backgroundImage = "radial-gradient(#3f454d 2px, transparent 0%)";
        bodyStyle.backgroundSize = "15px 15px";
        bodyStyle.backgroundRepeat = "repeat";
    }
    
    // Toggle the dark mode state
    setIsDarkMode(!isDarkMode);

    // Toggle the dark mode class on the body element
    document.body.classList.toggle("dark-mode");
  }

  return (
    <div className="Header">
      <div className="toggle" onClick={changeMode}>
        <input type="checkbox" />
        <span className="button"></span>
        <span className="label">☼</span>
      </div>

      <div className="empty"></div>
    </div>
  );
}
