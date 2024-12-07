import { useEffect } from "react";

interface Props {
  selectedItem: number;
  itemData: { title: string; text: string; img: string }[];
}

const CraftImages = ({ selectedItem, itemData }: Props) => {
  useEffect(() => {
    // Preload the image when the selected item changes
    const imageToPreload1 = new Image();
    const imageToPreload2 = new Image();
    const imageToPreload3 = new Image();
    imageToPreload1.src = itemData[0].img;
    imageToPreload2.src = itemData[1].img;
    imageToPreload3.src = itemData[2].img;
  }, [selectedItem, itemData]);

  return (
    <div className="image-container">
      <img
        src={itemData[selectedItem].img}
        loading="lazy"
        alt={`Craft image ${selectedItem + 1}`}
        key={selectedItem}
        className="image-item"
      />
    </div>
  );
};

export default CraftImages;
