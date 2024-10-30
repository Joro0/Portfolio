import "./App.scss";
import AboutImage from "./components/AboutImage";
import AboutPattern from "./components/AboutPattern";
import AboutText from "./components/AboutText";
import IntroCanvas from "./components/CanvasModels";
import Header from "./components/Header";
import IntroText from "./components/IntroText";
import ToolGrid from "./components/ToolGrid";

function App() {
  return (
    <>
      <div id="main-container">
        <Header />

        <section id="intro-section">
          <IntroCanvas />
          <IntroText />
        </section>

        <section id="about-section">
          <AboutText />
          <AboutPattern />
          <AboutImage />
        </section>

        <section id="tool-section">
          <ToolGrid />
        </section>
      </div>
    </>
  );
}

export default App;
