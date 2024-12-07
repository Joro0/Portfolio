import { useEffect, useState } from "react";
import "./Header.scss";

interface Props {
  id: string;
}

const Header: React.FC<Props> = ({ id }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#intro-section", label: "Home" },
    { href: "#about-section", label: "About" },
    { href: "#tool-section", label: "Tools" },
    { href: "#craft-section", label: "Crafts" },
    { href: "#footer", label: "Contact" },
  ];

  return (
    <header
      id={id}
      className={`header ${isFixed ? "pos-fixed" : "pos-absolute"}`}
    >
      {navLinks.map(({ href, label }, index) => (
        <a key={index} href={href}>
          {label}
        </a>
      ))}
    </header>
  );
};

export default Header;
