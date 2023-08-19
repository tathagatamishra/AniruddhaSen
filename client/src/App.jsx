import "./App.scss";
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

function App() {
  return (
    <div className="App">
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
    </div>
    
  );
}

export default App;
