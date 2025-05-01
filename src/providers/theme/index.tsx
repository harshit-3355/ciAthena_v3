import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import type { ReactNode, FC } from 'react';

const gradientBackground =
  'linear-gradient(99.32deg, #0374BB 2.63%, #0374BA 27.69%, #9352E5 77.06%)';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#0374BB',
    },
    secondary: {
      main: '#F6F6F6',
    },
    common: {
      white: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: gradientBackground,
          color: '#fff',
          '&:hover': {
            background: gradientBackground,
            opacity: 0.9,
          },
        },
      },
    },
  },
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};
