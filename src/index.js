import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import themes from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.light}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
