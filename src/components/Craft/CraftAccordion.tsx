interface AccordionItem {
  title: string;
  text: string;
}

interface Props {
  selectedItem: number;
  handleSelectedItem: (item: number) => void;
}

const CraftAccordion = ({ selectedItem, handleSelectedItem }: Props) => {
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

  return (
    <div style={{ width: 280 }}>
      {accordionData.map((acc, index) => (
        <div key={index} className="accordion-item">
          <button
            onClick={() => handleSelectedItem(index)}
            className="acc-button"
          >
            {acc.title}
          </button>
          <div
            className={`acc-content ${selectedItem === index ? "open" : ""}`}
          >
            <p className="acc-text">{acc.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CraftAccordion;
