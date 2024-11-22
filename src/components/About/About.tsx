import "./About.scss";
import AboutImage from "./AboutImage";

interface Props {
  id: string;
}

const About = ({ id }: Props) => {
  return (
    <section id={id}>
      <div className="about-text">
        <h2>A bit about me.</h2>
        <p>
          I believe in lifelong learning, a philosophy that has shaped my
          journey as a developer. With a foundation in{" "}
          <strong>mechatronic engineering</strong> and a{" "}
          <strong>natural inclination for creativity</strong>, I bring an unique
          blend of artistic vision and logic. This balance fuels my commitment
          to creating solutions that are both functional and thoughtfully
          designed.
        </p>
      </div>
      <div className="about-pattern-container"></div>
      <AboutImage />
    </section>
  );
};

export default About;
