import "./App.scss";
import AboutImage from "./components/AboutImage";
import AboutText from "./components/AboutText";
import CanvasModels from "./components/CanvasModels";
import Header from "./components/Header";
import IntroText from "./components/IntroText";

function App() {
  return (
    <>
      <div id="main-container">
        <Header />

        <section id="intro-section">
          <CanvasModels />
          <IntroText />
        </section>

        <section id="about-section">
          <AboutText />
          <AboutImage />
        </section>
        <section id="tool-section"></section>
      </div>
    </>
  );
}

export default App;
