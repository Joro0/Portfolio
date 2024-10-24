import * as THREE from "three";
import { Edges, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Solid1_1: THREE.Mesh;
    Solid1_2: THREE.Mesh;
    Solid1_3: THREE.Mesh;
    Solid1_4: THREE.Mesh;
    Solid2_1: THREE.Mesh;
    Solid2_2: THREE.Mesh;
    Solid2_3: THREE.Mesh;
    Solid2_4: THREE.Mesh;
    Solid2_5: THREE.Mesh;
    Solid2_6: THREE.Mesh;
    Solid2_7: THREE.Mesh;
  };
  materials: {
    M181818: THREE.MeshStandardMaterial;
    M6969692: THREE.MeshStandardMaterial;
    M474747: THREE.MeshStandardMaterial;
    M1818181: THREE.MeshStandardMaterial;
    M235235235: THREE.MeshStandardMaterial;
    M1818182: THREE.MeshStandardMaterial;
    M555: THREE.MeshStandardMaterial;
    M646464: THREE.MeshStandardMaterial;
    M6969691: THREE.MeshStandardMaterial;
    M696969: THREE.MeshStandardMaterial;
  };
};

export function NintendoSwitch(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./models/nintendo_switch.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      {/* Left Control */}
      <group scale={0.01}>
        {/* Buttons */}
        <mesh geometry={nodes.Solid1_1.geometry} material={materials.M181818}>
          <Edges linewidth={2} threshold={25} color={"gray"} />
        </mesh>

        {/* Chasis */}
        <mesh geometry={nodes.Solid1_2.geometry} material={materials.M6969692}>
          <Edges linewidth={2} threshold={15} color={"black"} />
        </mesh>

        {/* Auxiliars */}
        <mesh geometry={nodes.Solid1_3.geometry} material={materials.M474747}>
          <Edges linewidth={1} threshold={20} color={"gray"} />
        </mesh>
        <mesh geometry={nodes.Solid1_4.geometry} material={materials.M1818181}>
          <Edges linewidth={1} threshold={20} color={"gray"} />
        </mesh>
      </group>

      {/* Right Control */}
      <group scale={0.01}>
        {/*Buttons */}
        <mesh geometry={nodes.Solid2_2.geometry} material={materials.M181818}>
          <Edges linewidth={2} threshold={25} color={"gray"} />
        </mesh>

        {/* Chasis */}
        <mesh geometry={nodes.Solid2_6.geometry} material={materials.M6969691}>
          <Edges linewidth={2} threshold={15} color={"black"} />
        </mesh>

        {/* Button Letters */}
        <mesh
          geometry={nodes.Solid2_1.geometry}
          material={materials.M235235235}
        />

        {/* Auxiliars */}
        <mesh geometry={nodes.Solid2_3.geometry} material={materials.M1818182}>
          <Edges linewidth={1} threshold={20} color={"gray"} />
        </mesh>
        <mesh geometry={nodes.Solid2_4.geometry} material={materials.M555}>
          <Edges linewidth={1} threshold={20} color={"gray"} />
        </mesh>
        <mesh geometry={nodes.Solid2_5.geometry} material={materials.M646464}>
          <Edges linewidth={1} threshold={20} color={"gray"} />
        </mesh>
        <mesh geometry={nodes.Solid2_7.geometry} material={materials.M696969}>
          <Edges linewidth={1} threshold={20} color={"gray"} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./models/nintendo_switch.glb");
