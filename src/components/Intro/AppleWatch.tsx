import * as THREE from "three";
import { Edges, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Solid1: THREE.Mesh;
    Solid2: THREE.Mesh;
    Solid3: THREE.Mesh;
    Solid4: THREE.Mesh;
    Solid5: THREE.Mesh;
    Solid6: THREE.Mesh;
  };
  materials: {
    Default5: THREE.MeshStandardMaterial;
    M252525: THREE.MeshStandardMaterial;
    M444444: THREE.MeshStandardMaterial;
    Default3: THREE.MeshStandardMaterial;
  };
};

export function AppleWatch(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./models/apple_watch.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      {/* Wheel Tool */}
      <mesh geometry={nodes.Solid1.geometry} material={materials.Default5}>
        <Edges linewidth={1} threshold={15} color={"black"} />
      </mesh>

      {/* Screen */}
      <mesh geometry={nodes.Solid2.geometry} material={materials.M252525}>
        <Edges linewidth={1} threshold={15} color={"gray"} />
      </mesh>

      {/* Back Screen */}
      <mesh geometry={nodes.Solid3.geometry} material={materials.M444444}>
        <Edges linewidth={1} threshold={15} color={"gray"} />
      </mesh>

      {/* Chasis Screen */}
      <mesh geometry={nodes.Solid4.geometry} material={materials.Default5}>
        <Edges linewidth={2} threshold={15} color={"black"} />
      </mesh>

      {/* Bottom Belt */}
      <mesh geometry={nodes.Solid5.geometry} material={materials.Default3}>
        <Edges linewidth={2} threshold={15} color={"black"} />
      </mesh>

      {/* Upper Belt */}
      <mesh geometry={nodes.Solid6.geometry} material={materials.Default3}>
        <Edges linewidth={2} threshold={15} color={"black"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/apple_watch.glb");
