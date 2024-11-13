import { Canvas } from "@react-three/fiber";
import { CanvasHeadphone } from "./CanvasHeadphone";
import { CanvasNintendo } from "./CanvasNintendo";
import { CanvasWatch } from "./CanvasWatch";
import { OrbitControls } from "@react-three/drei";

const IntroCanvas = () => {
  return (
    <div className="intro-canvas-container">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={1.5} />
        <directionalLight intensity={1} position={[-2, 2, 0]} />
        <directionalLight intensity={1} position={[8, -15, 5]} />
        <OrbitControls enableZoom={false} />

        <CanvasHeadphone
          mainColor="#f0b63a"
          secondColor="#f3c86c"
          scale={0.18}
          position={[-5.6, 1, 0]}
          rotation={[-Math.PI / 2.8, Math.PI / 15, Math.PI / 2]}
        />
        <CanvasNintendo
          mainColor="#f0b63a"
          secondColor="#f0b63a"
          thirdColor="#f3c86c"
          scale={0.21}
          position={[4.2, 1, 0]}
          rotation={[-Math.PI / 6, -Math.PI / 4, -Math.PI / 1.4]}
        />
        <CanvasWatch
          mainColor="#f0b63a"
          secondColor="#f3c86c"
          scale={0.32}
          position={[-0.6, -1.4, 0]}
          rotation={[-Math.PI / 5, Math.PI / 3.5, Math.PI / 4]}
        />
      </Canvas>
    </div>
  );
};

export default IntroCanvas;
