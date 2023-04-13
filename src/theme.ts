import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
  }
  // The value of `type Breakpoint` will be `"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"`.
}

const theme = createTheme({
  typography: {
    h5: {
      fontSize: '1.2rem'
    }
  },
  palette: {
    secondary: {
      main: '#a71317'
    },
    primary: {
      light: '#40c1d6',
      main: '#00a4bf',
      dark: '#006273'
    }
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 375,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

theme.typography.h5 = {
  fontSize: '1.2rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem'
  }
};

export default theme;
