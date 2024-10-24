import "./App.css";
import { Headphone } from "./components/Headphone";
import { Chair } from "./components/Chair";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AppleWatch } from "./components/AppleWatch";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <OrbitControls />
      <AppleWatch />
    </Canvas>
  );
}

export default App;
