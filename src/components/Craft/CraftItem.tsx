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

  const accordionItem = (
    <>
      {position === "left" ? (
        <CraftAccordion
          selectedItem={selectedItem}
          handleSelectedItem={handleSelectedItem}
          accordionData={itemData}
        />
      ) : null}
      <CraftImages selectedItem={selectedItem} itemData={itemData} />
      {position === "right" ? (
        <CraftAccordion
          selectedItem={selectedItem}
          handleSelectedItem={handleSelectedItem}
          accordionData={itemData}
        />
      ) : null}
    </>
  );

  return (
    <div className="craft-item">
      <h3 style={{ textAlign: position === "left" ? "start" : "end" }}>
        {title}
      </h3>
      <div className="item-container">{accordionItem}</div>
    </div>
  );
};

export default CraftItem;
