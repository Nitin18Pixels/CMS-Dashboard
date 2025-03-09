import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MenuTypes } from "./Menu";
import "../../../layout/styles.css";

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
      <h4 className="text-center">{isOpen ? "Dashboard" : <FaAngleRight />}</h4>
      <ul className="list-unstyled">
        {MenuTypes.map((menu, index) => (
          <li key={menu.id} className="p-2">
            <Link to={menu.link} className="text-white text-decoration-none">
              {menu.icon} {isOpen && menu.menu}
            </Link>
            {menu.submenu && (
              <>
                <div onClick={() => toggleDropdown(index)} style={{ cursor: "pointer" }}>
                  {isOpen && (openDropdown === index ? <FaAngleDown /> : <FaAngleRight />)}
                </div>
                <ul
                  className={`list-unstyled ps-3 ${openDropdown === index && isOpen ? "dropdown-open" : "dropdown-closed"}`}
                  style={{ transition: "max-height 0.3s ease-in-out", overflow: "hidden", maxHeight: openDropdown === index && isOpen ? "500px" : "0", position: "relative", top: "0" }}
                >
                  {menu.submenu.map((submenu) => (
                    <li key={submenu.submenuID} className="p-2">
                      <Link to={submenu.link} className="text-white text-decoration-none">
                        {submenu.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
