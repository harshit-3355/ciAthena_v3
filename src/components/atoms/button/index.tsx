import { type Theme } from '@emotion/react';
import { type SxProps } from '@mui/material';
import Button from '@mui/material/Button';

import type React from 'react';

interface CommonButtonProps {
  /** Button label text */
  label: string;

  /** Style variant (default: 'contained') */
  variant?: 'text' | 'outlined' | 'contained';

  /** Color theme (default: 'primary') */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

  /** Disable the button (default: false) */
  disabled?: boolean;

  /** Button size (default: 'medium') */
  size?: 'small' | 'medium' | 'large';

  /** Custom styles using MUI's sx prop */
  sx?: SxProps<Theme>;

  /** Click event handler */
  onClick?: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  onClick,
  disabled = false,
  size = 'medium',
  sx = { textTransform: 'none' },
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
