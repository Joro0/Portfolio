import "./Header.scss";

interface Props {
  id: string;
}

//TASK:
// - when user pass the intro section, the header appears and becomes a sticky

const Header = ({ id }: Props) => {
  return (
    <section id={id}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Tools</a>
      <a href="#">Crafts</a>
      <a href="#">Contact</a>
    </section>
  );
};

export default Header;
