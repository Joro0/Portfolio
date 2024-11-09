import { useState } from "react";

interface AccordionItem {
  title: string;
  text: string;
}

const CraftAccordionB = () => {
  const [displayAccordion, setDisplayAccordion] = useState<number>(0);
  const accordionData: AccordionItem[] = [
    {
      title: "Introduction",
      text: "This app is a custom-built item checker, designed to save time and simplify the process of matching product codes.",
    },
    {
      title: "Why",
      text: "The accountant used Excel to manually match thousands of items, making the task tedious and time-consuming.",
    },
    {
      title: "What",
      text: "The app reads two Excel files, filters out duplicate SKUs, and matches items from the report.",
    },
    {
      title: "How",
      text: "Built with React and TypeScript, the app uses an Excel library and regular expressions, reducing the task from 10 hours to 5 minutes.",
    },
  ];

  const accordionElements = accordionData.map((acc, index) => {
    return (
      <>
        <button
          onClick={() => {
            setDisplayAccordion(index);
          }}
          className="acc-button"
        >
          {acc.title}
        </button>
        <div style={{ display: displayAccordion === index ? "block" : "none" }}>
          <p className="acc-text">{acc.text}</p>
        </div>
      </>
    );
  });

  return <div style={{ width: 350 }}>{accordionElements}</div>;
};

export default CraftAccordionB;
