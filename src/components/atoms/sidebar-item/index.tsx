import { IconButton } from '@mui/material';
import React from 'react';

export interface SidebarItemProps {
  label: string;
  icon: JSX.Element;
  selected?: boolean;
  onClick?: () => void;
  tooltipPlacement?: 'right' | 'left' | 'top' | 'bottom';
  iconSize?: 'small' | 'medium' | 'large';
  hoverColor?: string;
  selectedColor?: string;
  height?: string | number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon,
  selected = false,
  onClick,
  iconSize = 'small',
  hoverColor = '#74CAFF',
  selectedColor = '#165379',
  height = '60px',
}) => {
  const [hovered, setHovered] = React.useState(false);

  const showHighlight = hovered || selected;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: selected ? selectedColor : 'transparent', // only selected affects background
        padding: '5px 32px 12px 32px',
        color: '#fff',
        cursor: 'pointer',
        height,
        transition: 'background 0.3s, color 0.3s',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <IconButton sx={{ color: showHighlight ? hoverColor : '#fff' }} size={iconSize}>
        {icon}
      </IconButton>

      {showHighlight && (
        <div
          style={{
            paddingTop: '2px',
            color: hoverColor,
            fontSize: '0.75rem',
            maxWidth: '100%',
            textAlign: 'center',
            whiteSpace: 'normal',
            overflowWrap: 'break-word',
          }}
          title={label}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
