// components/common/query-history/history-section/style.ts

import { type SxProps, type Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = {
  mb: 4,
  px: 2,
  py: 1,
  borderLeft: '1px solid #D9D9D9',
};

export const titleStyle: SxProps<Theme> = {
  color: 'text.secondary',
  lineHeight: 1.3,
  fontSize: 12,
  fontWeight: 600,
  mb: 1,
};

export const listWrapperStyle: SxProps<Theme> = {
  width: '100%',
  borderLeft: '1px solid #D9D9D9',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  px: 1.25,
  '& :hover': {
    background:
      'linear-gradient(92.78deg, rgba(3, 116, 187, 0.11) 0.45%, rgba(210, 100, 194, 0.11) 48.18%, rgba(147, 82, 229, 0.11) 100.18%)',
  },
};

export const itemStyle: SxProps<Theme> = {
  width: '100%',
  p: 1,
  borderRadius: '4px',
  boxSizing: 'border-box',
  '& :hover': {
    background: 'none',
  },
};

export const primaryTextStyle: SxProps<Theme> = {
  color: 'rgba(156, 156, 156, 1)',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 2,
};

export const secondaryTextStyle: SxProps<Theme> = {
  color: 'rgba(71, 85, 105, 1)',
  fontSize: 14,
  lineHeight: 1.3,
  letterSpacing: '0.5px',
};
