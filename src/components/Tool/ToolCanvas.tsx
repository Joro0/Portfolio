import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Solid1_1: THREE.Mesh;
    Solid1_2: THREE.Mesh;
    Solid1_3: THREE.Mesh;
    Solid1_4: THREE.Mesh;
    Solid1_5: THREE.Mesh;
  };
  materials: {
    M757566: THREE.MeshStandardMaterial;
    M656464: THREE.MeshStandardMaterial;
    M249230230: THREE.MeshStandardMaterial;
    M000: THREE.MeshStandardMaterial;
  };
};

interface Props extends React.ComponentProps<"group"> {
  mainColor: string;
  secondColor: string;
  thirdColor?: string;
}

export function ToolCanvas({ mainColor, secondColor, ...props }: Props) {
  const { nodes, materials } = useGLTF(
    "./models/headphone_tool.glb"
  ) as GLTFResult;

  // Set the colors
  materials.M249230230.color.set(mainColor);
  materials.M656464.color.set(secondColor);
  materials.M757566.color.set(secondColor);
  materials.M000.color.set(secondColor);

  // Ref to control rotation
  const groupRef = useRef<THREE.Group>(null);

  // Continuous rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.002; // Adjust rotation speed if needed
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* Casing (main) */}
      <mesh
        geometry={nodes.Solid1_4.geometry}
        material={materials.M249230230}
      ></mesh>

      {/* Top Padding */}
      <mesh
        geometry={nodes.Solid1_3.geometry}
        material={materials.M656464}
      ></mesh>

      {/* Volume Wheel and Inputs */}
      <mesh
        geometry={nodes.Solid1_2.geometry}
        material={materials.M757566}
      ></mesh>
      <mesh geometry={nodes.Solid1_5.geometry} material={materials.M000}></mesh>
    </group>
  );
}

useGLTF.preload("./models/headphone_tool.glb");
