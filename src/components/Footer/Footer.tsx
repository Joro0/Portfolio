import "./Footer.scss";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-left">
        <div>logo</div>
        <div>
          <p>© 2024 Jose Zuñiga. All Rights Reserved.</p>
          <p>
            Made with love and Earl Grey Tea Lattes (light on the bergamot,
            extra calm).
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-contact">CONTACT</p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/jose-zu%C3%B1iga-vargas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:jose.alonsozv12@gmail.com">Mail</a>
          </li>
          <li>
            <a
              href="../../../public/pdf/cv-jose-zuniga.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Joro0"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
