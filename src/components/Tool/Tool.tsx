import "./Tool.scss";
import ToolSvg from "./ToolSvg";
import { useState } from "react";
import ToolRefImg from "./ToolRefImg";

interface Props {
  id: string;
}

const Tool = ({ id }: Props) => {
  const frontEndList = [
    "javascript",
    "typescript",
    "react",
    "angular",
    "next",
    "git",
    "redux",
    "sass",
    "figma",
    "illustrator",
  ];
  const threeDList = ["three", "fusion", "blender"]; //11,12,13
  const backEndList = ["c", "c++", "c#", "python", "sql"]; //14,15..18

  const [clickedZone, setClickedZone] = useState<number>(1);

  return (
    <section id={id}>
      <div className="tool-pattern"></div>

      <div className="tool-grid">
        {/* Icons */}
        {frontEndList.map((icon, index) => (
          <div
            className={`icon-${index + 1} grid-div ${
              clickedZone === 1 ? "grid-selected" : ""
            }`}
            onClick={() => {
              setClickedZone(1);
            }}
          >
            <ToolSvg svg={icon} isSelected={clickedZone === 1} />
          </div>
        ))}
        {backEndList.map((icon, index) => (
          <div
            className={`icon-${index + 11} grid-div ${
              clickedZone === 3 ? "grid-selected" : ""
            }`}
            onClick={() => {
              setClickedZone(3);
            }}
          >
            <ToolSvg svg={icon} isSelected={clickedZone === 3} />
          </div>
        ))}
        {threeDList.map((icon, index) => (
          <div
            className={`icon-${index + 16} grid-div ${
              clickedZone === 2 ? "grid-selected" : ""
            }`}
            onClick={() => {
              setClickedZone(2);
            }}
          >
            <ToolSvg svg={icon} isSelected={clickedZone === 2} />
          </div>
        ))}

        {/* Title section and imgs */}
        <div className="img-tool">
          <ToolRefImg imgType={clickedZone} />
        </div>
        <div className="title-tool">
          <h2>Tools.</h2>
        </div>
      </div>
    </section>
  );
};

export default Tool;
