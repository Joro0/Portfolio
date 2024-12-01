interface Props {
  selectedItem: number;
  itemData: { title: string; text: string; img: string }[];
}

const CraftImages = ({ selectedItem, itemData }: Props) => {
  return (
    <div className="image-container">
      <img
        src={itemData[selectedItem].img}
        loading="eager"
        alt={`Craft image ${itemData[selectedItem].img + 1}`}
        key={selectedItem}
        className="image-item"
      />
    </div>
  );
};

export default CraftImages;
