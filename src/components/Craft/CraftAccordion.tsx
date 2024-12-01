import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
    <div className="craft-info-container">
      <div className="accordion-container">
        {accordionData.map((acc, index) => (
          <div key={index} className="accordion-item">
            <button
              onClick={() => handleSelectedItem(index)}
              className="acc-button"
            >
              <p>{acc.title}</p>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`acc-awesome ${
                  selectedItem === index ? "open" : ""
                }`}
              />
            </button>
            <div
              className={`acc-text-content ${
                selectedItem === index ? "open" : ""
              }`}
            >
              <p className="acc-text">{acc.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "auto" }}>
        <div className="label-container">
          <label className="accordion-label">javascript</label>
          <label className="accordion-label">html</label>
          <label className="accordion-label">css</label>
          <label className="accordion-label">fullstack</label>
        </div>

        <button className="github-button">
          <FontAwesomeIcon icon={faGithub} /> View Code
        </button>
      </div>
    </div>
  );
};

export default CraftAccordion;
