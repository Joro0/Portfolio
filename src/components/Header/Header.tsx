import "./Header.scss";

interface Props {
  id: string;
}

//TASK:
// - when user pass the intro section, the header appears and becomes a sticky
// window.scrollY -> 100 = pass header height

const Header = ({ id }: Props) => {
  return (
    <section id={id}>
      <a href="#intro-section">Home</a>
      <a href="#about-section">About</a>
      <a href="#tool-section">Tools</a>
      <a href="#craft-section">Crafts</a>
      <a href="#footer">Contact</a>
    </section>
  );
};

export default Header;
