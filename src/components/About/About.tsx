import "./About.scss";
import AboutImage from "./AboutImage";
import AboutPattern from "./AboutPattern";
import AboutText from "./AboutText";

interface Props {
  id: string;
}

const About = ({ id }: Props) => {
  return (
    <section id={id}>
      <AboutText />
      <AboutPattern />
      <AboutImage />
    </section>
  );
};

export default About;
