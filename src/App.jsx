import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout/AppLayout";
import { routesConfig, componentMapping, singleRouteConfig } from "./Routes";

const AppContent = () => {
  const location = useLocation();

  const isLoginRoute = singleRouteConfig.some((route) => route.path === location.pathname);

  return (
    <>
      <Routes>
        {/* Render singleRouteConfig routes without layout */}
        {singleRouteConfig.map((route) => {
          const Component = componentMapping[route.component];
          return <Route key={route.path} path={route.path} element={<Component />} />;
        })}
      </Routes>
      {!isLoginRoute && (
        <Routes>
          {/* Render routes with layout */}
          <Route
            path="*"
            element={
              <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    {routesConfig.map((route) => {
                      const Component = componentMapping[route.component];
                      return <Route key={route.path} path={route.path} element={<Component />} />;
                    })}
                  </Routes>
                </Suspense>
              </Layout>
            }
          />
        </Routes>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
