import ToolSvg from "./ToolSvg";

const ToolGrid = () => {
  {
    /* IDEA: i create a component that contain all svgs, and depending of the prop, it return the svg wanted */
  }
  return (
    <div className="tool-wrapper">
      <div className="tool1">
        <ToolSvg svg="javascript" />
      </div>
      <div className="tool2">
        <ToolSvg svg="typescript" />
      </div>
      <div className="tool3">
        <ToolSvg svg="react" />
      </div>
      <div className="tool4">
        <ToolSvg svg="angular" />
      </div>
      <div className="tool5">
        <ToolSvg svg="next" />
      </div>
      <div className="tool6">
        <ToolSvg svg="git" />
      </div>
      <div className="tool7">
        <ToolSvg svg="redux" />
      </div>
      <div className="tool8">
        <ToolSvg svg="sass" />
      </div>
      <div className="tool9">
        <ToolSvg svg="three" />
      </div>
      <div className="tool10">
        <ToolSvg svg="fusion" />
      </div>
      <div className="tool11">
        <ToolSvg svg="blender" />
      </div>
      <div className="tool12">
        <ToolSvg svg="figma" />
      </div>
      <div className="tool13">
        <ToolSvg svg="illustrator" />
      </div>
      <div className="tool14"></div>
    </div>
  );
};

export default ToolGrid;
