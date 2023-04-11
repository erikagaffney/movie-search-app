import Paper from '@mui/material/Paper';
import Typeography from '@mui/material/Typography';

function MovieGenre({ genre }) {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'primary.light',
        color: 'white'
      }}
    >
      <Typeography
        component="p"
        variant="body2"
        textAlign="center"
        p={1}
        mt={1}
        textTransform="uppercase"
      >
        Genre: {genre}
      </Typeography>
    </Paper>
  );
}

export default MovieGenre;
