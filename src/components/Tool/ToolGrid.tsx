import ToolSvg from "./ToolSvg";
import { useState } from "react";

const ToolGrid = () => {
  const frontEndList = [
    "javascript",
    "typescript",
    "react",
    "angular",
    "next",
    "git",
    "redux",
    "sass",
  ];
  const threeDList = ["three", "fusion", "blender"];

  const twoDList = ["figma", "illustrator"];

  const [clickedZone, setClickedZone] = useState<number | null>(0);

  return (
    <div className="tool-grid">
      {/* frontend grid */}
      {frontEndList.map((icon, index) => (
        <div
          className={`icon-${index + 1} ${
            clickedZone === 1 ? "grid-selected" : ""
          }`}
          onClick={() => {
            setClickedZone(1);
          }}
        >
          <ToolSvg svg={icon} />
        </div>
      ))}
      {/* 3d grid */}
      {threeDList.map((icon, index) => (
        <div
          className={`icon-${index + 9} ${
            clickedZone === 2 ? "grid-selected" : ""
          }`}
          onClick={() => {
            setClickedZone(2);
          }}
        >
          <ToolSvg svg={icon} />
        </div>
      ))}
      {/* 2d grid */}
      {twoDList.map((icon, index) => (
        <div
          className={`icon-${index + 12} ${
            clickedZone === 3 ? "grid-selected" : ""
          }`}
          onClick={() => {
            setClickedZone(3);
          }}
        >
          <ToolSvg svg={icon} />
        </div>
      ))}

      <div className="title1">
        <p className="p-tool">FRONT-END</p>
      </div>
      <div className="title2">
        <p className="p-tool">3D</p>
      </div>
      <div className="title3">
        <p className="p-tool">2D</p>
      </div>
    </div>
  );
};

export default ToolGrid;
