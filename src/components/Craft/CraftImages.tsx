interface Props {
  selectedItem: number;
  imageDirections: string[];
}

const CraftImages = ({ selectedItem, imageDirections }: Props) => {
  return (
    <div className="image-container">
      {imageDirections.map((image, index) => (
        <img
          src={image}
          alt="craft image"
          key={index}
          className={`image-item ${selectedItem === index ? "show" : ""}`}
        />
      ))}
    </div>
  );
};

export default CraftImages;
