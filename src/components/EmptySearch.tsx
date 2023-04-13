import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function EmptySearch() {
  return (
    <Box>
      <img
        className="callout-image"
        src="popcorn-image.png"
        role="presentation"
        alt=""
      />
      <Typography
        variant="h4"
        component="h1"
        color="text.primary"
        textAlign="center"
        m={2}
      >
        Search for a movie to begin!
      </Typography>
    </Box>
  );
}

export default EmptySearch;
