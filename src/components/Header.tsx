import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Header({ resetApp }: { resetApp: () => void }) {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: 'secondary.main', color: 'white' }}
      >
        <Container maxWidth="md">
          <Toolbar sx={{ p: 0 }}>
            <img
              src="movie-clapper.png"
              className="header-logo"
              alt=""
              role="presentation"
              width="35"
              onClick={resetApp}
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
