import "./App.scss";
import CanvasModels from "./components/CanvasModels";
import HeaderMain from "./components/HeaderMain";

function App() {
  return (
    <>
      <div id="left-container"></div>
      <div id="main-container">
        <HeaderMain />
        <CanvasModels />
      </div>
      <div id="right-container"></div>
    </>
  );
}

export default App;
