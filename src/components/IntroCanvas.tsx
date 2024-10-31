import { Canvas } from "@react-three/fiber";
import { AppleWatch } from "./AppleWatch";
import { Headphone } from "./Headphone";
import { NintendoSwitch } from "./NintendoSwitch";

const IntroCanvas = () => {
  return (
    <div className="intro-canvas-container">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={2} />
        <Headphone
          scale={0.18}
          position={[-3.5, 1.6, 0]}
          rotation={[-Math.PI / 2.8, Math.PI / 20, Math.PI / 2.5]}
        />
        <NintendoSwitch
          scale={0.22}
          position={[2.7, 0.5, 0]}
          rotation={[-Math.PI / 6, -Math.PI / 4, -Math.PI / 1.4]}
        />
        <AppleWatch
          scale={0.32}
          position={[-1.5, -1.5, 0]}
          rotation={[-Math.PI / 3, Math.PI / 3.5, Math.PI / 4]}
        />
      </Canvas>
    </div>
  );
};

export default IntroCanvas;
