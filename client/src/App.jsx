import "./App.scss";
import About from "./Component/C1/About";
import Resume from "./Component/C2/Resume";

function App() {
  return (
    <div className="App">
      <div className="webBody">
        <About />
        <Resume />
      </div>
    </div>
    
  );
}

export default App;
