import React, { useState } from "react";
import { Link } from "react-router-dom/dist";

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
          <Link to="/" className="font-semibold text-shadow-black text-lg hover:text-indigo-800 ">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className="font-semibold text-shadow-black text-lg hover:text-indigo-800 ">
            ABOUT US
          </Link>
        </li>
        <li>
        <Link to="/products" className="font-semibold text-shadow-black text-lg hover:text-indigo-800 ">
            CARS
          </Link>
        </li>
        <li>
        <Link to="/ourteam" className="font-semibold text-shadow-black text-lg hover:text-indigo-800 ">
            OUR TEAM
          </Link>
        </li>
        <li className="mt-16">
          <a href="#contact">Language</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
