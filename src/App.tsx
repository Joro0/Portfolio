import "./App.scss";
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
      </div>
    </>
  );
}

export default App;
