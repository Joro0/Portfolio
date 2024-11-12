import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

      <div className="label-container">
        <label className="accordion-label">javascript</label>
        <label className="accordion-label">html</label>
        <label className="accordion-label">css</label>
        <label className="accordion-label">fullstack</label>
      </div>

      <button className="github-button">
        <FontAwesomeIcon icon={faGithub} /> View Work
      </button>
    </div>
  );
};

export default CraftAccordion;
