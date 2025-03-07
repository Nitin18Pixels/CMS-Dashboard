import React, { useState } from "react";
import { FaAngleDown, FaAngleRight, FaHome, FaUser, FaCog, FaChartBar, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.css";

const Sidebar = ({ isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      className={`bg-dark text-white p-3 sidebar ${isOpen ? "d-block" : "d-none d-md-block"}`}
      style={{ width: isOpen ? "250px" : "80px", transition: "width 0.3s ease-in-out", overflowX: "hidden" }}
    >
      <h4 className="text-center">{isOpen ? "Dashboard" : <FaHome />}</h4>
      <ul className="list-unstyled">
        <li className="p-2">
          <Link to="/" className="text-white text-decoration-none">
            <FaHome className="me-2" /> {isOpen && "Home"}
          </Link>
        </li>
        <li className="p-2">
          <Link to="/profile" className="text-white text-decoration-none">
            <FaUser className="me-2" /> {isOpen && "Profile"}
          </Link>
        </li>
        <li className="p-2">
          <Link to="/settings" className="text-white text-decoration-none">
            <FaCog className="me-2" /> {isOpen && "Settings"}
          </Link>
        </li>
        <li className="p-2" onClick={() => toggleDropdown(1)} style={{ cursor: "pointer" }}>
          <FaChartBar className="me-2" /> {isOpen && "Reports"} {isOpen && (openDropdown === 1 ? <FaAngleDown /> : <FaAngleRight />)}
        </li>
        {openDropdown === 1 && isOpen && (
          <ul className="list-unstyled ps-3">
            <li className="p-2">
              <Link to="/reports" className="text-white text-decoration-none">
                Report 1
              </Link>
            </li>
            <li className="p-2">
              <Link to="/reports" className="text-white text-decoration-none">
                Report 2
              </Link>
            </li>
          </ul>
        )}
        <li className="p-2" onClick={() => toggleDropdown(2)} style={{ cursor: "pointer" }}>
          <FaChartLine className="me-2" /> {isOpen && "Analytics"} {isOpen && (openDropdown === 2 ? <FaAngleDown /> : <FaAngleRight />)}
        </li>
        {openDropdown === 2 && isOpen && (
          <ul className="list-unstyled ps-3">
            <li className="p-2">
              <Link to="/analytics" className="text-white text-decoration-none">
                Traffic
              </Link>
            </li>
            <li className="p-2">
              <Link to="/analytics" className="text-white text-decoration-none">
                Sales
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
