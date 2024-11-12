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

interface Props extends React.ComponentProps<"group"> {
  mainColor: string;
  secondColor: string;
  thirdColor?: string;
}

export function AppleWatch({ mainColor, secondColor, ...props }: Props) {
  const { nodes, materials } = useGLTF(
    "./models/apple_watch.glb"
  ) as GLTFResult;

  materials.Default5.color.set(mainColor);
  materials.M252525.color.set(secondColor);
  materials.M444444.color.set(mainColor);
  materials.Default3.color.set(mainColor);

  return (
    <group {...props} dispose={null}>
      {/* Wheel Tool */}
      <mesh
        geometry={nodes.Solid1.geometry}
        material={materials.Default5}
      ></mesh>

      {/* Screen */}
      <mesh
        geometry={nodes.Solid2.geometry}
        material={materials.M252525}
      ></mesh>

      {/* Back Screen */}
      <mesh
        geometry={nodes.Solid3.geometry}
        material={materials.M444444}
      ></mesh>

      {/* Chasis Screen */}
      <mesh
        geometry={nodes.Solid4.geometry}
        material={materials.Default5}
      ></mesh>

      {/* Bottom Belt */}
      <mesh
        geometry={nodes.Solid5.geometry}
        material={materials.Default3}
      ></mesh>

      {/* Upper Belt */}
      <mesh
        geometry={nodes.Solid6.geometry}
        material={materials.Default3}
      ></mesh>
    </group>
  );
}

useGLTF.preload("./models/apple_watch.glb");
