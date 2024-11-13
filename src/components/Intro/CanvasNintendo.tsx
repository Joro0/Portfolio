import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
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

interface Props extends React.ComponentProps<"group"> {
  mainColor: string;
  secondColor: string;
  thirdColor: string;
}

export function CanvasNintendo({
  mainColor,
  secondColor,
  thirdColor,
  ...props
}: Props) {
  const { nodes, materials } = useGLTF(
    "./models/nintendo_switch.glb"
  ) as GLTFResult;

  materials.M181818.color.set(thirdColor);
  materials.M6969692.color.set(mainColor);
  materials.M474747.color.set(thirdColor);
  materials.M1818181.color.set(thirdColor);
  materials.M235235235.color.set(thirdColor);
  materials.M1818182.color.set(thirdColor);
  materials.M555.color.set(thirdColor);
  materials.M646464.color.set(thirdColor);
  materials.M6969691.color.set(secondColor);
  materials.M696969.color.set(thirdColor);

  return (
    <group {...props} dispose={null}>
      {/* Left Control */}
      <group>
        {/* Buttons */}
        <mesh
          geometry={nodes.Solid1_1.geometry}
          material={materials.M181818}
        ></mesh>

        {/* Chasis */}
        <mesh
          geometry={nodes.Solid1_2.geometry}
          material={materials.M6969692}
        ></mesh>

        {/* Auxiliars */}
        <mesh
          geometry={nodes.Solid1_3.geometry}
          material={materials.M474747}
        ></mesh>
        <mesh
          geometry={nodes.Solid1_4.geometry}
          material={materials.M1818181}
        ></mesh>
      </group>

      {/* Right Control */}
      <group>
        {/*Buttons */}
        <mesh
          geometry={nodes.Solid2_2.geometry}
          material={materials.M181818}
        ></mesh>

        {/* Chasis */}
        <mesh
          geometry={nodes.Solid2_6.geometry}
          material={materials.M6969691}
        ></mesh>

        {/* Button Letters */}
        <mesh
          geometry={nodes.Solid2_1.geometry}
          material={materials.M235235235}
        />

        {/* Auxiliars */}
        <mesh
          geometry={nodes.Solid2_3.geometry}
          material={materials.M1818182}
        ></mesh>
        <mesh
          geometry={nodes.Solid2_4.geometry}
          material={materials.M555}
        ></mesh>
        <mesh
          geometry={nodes.Solid2_5.geometry}
          material={materials.M646464}
        ></mesh>
        <mesh
          geometry={nodes.Solid2_7.geometry}
          material={materials.M696969}
        ></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./models/nintendo_switch.glb");
