import React from "react";
import "./Contact.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Contact() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-contact" : "Contact"}>
      <div className="contact-card">
      <div className="contact-heading">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
}
