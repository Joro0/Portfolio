import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AppleWatch } from "./AppleWatch";
import { Headphone } from "./Headphone";
import { NintendoSwitch } from "./NintendoSwitch";

const localStyle = {
  width: "100%",
  height: "92vh",
};

const CanvasModels = () => {
  return (
    <div style={localStyle}>
      <Canvas>
        <ambientLight intensity={2} />
        <OrbitControls />
        <AppleWatch scale={0.5} position={[3, 0, 0]} rotation={[0, 0, 0]} />
        <Headphone
          scale={0.15}
          position={[-2.5, 2, 0]}
          rotation={[-Math.PI / 3, 0, Math.PI / 3]}
        />
        <NintendoSwitch
          scale={0.25}
          position={[-2, -2, 0]}
          rotation={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default CanvasModels;
