import { Box } from '@mui/material';

import SidebarItem from '#/components/atoms/sidebar-item';
import useActiveRoute from '#/hooks/useActivePath';

import type React from 'react';

interface SidebarItemConfig {
  key: string;
  label: string;
  icon: JSX.Element;
  path: string;
}

interface SidebarProps {
  logoSrc: string;
  items: SidebarItemConfig[];
  onItemSelect: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ logoSrc, items, onItemSelect }) => {
  const { isPathActive } = useActiveRoute();

  return (
    <Box
      sx={{
        width: '5vw',
        minWidth: '84px',
        marginTop: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component='img'
        src={logoSrc}
        alt='Sidebar Logo'
        sx={{ width: '50%', objectFit: 'contain' }}
      />
      <Box sx={{ marginTop: '40px' }}>
        {items.map(({ key, label, icon, path }) => (
          <SidebarItem
            key={key}
            label={label}
            icon={icon}
            selected={isPathActive(path)}
            onClick={() => onItemSelect(path)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
