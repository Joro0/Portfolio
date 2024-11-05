import { OrbitControls } from "@react-three/drei";
import { ForestHouse } from "./ForestHouse";
import { Canvas } from "@react-three/fiber";

const ToolDescp = () => {
  const canvasSquareSize = 300;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        rowGap: "16px",
      }}
    >
      <h2>Tools</h2>
      <div
        style={{
          height: canvasSquareSize,
          width: canvasSquareSize,
          backgroundColor: "white",
        }}
      >
        <Canvas style={{ width: "100%", height: "100%" }}>
          <OrbitControls />
          <ForestHouse scale={1.05} position={[0, -0.1, 0]} />
        </Canvas>
      </div>
    </div>
  );
};

export default ToolDescp;
