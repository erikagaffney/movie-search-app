import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h5: {
      fontSize: '1.2rem'
    }
  },
  palette: {
    secondary: {
      main: '#ff80ab'
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
