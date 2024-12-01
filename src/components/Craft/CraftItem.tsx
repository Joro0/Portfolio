import { useState } from "react";
import CraftAccordion from "./CraftAccordion";
import CraftImages from "./CraftImages";

interface Props {
  title: string;
  itemData: { title: string; text: string; img: string }[];
  position: "right" | "left";
}

const CraftItem = ({ title, itemData, position = "left" }: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handleSelectedItem = (item: number) => {
    setSelectedItem(item);
  };

  return (
    <div className="craft-item">
      <h3 style={{ textAlign: position === "left" ? "start" : "end" }}>
        {title}
      </h3>
      <div className={`item-container ${position}`}>
        <CraftAccordion
          selectedItem={selectedItem}
          handleSelectedItem={handleSelectedItem}
          accordionData={itemData}
        />
        <CraftImages selectedItem={selectedItem} itemData={itemData} />
      </div>
    </div>
  );
};

export default CraftItem;
