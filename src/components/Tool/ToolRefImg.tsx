import { OrbitControls } from "@react-three/drei";
import { ForestHouse } from "./ForestHouse";
import { Canvas } from "@react-three/fiber";
import ToolAnimation from "../../assets/ToolAnimation.json";
import Lottie from "lottie-react";

interface Props {
  imgType: number;
}

const ToolRefImg = ({ imgType }: Props) => {
  const getToolImage = (type: number) => {
    switch (type) {
      case 1:
        return <p>front end Test</p>;
      case 2:
        return (
          <Canvas style={{ width: "100%", height: "100%" }}>
            <OrbitControls />
            <ForestHouse scale={1.05} position={[0, -0.1, 0]} />
          </Canvas>
        );
      case 3:
        return <Lottie animationData={ToolAnimation} />;
      default:
        return <p>default Test</p>;
    }
  };

  return <>{getToolImage(imgType)}</>;
};

export default ToolRefImg;
