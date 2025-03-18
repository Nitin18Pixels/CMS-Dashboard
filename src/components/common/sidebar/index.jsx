import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MenuTypes } from "./Menu";
import "../../../layout/styles.css";

const Sidebar = ({ isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      className={`p-3 sidebar ${isOpen ? "sidebar-open" : ""}`}
      style={{
        width: isOpen ? "250px" : "80px",
        transition: "width 0.3s ease-in-out",
        overflowX: "hidden",
      }}
    >
      <h4 className="text-center">{isOpen ? "Learn With Us" : <FaAngleRight />}</h4>
      <ul className="list-unstyled">
        {MenuTypes.map((menu, index) => {
          const isActive =
            location.pathname === menu.link ||
            (menu.submenu &&
              menu.submenu.some((submenu) => location.pathname === submenu.link));
          return (
            <li
              key={menu.id}
              className={`p-2 ${isActive ? "active-menu" : ""}`}
            >
              {menu.submenu ? (
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleDropdown(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    {menu.icon}
                    <span className="ms-2">{isOpen && menu.menu}</span>
                  </div>
                  {isOpen &&
                    (openDropdown === index ? (
                      <FaAngleDown />
                    ) : (
                      <FaAngleRight />
                    ))}
                </div>
              ) : (
                <Link
                  to={menu.link}
                  className={`text-decoration-none ${isActive ? "active-link" : ""}`}
                >
                  {menu.icon}
                  <span className="ms-2">{isOpen && menu.menu}</span>
                </Link>
              )}

              {menu.submenu && (
                <ul
                  className={`list-unstyled ps-3 ${openDropdown === index && isOpen
                    ? "dropdown-open"
                    : "dropdown-closed"
                    }`}
                  style={{
                    maxHeight:
                      openDropdown === index && isOpen ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  {menu.submenu.map((submenu) => {
                    const isSubmenuActive =
                      location.pathname === submenu.link;
                    return (
                      <li
                        key={submenu.submenuID}
                        className={`p-2 ${isSubmenuActive ? "active-submenu" : ""}`}
                      >
                        <Link
                          to={submenu.link}
                          className={`text-decoration-none ${isSubmenuActive ? "active-link" : ""}`}
                        >
                          {submenu.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;