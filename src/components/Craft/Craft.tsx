import "./Craft.scss";
import CraftItem from "./CraftItem";

interface Props {
  id: string;
}

const Craft = ({ id }: Props) => {
  const accordionData: { title: string; text: string; img: string }[] = [
    {
      title: "Why",
      text: "This app streamlines the tedious task of matching thousands of product codes (SKUs) by replacing manual Excel functions with an efficient, custom-built solution.",
      img: "/images/skucheker_why.webp",
    },
    {
      title: "What",
      text: "The app reads two Excel files, filters out unnecessary data, and matches items from the report.",
      img: "/images/skucheker_what.webp",
    },
    {
      title: "How",
      text: "Built with JavaScript, Html, Css. The app uses an Excel library and regular expressions, reducing the task from 10 hours to 5 minutes.",
      img: "/images/skucheker_how.webp",
    },
  ];

  return (
    <section id={id}>
      <h2>Crafts</h2>
      <CraftItem
        title={"Sku Checker"}
        itemData={accordionData}
        position="left"
      />
      {/* Playground section */}
    </section>
  );
};

export default Craft;
