import { useState } from "react";
import CraftAccordion from "./CraftAccordion";
import CraftImages from "./CraftImages";

const CraftItem = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handleSelectedItem = (item: number) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ width: "100%" }}>
      <h3>CraftTitle</h3>
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
        />
        <CraftImages selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default CraftItem;
