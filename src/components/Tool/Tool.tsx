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
  ];
  const threeDList = ["three", "fusion", "blender"];
  const twoDList = ["figma", "illustrator"];
  const titleList = ["FRONT-END", "3D", "2D"];

  const [clickedZone, setClickedZone] = useState<number>(0);
  return (
    <section id={id}>
      <div className="tool-pattern"></div>

      <div className="tool-grid">
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
        {titleList.map((title, index) => (
          <div className={`title-${index + 1}`}>
            <p className="title-grid">{title}</p>
          </div>
        ))}
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
