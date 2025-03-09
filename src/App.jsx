import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/AppLayout";
import { routesConfig, componentMapping } from "./Routes";

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
