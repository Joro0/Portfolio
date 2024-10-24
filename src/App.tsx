import "./App.css";
import { Headphone } from "./components/Headphone";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <OrbitControls />
      <Headphone />
    </Canvas>
  );
}

export default App;
