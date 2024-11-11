import "./Craft.scss";
import CraftItem from "./CraftItem";

interface Props {
  id: string;
}

const Craft = ({ id }: Props) => {
  const accordionData: { title: string; text: string }[] = [
    {
      title: "Introduction",
      text: "This app is a custom-built item checker, designed to save time and simplify the process of matching product codes.",
    },
    {
      title: "Why",
      text: "The accountant used Excel to match thousands of items with Excel functions, making the task tedious and time-consuming.",
    },
    {
      title: "What",
      text: "The app reads two Excel files, filters out unnecessary data, and matches items from the report.",
    },
    {
      title: "How",
      text: "Built with JavaScript, Html, Css. The app uses an Excel library and regular expressions, reducing the task from 10 hours to 5 minutes.",
    },
  ];

  const imageDirections: string[] = [
    "/images/skucheker_intro.jpg",
    "/images/skucheker_why.jpg",
    "/images/skucheker_what.jpg",
    "/images/skucheker_how.jpg",
  ];

  return (
    <section id={id}>
      <h2>Crafts</h2>
      <CraftItem
        title={"Sku Checker"}
        accData={accordionData}
        imgDir={imageDirections}
      />
    </section>
  );
};

export default Craft;
