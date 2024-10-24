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
    M126126134: THREE.MeshStandardMaterial;
    M757566: THREE.MeshStandardMaterial;
    M656464: THREE.MeshStandardMaterial;
    M249230230: THREE.MeshStandardMaterial;
    M000: THREE.MeshStandardMaterial;
  };
};

export function Headphone(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/headphone.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        {/* Casing (main) */}
        <mesh
          geometry={nodes.Solid1_4.geometry}
          material={materials.M249230230}
        >
          <Edges linewidth={2} threshold={15} color={"black"} />
        </mesh>

        {/* Top Padding */}
        <mesh geometry={nodes.Solid1_3.geometry} material={materials.M656464}>
          <Edges linewidth={1} threshold={13} color={"white"} />
        </mesh>

        {/* Volumen Wheel and Inputs */}
        <mesh geometry={nodes.Solid1_2.geometry} material={materials.M757566}>
          <Edges linewidth={1} threshold={15} color={"white"} />
        </mesh>
        <mesh geometry={nodes.Solid1_5.geometry} material={materials.M000}>
          <Edges linewidth={1} threshold={15} color={"white"} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./models/headphone.glb");
