import { lazy } from "react";

const componentMapping = {
  Home: lazy(() => import("./pages/Home")),
  Profile: lazy(() => import("./pages/Profile")),
  Settings: lazy(() => import("./pages/Settings")),
  Reports: lazy(() => import("./pages/Reports")),
  Analytics: lazy(() => import("./pages/Analytics")),
  Login: lazy(() => import("./auth/login/Login")),
};

const routesConfig = [
  {
    path: "/",
    component: "Home",
  },
  {
    path: "/profile",
    component: "Profile",
  },
  {
    path: "/settings",
    component: "Settings",
  },
  {
    path: "/reports",
    component: "Reports",
  },
  {
    path: "/analytics",
    component: "Analytics",
  },
  {
    path: "/user-list",
    component: "UserList",
  },
  {
    path: "/role-management",
    component: "RoleManagement",
  },
  {
    path: "/permissions",
    component: "Permissions",
  },
  {
    path: "/sales-report",
    component: "SalesReport",
  },
  {
    path: "/user-report",
    component: "UserReport",
  },
  {
    path: "/traffic",
    component: "Traffic",
  },
  {
    path: "/sales",
    component: "Sales",
  },
];

const singleRouteConfig = [
  {
    path: "/login",
    component: "Login",
  },
]

export { routesConfig, componentMapping, singleRouteConfig };
