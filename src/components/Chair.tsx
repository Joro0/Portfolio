import * as THREE from "three";
import { Edges, Outlines, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Solid1_1: THREE.Mesh;
    Solid1_2: THREE.Mesh;
  };
  materials: {
    RubberBlack2: THREE.MeshStandardMaterial;
    RubberBlack1: THREE.MeshStandardMaterial;
  };
};

export function Chair(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/chair.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        {/* Wood Part */}
        <mesh
          geometry={nodes.Solid1_1.geometry}
          material={materials.RubberBlack2}
        >
          <Edges linewidth={2} threshold={15} color={"black"} />
        </mesh>

        {/* Soft Part */}
        <mesh
          geometry={nodes.Solid1_2.geometry}
          material={materials.RubberBlack1}
        >
          <Edges linewidth={2} threshold={16} color={"black"} />
          <Outlines thickness={1} color={"black"} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./models/chair.glb");
