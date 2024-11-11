import { useState } from "react";
import CraftAccordion from "./CraftAccordion";
import CraftImages from "./CraftImages";

interface Props {
  title: string;
  accData: { title: string; text: string }[];
  imgDir: string[];
}

const CraftItem = ({ title, accData, imgDir }: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handleSelectedItem = (item: number) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ width: "100%" }}>
      <h3>{title}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CraftAccordion
          selectedItem={selectedItem}
          handleSelectedItem={handleSelectedItem}
          accordionData={accData}
        />
        <CraftImages selectedItem={selectedItem} imageDirections={imgDir} />
      </div>
    </div>
  );
};

export default CraftItem;
