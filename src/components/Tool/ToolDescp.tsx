import { OrbitControls } from "@react-three/drei";
import { ForestHouse } from "./ForestHouse";
import { Canvas } from "@react-three/fiber";
import ToolAnimation from "../../assets/ToolAnimation.json";
import Lottie from "lottie-react";

const ToolDescp = () => {
  const canvasSquareSize = 300;
  const getToolImage = (type: string) => {
    switch (type) {
      case "frontend":
        return <p>front end Test</p>;
      case "3D":
        return (
          <Canvas style={{ width: "100%", height: "100%" }}>
            <OrbitControls />
            <ForestHouse scale={1.05} position={[0, -0.1, 0]} />
          </Canvas>
        );
      case "2D":
        return <Lottie animationData={ToolAnimation} />;
      default:
        return <p>default Test</p>;
    }
  };

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
        {getToolImage("2D")}
      </div>
    </div>
  );
};

export default ToolDescp;
