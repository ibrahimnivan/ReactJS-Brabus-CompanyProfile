import { useState, useEffect } from "react";
import logoBrabus from "../../assets/brabuss.webp";
import { Link } from "react-router-dom/dist";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  console.log(isFixed);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = 450;
      console.log(window.scrollY);

      if (window.scrollY > scroll) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener pada unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <nav className={isFixed ? "navbar-fixed z-10 h-16" : "navbar-container z-10 h-16"}>
      <span className="w-20"></span>
      <Link to="/">
        <img className="w-10 align-" src={logoBrabus} alt="" />
      </Link>
      <p className="w-20">account</p>
    </nav>
  );
};

export default Navbar;
