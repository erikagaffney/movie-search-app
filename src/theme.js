import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#cec8c8'
    },
    secondary: {
      main: '#ff80ab'
    },
    text: {
      dark: '#1f2937'
    }
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4'
    },
    secondary: {
      main: '#ff80ab'
    },
    text: {
      primary: '#fafafa'
    },
    background: {
      default: '#3b3838'
    }
  }
});

const themes = { light: lightTheme, dark: darkTheme };

export default themes;
