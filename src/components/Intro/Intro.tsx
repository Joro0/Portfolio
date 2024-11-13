import "./Intro.scss";
import IntroCanvas from "./IntroCanvas";

interface Props {
  id: string;
}

const Intro = ({ id }: Props) => {
  return (
    <section id={id}>
      <div className="intro-logo-container">
        <img src="./images/logo.png" alt="Logo" style={{ width: "36px" }} />
        <div className="logo-text">
          <div className="logo-name">
            <p>Joro</p>
          </div>
          <div className="logo-description">
            <p>Software Designer</p>
          </div>
        </div>
      </div>

      <div className="intro-text-container">
        <div className="slogan-container">
          <h1>Crafting your ideas</h1>
          <h1>Designing your stories</h1>
        </div>

        <p className="presentation-text">
          Hey there! I'm Jose Zuñiga, an independent creative developer. I
          create websites that are intuitive, visually striking, and tailored to
          achieve your objectives.
        </p>
      </div>

      <IntroCanvas />
    </section>
  );
};

export default Intro;
