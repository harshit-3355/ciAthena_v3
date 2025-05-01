import { Routes, Route } from 'react-router-dom';

import { routesConfig } from '#/utils/routes';

const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.map(({ path, component }, index) => (
        <Route key={index} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
