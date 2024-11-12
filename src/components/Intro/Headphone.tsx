import * as THREE from "three";
import { Edges, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

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

export function Headphone({ mainColor, secondColor, ...props }: Props) {
  const { nodes, materials } = useGLTF("./models/headphone.glb") as GLTFResult;

  materials.M249230230.color.set(mainColor);
  materials.M656464.color.set(secondColor);
  materials.M757566.color.set(secondColor);
  materials.M000.color.set(secondColor);

  return (
    <group {...props} dispose={null}>
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

      {/* Volumen Wheel and Inputs */}
      <mesh
        geometry={nodes.Solid1_2.geometry}
        material={materials.M757566}
      ></mesh>
      <mesh geometry={nodes.Solid1_5.geometry} material={materials.M000}></mesh>
    </group>
  );
}

useGLTF.preload("./models/headphone.glb");
