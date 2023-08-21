import "./Header.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Header() {
  // function changeMode() {
  //   document.body.classList.toggle("dark-mode");
  // }

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-header" : "Header"}>
      <div className="toggle-bg">
        <div className="toggle" onClick={toggleDarkMode}>
          <input type="checkbox" />
          <span className="button"></span>
          <span className="label">☼</span>
        </div>
      </div>
    </div>
  );
}
