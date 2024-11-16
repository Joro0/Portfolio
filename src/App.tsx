import "./App.scss";
import Header from "./components/Header/Header";
import Craft from "./components/Craft/Craft";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Tool from "./components/Tool/Tool";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div id="main-container">
        <Header id="header" />
        <Intro id="intro-section" />
        <About id="about-section" />
        <Tool id="tool-section" />
        <Craft id="craft-section" />
        <Footer id="footer" />
      </div>
    </>
  );
}

export default App;
