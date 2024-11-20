import { Canvas } from "@react-three/fiber";
import { CanvasHeadphone } from "./CanvasHeadphone";
import { CanvasNintendo } from "./CanvasNintendo";
import { CanvasWatch } from "./CanvasWatch";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

const IntroCanvas = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollHeadphone = scrollY / 700;
  const scrollNintendo = scrollY / 700;
  const scrollWatch = scrollY / 500;
  const scrollCanvas = scrollY / 8;

  //Tracking scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="intro-canvas-container"
      style={{ transform: `translate3d(0,${scrollCanvas}px,0)` }}
    >
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
          rotation={[
            -Math.PI / (2.8 + scrollHeadphone),
            Math.PI / (15 + scrollHeadphone),
            Math.PI / (2 + scrollHeadphone),
          ]}
        />
        <CanvasNintendo
          mainColor="#f0b63a"
          secondColor="#f0b63a"
          thirdColor="#f3c86c"
          scale={0.21}
          position={[4.2, 1, 0]}
          rotation={[
            -Math.PI / (6 + scrollNintendo),
            -Math.PI / (4 + scrollNintendo),
            -Math.PI / (1.4 + scrollNintendo),
          ]}
        />
        <CanvasWatch
          mainColor="#f0b63a"
          secondColor="#f3c86c"
          scale={0.32}
          position={[-0.6, -1.4, 0]}
          rotation={[
            -Math.PI / (5 + scrollWatch),
            Math.PI / (3.5 + scrollWatch),
            Math.PI / (4 - scrollWatch),
          ]}
        />
      </Canvas>
    </div>
  );
};

export default IntroCanvas;
