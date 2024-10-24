import "./App.css";
import { Headphone } from "./components/Headphone";
import { Chair } from "./components/Chair";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <OrbitControls />
      <Chair />
    </Canvas>
  );
}

export default App;
