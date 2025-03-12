import { FaHome, FaUser, FaCog, FaChartBar, FaChartLine } from "react-icons/fa";

export const MenuTypes = [
  {
    id: 1,
    menu: "Dashboard",
    role: [1, 2, 3],
    link: "/dashboard",
    icon: <FaHome className="text-gray-500 hover:text-gray-200" />,
  },
  {
    id: 2,
    menu: "User Management",
    role: [1, 2, 3],
    // link: "/user-management",
    icon: <FaUser className="text-gray-500 hover:text-gray-200" />,
    submenu: [
      { submenuID: 1, link: "/user-list", label: "User List" },
      { submenuID: 2, link: "/role-management", label: "Role Management" },
      { submenuID: 3, link: "/permissions", label: "Permissions" },
    ],
  },
  {
    id: 3,
    menu: "Settings",
    role: [1, 2, 3],
    link: "/settings",
    icon: <FaCog className="text-gray-500 hover:text-gray-200" />,
  },
  {
    id: 4,
    menu: "Reports",
    role: [1, 2, 3],
    link: "/reports",
    icon: <FaChartBar className="text-gray-500 hover:text-gray-200" />,
    submenu: [
      { submenuID: 1, link: "/sales-report", label: "Sales Report" },
      { submenuID: 2, link: "/user-report", label: "User Report" },
    ],
  },
  {
    id: 5,
    menu: "Analytics",
    role: [1, 2, 3],
    link: "/analytics",
    icon: <FaChartLine className="text-gray-500 hover:text-gray-200" />,
    submenu: [
      { submenuID: 1, link: "/traffic", label: "Traffic" },
      { submenuID: 2, link: "/sales", label: "Sales" },
    ],
  },
];
