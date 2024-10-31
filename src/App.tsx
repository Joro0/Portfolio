import "./App.scss";
import AboutImage from "./components/AboutImage";
import AboutPattern from "./components/AboutPattern";
import AboutText from "./components/AboutText";
import IntroCanvas from "./components/IntroCanvas";
import Header from "./components/Header";
import IntroText from "./components/IntroText";
import ToolDescp from "./components/ToolDescp";
import ToolGrid from "./components/ToolGrid";

function App() {
  return (
    <>
      <div id="main-container">
        <header id="header">
          <Header />
        </header>

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
          <div className="tool-wrapper">
            <ToolGrid />
            <ToolDescp />
          </div>
        </section>

        <section id="craft-section"></section>
        <section id="footer"></section>
      </div>
    </>
  );
}

export default App;
