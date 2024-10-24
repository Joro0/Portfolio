import "./App.scss";
import { Headphone } from "./components/Headphone";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AppleWatch } from "./components/AppleWatch";
import { NintendoSwitch } from "./components/NintendoSwitch";

function App() {
  return (
    <>
      <div id="left-container"></div>
      <div id="main-container">
        <Canvas>
          <ambientLight intensity={2} />
          <OrbitControls />
          <AppleWatch scale={0.5} position={[5, 0, 0]} />
          <Headphone scale={0.15} position={[-5, 2, 0]} />
          <NintendoSwitch scale={0.25} position={[-4, -2, 0]} />
        </Canvas>
      </div>
      <div id="right-container"></div>
    </>
  );
}

export default App;
