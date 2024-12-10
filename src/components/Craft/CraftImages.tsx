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
  }, []);

  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="image-container">
      {itemData.map((item, index) => (
        <img
          src={item.img}
          loading="lazy"
          alt={`Craft image ${index + 1}`}
          key={index}
          className={`image-item ${index === selectedItem ? "show-item" : ""}`}
        />
      ))}
    </div>
  );
};

export default CraftImages;
