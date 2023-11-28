import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const hamburgerline = (
    <div className="hamburger-btn">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""} z-10`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? "✕" : hamburgerline}
      </button>
      <ul className="mt-12 ml-12">
        <li>
          <a className="font-semibold text-shadow-black text-lg" href="#home">ABOUT US</a>
          
        </li>
        <li>
          <a className="font-semibold text-shadow-black text-lg" href="#about">CARS</a>
        </li>
        <li>
          <a className="font-semibold text-shadow-black text-lg" href="#services">OUR TEAM</a>
        </li>
        <li className="mt-16">
          <a href="#contact">Language</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
