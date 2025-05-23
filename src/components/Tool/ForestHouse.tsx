import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Windows001_Window_0: THREE.Mesh;
    Windows_Window_0: THREE.Mesh;
    Windows002_Window_0: THREE.Mesh;
    SideRoofBase_RoofMoss_0: THREE.Mesh;
    RoofMoss_RoofMoss_0: THREE.Mesh;
    Roof009_RoofMoss_0: THREE.Mesh;
    RoofBase001_RoofMoss_0: THREE.Mesh;
    HouseFence_WoodPlanks_0: THREE.Mesh;
    Stairs_WoodPlanks_0: THREE.Mesh;
    HouseSupportBeams_WoodPlanks_0: THREE.Mesh;
    HouseWoodFloor_WoodPlanks_0: THREE.Mesh;
    Chimney_RoofMoss_0: THREE.Mesh;
    Moss_WoodPlanks_0: THREE.Mesh;
    DoorRoof_RoofMoss_0: THREE.Mesh;
    House_House_0: THREE.Mesh;
    TallGrass_GrassALPHA_0: THREE.Mesh;
    Vines001_GrassALPHA_0: THREE.Mesh;
    Vines002_GrassALPHA_0: THREE.Mesh;
    Vines003_GrassALPHA_0: THREE.Mesh;
    Vines004_GrassALPHA_0: THREE.Mesh;
    Vines005_GrassALPHA_0: THREE.Mesh;
    Vines_GrassALPHA_0: THREE.Mesh;
    SupportBeams_Window_0: THREE.Mesh;
    FenceRight_WoodFence_0: THREE.Mesh;
    FenceRight015_WoodFence_0: THREE.Mesh;
    FenceLeft_WoodFence_0: THREE.Mesh;
    FenceRight003_WoodFence_0: THREE.Mesh;
    SmallRocks_BigRock_0: THREE.Mesh;
    Rocks_BigRock_0: THREE.Mesh;
    BTree001_BrichTree_0: THREE.Mesh;
    BTree_BrichTree_0: THREE.Mesh;
    BTree002_BrichTree_0: THREE.Mesh;
    Redwood_BrichTree_0: THREE.Mesh;
    RedwoodAlpha_TreeLeafs_0: THREE.Mesh;
    RedwoodChopped_BrichTree_0: THREE.Mesh;
    RedwoodMoss_BrichTree_0: THREE.Mesh;
    Stump001_WoodFence_0: THREE.Mesh;
    Stump002_WoodFence_0: THREE.Mesh;
    Stump003_WoodFence_0: THREE.Mesh;
    Stump_WoodFence_0: THREE.Mesh;
    Ground_Ground_0: THREE.Mesh;
    GrassOrange_GrassALPHA_0: THREE.Mesh;
    GrassRoof_GrassALPHA_0: THREE.Mesh;
    GrassGround_GrassALPHA_0: THREE.Mesh;
    GrassRoof001_GrassALPHA_0: THREE.Mesh;
    Plane001_GrassALPHA_0: THREE.Mesh;
    Plane002_GrassALPHA_0: THREE.Mesh;
    Plane005_GrassALPHA_0: THREE.Mesh;
    Plane006_GrassALPHA_0: THREE.Mesh;
    Plane007_GrassALPHA_0: THREE.Mesh;
    Plane008_GrassALPHA_0: THREE.Mesh;
    Plane009_GrassALPHA_0: THREE.Mesh;
    Plane010_GrassALPHA_0: THREE.Mesh;
    Racoon_Animals_0: THREE.Mesh;
    Bird_Animals_0: THREE.Mesh;
    Bird001_Animals_0: THREE.Mesh;
    Bird002_Animals_0: THREE.Mesh;
    GroundPlane_Plane_0: THREE.Mesh;
    Powerlines_WoodFence_0: THREE.Mesh;
    Powerlines001_GrassALPHA_0: THREE.Mesh;
  };
  materials: {
    Window: THREE.MeshBasicMaterial;
    RoofMoss: THREE.MeshBasicMaterial;
    WoodPlanks: THREE.MeshBasicMaterial;
    House: THREE.MeshBasicMaterial;
    GrassALPHA: THREE.MeshBasicMaterial;
    WoodFence: THREE.MeshBasicMaterial;
    BigRock: THREE.MeshBasicMaterial;
    BrichTree: THREE.MeshBasicMaterial;
    TreeLeafs: THREE.MeshBasicMaterial;
    Ground: THREE.MeshBasicMaterial;
    Animals: THREE.MeshBasicMaterial;
    Plane: THREE.MeshBasicMaterial;
  };
};

export function ForestHouse(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./models/forest_house.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.004}
        position={[0.2, -1.7, 0]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Windows001_Window_0.geometry}
            material={materials.Window}
            position={[-29.374, 190.52, -176.055]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Windows_Window_0.geometry}
            material={materials.Window}
            position={[-163.399, 264.286, -120.461]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Windows002_Window_0.geometry}
            material={materials.Window}
            position={[-32.366, 214.068, 45.684]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.SideRoofBase_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-94.245, 237.145, -218.076]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RoofMoss_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-84.561, 400.348, -46.874]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Roof009_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-94.708, 404.742, -53.053]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RoofBase001_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-79.646, 389.725, -64.28]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.HouseFence_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-242.3, 149.197, -75.048]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stairs_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-287.108, 99.567, -139.086]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.HouseSupportBeams_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-199.335, 114.963, -78.753]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.HouseWoodFloor_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-144.551, 131.333, -86.311]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chimney_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-9.021, 511.897, 16.752]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Moss_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-201.245, 158.931, -135.535]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DoorRoof_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-201.526, 278.942, -23.104]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.House_House_0.geometry}
            material={materials.House}
            position={[-123.98, 269.218, -49.264]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.TallGrass_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-235.476, 129.603, -16.823]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines001_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-262.526, 118.89, -198.815]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines002_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-221.345, 257.516, -17.507]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines003_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-75.133, 260.819, 69.646]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines004_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[35.942, 470.141, -54.293]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines005_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[34.411, 290.921, -120.076]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-74.452, 241.758, -224.939]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.SupportBeams_Window_0.geometry}
            material={materials.Window}
            position={[-77.065, 201.393, -235.659]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FenceRight_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-353.623, 93.428, 93.865]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FenceRight015_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-383.258, 94.918, -275.518]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FenceLeft_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-389.185, 98.81, -264.974]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FenceRight003_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-349.683, 89.407, 101.414]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.SmallRocks_BigRock_0.geometry}
            material={materials.BigRock}
            position={[4.023, 131.408, -227.81]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Rocks_BigRock_0.geometry}
            material={materials.BigRock}
            position={[19.775, 143.787, -172.873]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BTree001_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-206.558, 534.739, -287.136]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BTree_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-248.647, 380.85, 155.387]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BTree002_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-289.38, 414.456, -310.24]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Redwood_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-78.679, 344.715, -68.306]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RedwoodAlpha_TreeLeafs_0.geometry}
            material={materials.TreeLeafs}
            position={[-90.086, 598.718, -98.586]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RedwoodChopped_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-189.723, 107.185, 84.876]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RedwoodMoss_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-325.997, 85.004, -64.985]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stump001_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-381.083, 93.121, -193.854]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stump002_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-563.256, 83.958, -253.345]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stump003_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-565.752, 84.05, -61.296]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stump_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-575.721, 89.22, -23.815]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Ground_Ground_0.geometry}
            material={materials.Ground}
            position={[-235.19, 93.31, -97.729]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GrassOrange_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-124.51, 299.659, -165.866]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GrassRoof_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-100.387, 330.234, -133.398]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GrassGround_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-244.991, 103.416, -133.908]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GrassRoof001_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-76.653, 524.205, -58.858]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane001_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-248.741, 102.914, -291.704]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane002_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-258.47, 103.094, -284.026]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane005_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-249.009, 83.645, 147.937]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane006_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-235.185, 81.35, 142.998]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane007_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-99.991, 337.482, -177.371]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane008_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-588.003, 76.933, -128.019]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane009_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-484.161, 62.479, -121.998]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane010_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-477.783, 66.673, -109.078]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Racoon_Animals_0.geometry}
            material={materials.Animals}
            position={[-288.984, 129.285, -295.165]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Bird_Animals_0.geometry}
            material={materials.Animals}
            position={[-288.441, 253.046, -280.863]}
            rotation={[-1.578, -0.016, 0.106]}
            scale={100}
          />
          <mesh
            geometry={nodes.Bird001_Animals_0.geometry}
            material={materials.Animals}
            position={[-528.886, 813.78, -51.379]}
            rotation={[-1.52, -0.018, -0.207]}
            scale={100}
          />
          <mesh
            geometry={nodes.Bird002_Animals_0.geometry}
            material={materials.Animals}
            position={[-349.927, 975.398, -386.838]}
            rotation={[-1.556, -0.016, 0.514]}
            scale={100}
          />
          <mesh
            geometry={nodes.GroundPlane_Plane_0.geometry}
            material={materials.Plane}
            position={[-220.831, 59.323, -82.066]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Powerlines_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-442.465, 851.42, -74.765]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Powerlines001_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-443.43, 870.025, -75.073]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/forest_house.glb");
