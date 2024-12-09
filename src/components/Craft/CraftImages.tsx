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
  }, []);

  return (
    <div className="image-container">
      <img
        src={itemData[0].img}
        loading="lazy"
        alt={`Craft image ${0 + 1}`}
        key={0}
        className="image-item"
        style={{
          transform:
            selectedItem === 0 ? "translate(0, 0)" : "translate(100%, 0)",
        }}
      />
      <img
        src={itemData[1].img}
        loading="lazy"
        alt={`Craft image ${1 + 1}`}
        key={1}
        className="image-item"
        style={{
          transform:
            selectedItem === 1 ? "translate(-100%, 0)" : "translate(0, 0)",
        }}
      />
      <img
        src={itemData[2].img}
        loading="lazy"
        alt={`Craft image ${2 + 1}`}
        key={2}
        className="image-item"
        style={{
          transform:
            selectedItem === 2 ? "translate(-200%, 0)" : "translate(-100%, 0)",
        }}
      />
    </div>
  );
};

export default CraftImages;
