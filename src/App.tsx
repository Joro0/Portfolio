import "./App.css";
import { Headphone } from "./components/Headphone";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AppleWatch } from "./components/AppleWatch";
import { NintendoSwitch } from "./components/NintendoSwitch";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <OrbitControls />
      <NintendoSwitch />
    </Canvas>
  );
}

export default App;
