import '../App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Header() {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <img src="film-reel-white.svg" className="header-logo" />
          <Typography variant="h5" component="h1" ml={2} flexGrow="1">
            Movie Search
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export default Header;
