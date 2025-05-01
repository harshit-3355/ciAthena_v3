/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '#/components/molecules/sidebar';
import { routesConfig } from '#/utils/routes';
import ciAthenaLogo from '#/assets/ci-athena.svg';
import { useNavigate } from 'react-router-dom';
import { useTextTranslation } from '#/utils/translation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { translate } = useTextTranslation();

  const [translatedRoutes, setTranslatedRoutes] = React.useState(routesConfig);

  React.useEffect(() => {
    const translateRoutes = () => {
      const updatedRoutes = routesConfig.map(route => ({
        ...route,
        label: translate(route.label),
      }));
      setTranslatedRoutes(updatedRoutes);
    };
    void translateRoutes();
  }, [translate]);

  const onSideBarItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ background: '#04324F', height: '100vh', width: '100vw', display: 'flex' }}>
      <Sidebar logoSrc={ciAthenaLogo} items={translatedRoutes} onItemSelect={onSideBarItemClick} />

      <Box
        sx={{
          width: 'calc(100vw -12vw)',
          height: '100vh',
          overflowX: 'scroll',
          overflowY: 'scroll',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
