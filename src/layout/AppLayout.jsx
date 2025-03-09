import React, { useState } from "react";
import Sidebar from "../components/common/sidebar";
import Header from "../components/common/header";
import "./styles.css";

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app-layout">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`content ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
