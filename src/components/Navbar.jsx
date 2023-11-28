import { useState, useEffect } from "react";
import logoBrabus from "../assets/brabuss.webp"


const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  console.log(isFixed);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#company-overview');
      const fixednav = header.offsetTop;

      if (window.scrollY > fixednav) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener pada unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);

  return (
    <nav className={isFixed ? 'navbar-fixed z-10 h-16' : 'navbar-container z-10 h-16'} >
      <span className="w-20"></span>
      <img className="w-10 align-" src={logoBrabus} alt="" />
      <p className="w-20">account</p>
    </nav>
  )
}

export default Navbar