import "./Craft.scss";
import CraftItem from "./CraftItem";

interface Props {
  id: string;
}

const Craft = ({ id }: Props) => {
  return (
    <section id={id}>
      <h2>Crafts</h2>
      <CraftItem />
    </section>
  );
};

export default Craft;
