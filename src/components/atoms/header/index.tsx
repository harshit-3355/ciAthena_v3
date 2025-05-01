import { InfoOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { styles } from '#/components/atoms/header/style';

import type React from 'react';

interface LeftContentProps {
  icon: React.ReactNode;
  logo: string;
  heading: string;
  showDivider?: boolean;
}

interface RightContentProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  label?: string;
}

interface AppHeaderProps {
  leftContent: LeftContentProps;
  rightContent: RightContentProps;
  backgroundImage: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  leftContent: { icon: leftIcon, logo, heading, showDivider = false },
  rightContent,
  backgroundImage,
}) => {
  const { headerContainer, leftBox, divider, logoBox, headingText, rightBox, rightText } = styles;

  const {
    onClick = () => {},
    icon = <InfoOutlined sx={{ fontSize: 18 }} />,
    label = 'App Overview',
  } = rightContent;

  return (
    <Box sx={headerContainer(backgroundImage)}>
      {/* LEFT CONTENT */}
      <Box sx={leftBox}>
        {leftIcon}
        {showDivider ? <Box sx={divider} /> : null}
        <Box sx={logoBox}>
          <img src={logo} alt='Logo' />
        </Box>
        <Typography sx={headingText}>{heading}</Typography>
      </Box>

      {/* RIGHT CONTENT */}
      <Box onClick={onClick} sx={rightBox}>
        {icon}
        <Typography variant='body2' sx={rightText}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default AppHeader;
