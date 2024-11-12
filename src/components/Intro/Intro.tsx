import "./Intro.scss";
import IntroCanvas from "./IntroCanvas";
import IntroText from "./IntroText";

interface Props {
  id: string;
}

const Intro = ({ id }: Props) => {
  return (
    <section id={id}>
      <IntroText />
      <IntroCanvas />
    </section>
  );
};

export default Intro;
