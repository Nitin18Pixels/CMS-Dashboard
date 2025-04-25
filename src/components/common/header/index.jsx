import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../layout/styles.css";

const Header = ({ toggleSidebar }) => {
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const toggleNotifications = () => {
    setNotificationVisible(!isNotificationVisible);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!isProfileDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setNotificationVisible(false);
    }
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setProfileDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-dark d-flex align-items-center header">
      <div className="d-flex align-items-center">
        <button className="btn btn-light ms-2" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="d-flex align-items-center ms-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            style={{ maxWidth: "200px" }}
          />
          <button className="btn btn-light ms-2">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="header-icons ms-auto position-relative">
        <FaBell className="me-3 fa-bell" onClick={toggleNotifications} />
        {isNotificationVisible && (
          <div
            ref={notificationRef}
            className="notification-dropdown position-absolute bg-white rounded shadow"
          >
            <div className="notification-header p-2 border-bottom">
              <strong>Notifications</strong>
            </div>
            <div className="notification-item p-2">😀 Curabitur id eros quis nunc...</div>
            <div className="notification-item p-2">😂 Duis malesuada justo eu sap...</div>
            <div className="notification-item p-2">😍 Donec at nisi sit amet tortor...</div>
            <div className="notification-item p-2">😱 In gravida mauris et nisi</div>
            <div className="notification-item p-2">😡 Praesent eu lacus in libero di...</div>
            <div className="notification-item p-2">😜 Nunc fringilla lorem</div>
            <div className="notification-footer p-2 text-center border-top">
              <a href="#" className="text-primary text-decoration-none">View all</a>
            </div>
          </div>
        )}
        <FaUserCircle
          className="me-3 fa-user-circle"
          onClick={toggleProfileDropdown}
        />
        {isProfileDropdownVisible && (
          <div
            ref={profileRef}
            className="profile-dropdown position-absolute bg-white rounded shadow"
          >
            <div className="profile-item p-2">
              <Link to="/profile" className="text-dark text-decoration-none">Profile</Link>
            </div>
            <div className="profile-item p-2">
              <Link to="/settings" className="text-dark text-decoration-none">Settings</Link>
            </div>
            <div className="profile-item p-2">
              <Link to="/logout" className="text-dark text-decoration-none">Logout</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;