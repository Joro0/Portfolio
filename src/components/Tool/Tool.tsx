import "./Tool.scss";
import ToolDescp from "./ToolDescp";
import ToolGrid from "./ToolGrid";

interface Props {
  id: string;
}

const Tool = ({ id }: Props) => {
  return (
    <section id={id}>
      <div className="tool-wrapper">
        <ToolGrid />
        <ToolDescp />
      </div>
    </section>
  );
};

export default Tool;
