interface Props {
  selectedItem: number;
  handleSelectedItem: (item: number) => void;
  accordionData: { title: string; text: string }[];
}

const CraftAccordion = ({
  selectedItem,
  handleSelectedItem,
  accordionData,
}: Props) => {
  return (
    <div className="accordion-container">
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
