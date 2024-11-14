import "./Tool.scss";
import ToolDescp from "./ToolDescp";
import ToolGrid from "./ToolGrid";

interface Props {
  id: string;
}

const Tool = ({ id }: Props) => {
  return (
    <section id={id}>
      <div className="tool-pattern"></div>
      <ToolGrid />
      <ToolDescp />
    </section>
  );
};

export default Tool;
