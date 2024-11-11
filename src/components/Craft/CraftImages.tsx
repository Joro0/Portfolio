interface Props {
  selectedItem: number;
}

const CraftImages = ({ selectedItem }: Props) => {
  const imageDirections: string[] = [
    "/images/skucheker_zoomed.JPG",
    "/images/skucheker_entire.JPG",
    "/images/skucheker_entire2.jpg",
    "/images/skucheker_entire.JPG",
  ];

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
