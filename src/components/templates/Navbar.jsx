import { useState, useEffect } from "react";
import logoBrabus from "../../assets/brabuss.webp";
import account from "../../assets/account.png";
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
    <nav className={`${isFixed ? "navbar-fixed" : " "} z-10 h-16 flex w-full items-center justify-between fixed top-0 left-0`}>
      <span className="w-10 "></span>
      <Link to="/">
        <img className="w-10" src={logoBrabus} alt="" />
      </Link>
      <div className="w-10">
        <img className="mr-4 w-7" src={account} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
