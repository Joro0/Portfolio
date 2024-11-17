interface Props {
  selectedItem: number;
  itemData: { title: string; text: string; img: string }[];
}

const CraftImages = ({ selectedItem, itemData }: Props) => {
  //Opacity animation
  const opacityImg = (item: number, index: number) => {
    if (index === 2 && (item === 1 || item == 3)) return "not-show";
    if (index === 3 && (item === 1 || item == 2)) return "not-show";
    else return "";
  };

  return (
    <div className="image-container">
      {itemData.map((image, index) => (
        <img
          src={image.img}
          loading="eager"
          alt={`Craft image ${index + 1}`}
          key={index}
          className={`image-item ${opacityImg(selectedItem + 1, index + 1)}`}
        />
      ))}
    </div>
  );
};

export default CraftImages;
