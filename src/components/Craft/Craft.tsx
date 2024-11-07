import "./Craft.scss";
import CraftAccordion from "./CraftAccordion";
import CraftImages from "./CraftImages";

interface Props {
  id: string;
}

const Craft = ({ id }: Props) => {
  return (
    <section id={id}>
      <h2>Crafts</h2>

      <h3>SKU Checker</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CraftAccordion />
        <CraftImages />
      </div>
    </section>
  );
};

export default Craft;
