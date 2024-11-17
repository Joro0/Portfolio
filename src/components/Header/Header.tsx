import { useEffect, useState } from "react";
import "./Header.scss";

interface Props {
  id: string;
}

const Header = ({ id }: Props) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id={id} className={isFixed ? "pos-fixed" : "pos-absolute"}>
      <a href="#intro-section">Home</a>
      <a href="#about-section">About</a>
      <a href="#tool-section">Tools</a>
      <a href="#craft-section">Crafts</a>
      <a href="#footer">Contact</a>
    </section>
  );
};

export default Header;
