import "./App.scss";

import { IonIcon } from "@ionic/react";
import { chevronUp } from "ionicons/icons";

import About from "./Component/C1/About";
import Social from "./Component/C10/Social";
import Contact from "./Component/C11/Contact";
import Resource from "./Component/C12/Resource";
import Resume from "./Component/C2/Resume";
import Skill from "./Component/C3/Skill";
import Interest from "./Component/C4/Interest";
import Publication from "./Component/C5/Publication";
import Project from "./Component/C6/Project";
import Conference from "./Component/C7/Conference";
import Achievement from "./Component/C8/Achievement";
import Blog from "./Component/C9/Blog";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";

import { DarkModeProvider } from "./assets/DarkModeContext";
import { useEffect, useState } from "react";

function App() {
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <DarkModeProvider>
      <div className="App">
        <Header />

        <div className="webBody">
          <About />
          <Resume />
          <Skill />
          <Interest />
          <Publication />
          <Project />
          <Conference />
          <Achievement />
          <Blog />
          <Social />
          <Contact />
          <Resource />
        </div>

        {/* <Footer /> */}

        {scrollY > 100 && (
          <div
            className="scrollTop"
            onClick={function ScrollToTop() {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <IonIcon icon={chevronUp} className="label" />
          </div>
        )}
      </div>
    </DarkModeProvider>
  );
}

export default App;
