import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import frontendLottie from "../../assets/frontend_lottie.json";
import backendLottie from "../../assets/backend_lottie2.json";
import Lottie from "lottie-react";
import { ToolCanvas } from "./ToolCanvas";

interface Props {
  imgType: number;
}

const ToolRefImg = ({ imgType }: Props) => {
  const getToolImage = (type: number) => {
    switch (type) {
      case 1:
        return <Lottie animationData={frontendLottie} />;
      case 2:
        return (
          <>
            <Canvas style={{ width: "100%", height: "100%" }}>
              <ambientLight intensity={1.5} />
              <directionalLight intensity={1.2} position={[-1, 1, 0]} />
              <directionalLight intensity={0.7} position={[2, -4, 1]} />
              <OrbitControls enableZoom={false} />
              <ToolCanvas
                // mainColor="#8f3938"
                mainColor="#a64241"
                secondColor="#bd7c7b"
                scale={0.25}
                rotation={[-Math.PI / 2, Math.PI / 30, Math.PI / 4]}
                position={[0, 0.2, 0]}
              />
            </Canvas>
            <div className="img-tool-icon">
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 110.28 93.07"
              >
                <path
                  d="M76,82.56s33.48-8.52,31.56-26c-2.16-12.92-9.72-16-9.72-16v-10s22,13.32,17.28,31.44-28.2,27.6-37,28C71.8,90,73.44,83.56,76,82.56Z"
                  transform="translate(-5.45 -6.44)"
                />
                <path
                  d="M23.4,30.6v9.84A17.81,17.81,0,0,0,13.32,56.52C13.2,68.4,27.24,80.4,50.16,82.68c0,0-5.1-5.1-1.2-8,3.36-2.56,6.56,1.68,6.56,1.68l8.8,9.2A4.08,4.08,0,0,1,64.88,88,4.32,4.32,0,0,1,64,90L53,99a4.65,4.65,0,0,1-6.52-2.88c-.7-3.1,3.32-5.08,3.32-5.08S7,85.56,5.52,57.84C4.2,41.28,23.4,30.6,23.4,30.6Z"
                  transform="translate(-5.45 -6.44)"
                />
                <path
                  d="M31.92,26l24.72,13.8v28L34.2,55.5a4.44,4.44,0,0,1-2.28-4C32,48.82,31.92,26,31.92,26Z"
                  transform="translate(-5.45 -6.44)"
                />
                <path
                  d="M64.9,67.8V39.6L89.6,26V51s0,3.68-2.72,5C83.88,57.58,64.9,67.8,64.9,67.8Z"
                  transform="translate(-5.45 -6.44)"
                />
                <path
                  d="M36.48,19,60.4,32.24,85,19,63.86,7.48a6.23,6.23,0,0,0-3.14-1,7.12,7.12,0,0,0-2.84.8Z"
                  transform="translate(-5.45 -6.44)"
                />
              </svg>
            </div>
          </>
        );
      case 3:
        return <Lottie animationData={backendLottie} />;
      default:
        return <p>default Test</p>;
    }
  };

  return <>{getToolImage(imgType)}</>;
};

export default ToolRefImg;