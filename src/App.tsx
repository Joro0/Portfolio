import "./App.scss";
import Header from "./components/Header/Header";
import Craft from "./components/Craft/Craft";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Tool from "./components/Tool/Tool";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

function App() {
  return (
    <>
      <div id="main-container">
        <Header id="header" />
        <Intro id="intro-section" />
        <About id="about-section" />
        <Tool id="tool-section" />
        <Craft id="craft-section" />
        <section id="footer"></section>
      </div>
    </>
  );
}

export default App;
