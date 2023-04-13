import Paper from '@mui/material/Paper';
import Typeography from '@mui/material/Typography';

type Props = {
  genre: string;
};

function MovieGenre({ genre }: Props) {
  if (!genre || genre.toLowerCase() === 'n/a') {
    return <></>;
  }

  const formattedGenre: string = genre?.split(', ').join(' \u2022 ');
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
        Genre: {formattedGenre}
      </Typeography>
    </Paper>
  );
}

export default MovieGenre;
