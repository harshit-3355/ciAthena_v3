import { Box, Typography } from '@mui/material';

import type React from 'react';

interface LeftContentProps {
  icon: React.ReactNode;
  logo: string;
  heading: string;
}

interface RightContentProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

interface AppHeaderProps {
  leftContent: LeftContentProps;
  rightContent: RightContentProps;
  backgroundImage: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ leftContent, rightContent, backgroundImage }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '90px',
        color: '#fff',
      }}
    >
      {/* LEFT CONTENT */}
      <Box
        sx={{
          ml: 4,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {leftContent.icon}
        <Box
          sx={{
            ml: '24px',
            mr: '8px',
            borderLeft: '1px solid transparent',
            width: '1px',
            height: '25px',
            backgroundColor: '#A9A9A9',
          }}
        />
        <Box sx={{ mx: 1 }}>
          <img src={leftContent.logo} alt='Logo' />
        </Box>
        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>{leftContent.heading}</Typography>
      </Box>

      {/* RIGHT CONTENT */}
      <Box
        onClick={rightContent.onClick}
        sx={{
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: '#165379',
          },
        }}
      >
        {rightContent.icon}
        <Typography variant='body2' sx={{ mb: '2px', ml: 1 }}>
          {rightContent.label}
        </Typography>
      </Box>
    </Box>
  );
};

export default AppHeader;
