import './App.css';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <img src="film-reel-white.svg" className="header-logo" />
          <Typography variant="h5" component="h1" sx={{ ml: 2, flexGrow: 1 }}>
            Movie Search
          </Typography>
          {/* <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              <SearchOutlined />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export default Header;
