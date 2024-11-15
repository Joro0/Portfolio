import { useState } from "react";
import CraftAccordion from "./CraftAccordion";
import CraftImages from "./CraftImages";

interface Props {
  title: string;
  accData: { title: string; text: string }[];
  imgDir: string[];
  position: "right" | "left";
}

const CraftItem = ({ title, accData, imgDir, position = "left" }: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handleSelectedItem = (item: number) => {
    setSelectedItem(item);
  };

  const leftAccordion = (
    <>
      <CraftAccordion
        selectedItem={selectedItem}
        handleSelectedItem={handleSelectedItem}
        accordionData={accData}
      />
      <CraftImages selectedItem={selectedItem} imageDirections={imgDir} />
    </>
  );

  const rightAccordion = (
    <>
      <CraftImages selectedItem={selectedItem} imageDirections={imgDir} />
      <CraftAccordion
        selectedItem={selectedItem}
        handleSelectedItem={handleSelectedItem}
        accordionData={accData}
      />
    </>
  );

  return (
    <div className="craft-item">
      <h3 style={{ textAlign: position === "left" ? "start" : "end" }}>
        {title}
      </h3>
      <div className="item-container">
        {position === "left" ? leftAccordion : rightAccordion}
      </div>
    </div>
  );
};

export default CraftItem;
