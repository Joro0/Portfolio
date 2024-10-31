const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
