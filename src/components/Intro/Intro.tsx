import "./Intro.scss";
import IntroCanvas from "./IntroCanvas";

interface Props {
  id: string;
}

const Intro = ({ id }: Props) => {
  return (
    <section id={id}>
      <div className="intro-logo-container">
        <div className="logo-container">
          <svg
            id="logo-svg"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 63.61 78.32"
          >
            <path
              className="logo-svg-path"
              d="M92.7,4.32v39.6S88.86,67.5,67.08,67.5,40.44,48.69,40.21,42.7H38.73l-7.59,10s3.84,26,34.32,28"
              transform="translate(-30.09 -3.32)"
            />
            <path
              className="logo-svg-path"
              d="M52.5,41.49s-.36,13.59,13.32,13.32S80,41.49,80,41.49V4.32H77l-9.65,9.76v35s-.12,4.9-3.43,5.67"
              transform="translate(-30.09 -3.32)"
            />
          </svg>
        </div>
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

      <div className="intro-test"></div>
      <IntroCanvas />
    </section>
  );
};

export default Intro;
