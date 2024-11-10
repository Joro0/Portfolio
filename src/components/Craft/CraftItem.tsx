import { useState } from "react";
import CraftAccordion from "./CraftAccordion";
import CraftImages from "./CraftImages";

//TASKS:
// 1. Create an useState for craftAccordion and CraftImages. (connect to childs)

const CraftItem = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handleSelectedItem = (item: number) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h3>CraftTitle</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CraftAccordion style={{ width: 350 }} />
        <CraftImages />
      </div>
    </div>
  );
};

export default CraftItem;
