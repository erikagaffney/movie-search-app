import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Header() {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <img
              src="film-reel-white.svg"
              className="header-logo"
              alt=""
              role="presentation"
              width="45"
            />
            <Typography variant="h5" component="span" ml={2} flexGrow="1">
              Movie Search
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
}

export default Header;
