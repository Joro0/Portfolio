import { Canvas } from "@react-three/fiber";
import { CanvasHeadphone } from "./CanvasHeadphone";
import { CanvasNintendo } from "./CanvasNintendo";
import { CanvasWatch } from "./CanvasWatch";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

const IntroCanvas = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Scroll Rotation Velocity
  const scrollHeadphone = scrollY / 700;
  const scrollNintendo = scrollY / 700;
  const scrollWatch = scrollY / 500;
  const scrollCanvas = scrollY / 4;

  //Tracking scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track viewport width
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine positions based on viewport width
  const getPositions = () => {
    if (viewportWidth <= 500) {
      return {
        headphone: {
          position: [-1.5, 2, 0] as [number, number, number],
          rotation: [
            -Math.PI / (2.8 + scrollHeadphone),
            Math.PI / (15 + scrollHeadphone),
            Math.PI / (3 + scrollHeadphone),
          ] as [number, number, number],
          scale: 0.15,
        },
        nintendo: {
          position: [0.5, 0, 0] as [number, number, number],
          rotation: [
            -Math.PI / (7 + scrollNintendo),
            -Math.PI / (7 + scrollNintendo),
            -Math.PI / (1.4 + scrollNintendo),
          ] as [number, number, number],
          scale: 0.19,
        },
        watch: {
          position: [-0.5, -2, 0] as [number, number, number],
          rotation: [
            -Math.PI / (5 + scrollWatch),
            Math.PI / (3.5 + scrollWatch),
            Math.PI / (4 - scrollWatch),
          ] as [number, number, number],
          scale: 0.24,
        },
      };
    } else if (viewportWidth <= 767) {
      return {
        headphone: {
          position: [-2.8, 2, 0] as [number, number, number],
          rotation: [
            -Math.PI / (2.8 + scrollHeadphone),
            Math.PI / (15 + scrollHeadphone),
            Math.PI / (2.5 + scrollHeadphone),
          ] as [number, number, number],
          scale: 0.17,
        },
        nintendo: {
          position: [1.8, 0, 0] as [number, number, number],
          rotation: [
            -Math.PI / (7 + scrollNintendo),
            -Math.PI / (7 + scrollNintendo),
            -Math.PI / (1.4 + scrollNintendo),
          ] as [number, number, number],
          scale: 0.21,
        },
        watch: {
          position: [-0.5, -2.5, 0] as [number, number, number],
          rotation: [
            -Math.PI / (5 + scrollWatch),
            Math.PI / (3.5 + scrollWatch),
            Math.PI / (4 - scrollWatch),
          ] as [number, number, number],
          scale: 0.27,
        },
      };
    } else {
      return {
        headphone: {
          position: [-5.6, 1, 0] as [number, number, number],
          rotation: [
            -Math.PI / (2.8 + scrollHeadphone),
            Math.PI / (15 + scrollHeadphone),
            Math.PI / (2 + scrollHeadphone),
          ] as [number, number, number],
          scale: 0.18,
        },
        nintendo: {
          position: [4.2, 1, 0] as [number, number, number],
          rotation: [
            -Math.PI / (6 + scrollNintendo),
            -Math.PI / (4 + scrollNintendo),
            -Math.PI / (1.4 + scrollNintendo),
          ] as [number, number, number],
          scale: 0.21,
        },
        watch: {
          position: [-0.6, -1.4, 0] as [number, number, number],
          rotation: [
            -Math.PI / (5 + scrollWatch),
            Math.PI / (3.5 + scrollWatch),
            Math.PI / (4 - scrollWatch),
          ] as [number, number, number],
          scale: 0.32,
        },
      };
    }
  };

  const positions = getPositions();

  return (
    <div
      className="intro-canvas-container"
      style={{ transform: `translate3d(0,${scrollCanvas}px,0)` }}
    >
      <Canvas style={{ width: "100%" }}>
        <ambientLight intensity={1.5} />
        <directionalLight intensity={1} position={[-2, 2, 0]} />
        <directionalLight intensity={1} position={[8, -15, 5]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />

        <CanvasHeadphone
          mainColor="#f0b63a"
          secondColor="#f3c86c"
          scale={positions.headphone.scale}
          position={positions.headphone.position}
          rotation={positions.headphone.rotation}
        />
        <CanvasNintendo
          mainColor="#f0b63a"
          secondColor="#f0b63a"
          thirdColor="#f3c86c"
          scale={positions.nintendo.scale}
          position={positions.nintendo.position}
          rotation={positions.nintendo.rotation}
        />
        <CanvasWatch
          mainColor="#f0b63a"
          secondColor="#f3c86c"
          scale={positions.watch.scale}
          position={positions.watch.position}
          rotation={positions.watch.rotation}
        />
      </Canvas>
    </div>
  );
};

export default IntroCanvas;
