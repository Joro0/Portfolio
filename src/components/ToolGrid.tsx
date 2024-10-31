import ToolSvg from "./ToolSvg";

const ToolGrid = () => {
  //Opt: can make a map of an arr of svgIds to create all div tools.
  return (
    <div className="tool-grid">
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
      <div className="title1">
        <p className="p-tool">FRONT-END</p>
      </div>
      <div className="title2">
        <p className="p-tool">3D</p>
      </div>
      <div className="title3">
        <p className="p-tool">DESIGN</p>
      </div>
      <div className="aux1"></div>
      <div className="aux2"></div>
      <div className="aux3"></div>
    </div>
  );
};

export default ToolGrid;
