import "./Footer.scss";

interface Props {
  id: string;
}

const Footer = ({ id }: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <section id={id}>
      <div className="footer-left">
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
        <div>
          <p>© {currentYear} Jose Zuñiga. All Rights Reserved.</p>
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
              href="/Portfolio/pdf/cv-jose-zuniga.pdf"
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
