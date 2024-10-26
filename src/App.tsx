import "./App.scss";
import CanvasModels from "./components/CanvasModels";
import HeaderMain from "./components/HeaderMain";

function App() {
  return (
    <>
      <div id="main-container">
        <HeaderMain />
        <section style={{ display: "fixed", width: "100%", height: "2000px" }}>
          <CanvasModels id="canvas-container" />
        </section>
      </div>
    </>
  );
}

export default App;
