/* eslint-disable */ // WIP
import { Box, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { routesConfig } from '#/utils/routes';
import { useTextTranslation } from '#/utils/translation';

import ciAthenaLogo from 'assets/ci-athena.svg';

import Sidebar from 'components/molecules/sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { translate } = useTextTranslation();

  const theme = useTheme();

  const onSideBarItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ background: '#04324F', height: '100vh', width: '100vw', display: 'flex' }}>
      <Sidebar
        logoSrc={ciAthenaLogo}
        items={routesConfig.map(route => ({ ...route, label: translate(route.label) }))}
        onItemSelect={onSideBarItemClick}
      />

      <Box
        sx={{
          width: '100%',
          maxWidth: '100%',
          height: '100vh',
          overflowX: 'scroll',
          overflowY: 'scroll',
          background: theme.palette.common.white,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
