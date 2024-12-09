import { useEffect, useState } from "react";

interface Props {
  selectedItem: number;
  itemData: { title: string; text: string; img: string }[];
}

const CraftImages = ({ selectedItem, itemData }: Props) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload all images and wait for them to fully load
    const preloadImages = async () => {
      const promises = itemData.map(({ img }) => {
        return new Promise<void>((resolve) => {
          const image = new Image();
          image.src = img;
          image.onload = () => resolve();
        });
      });

      await Promise.all(promises);
      setImagesLoaded(true); // All images are now loaded
    };

    preloadImages();
  }, [itemData]);

  if (!imagesLoaded) {
    return <div>Loading...</div>; // Optional: Show a loader while preloading
  }
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
