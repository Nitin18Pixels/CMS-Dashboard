import React from "react";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import "./styles.css";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <button className="btn btn-light ms-2" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <span className="text-white">CMS</span>
      <div className="header-icons">
        <FaBell className="me-3 text-white" />
        <FaUserCircle className="text-white me-3" />
      </div>
    </nav>
  );
};

export default Header;
