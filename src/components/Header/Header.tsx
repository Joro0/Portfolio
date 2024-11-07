import "./Header.scss";

interface Props {
  id: string;
}

const Header = ({ id }: Props) => {
  return (
    <section id={id}>
      <div className="logo-block">
        <img src="./images/logo.png" alt="Logo" style={{ width: "36px" }} />
        <div className="logo-text">
          <div className="logo-name">Joro</div>
          <div className="logo-description">Software Designer</div>
        </div>
      </div>
      <div className="nav-bar">
        <a href="#">Work</a>
        <a href="#">About</a>
        <a href="#">CV</a>
        <a href="#">LinkedIn</a>
      </div>
    </section>
  );
};

export default Header;
