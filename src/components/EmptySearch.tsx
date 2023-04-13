import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function EmptySearch() {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        borderRadius: '50% 20% / 10% 40%'
      }}
      color="text.secondary"
      mx={{ xxs: 1, sm: 'auto' }}
      maxWidth={{ sm: '300px' }}
      py={8}
      mb={4}
    >
      <Typography variant="h4" component="h1" textAlign="center" mx={5}>
        Search for a movie to begin!
      </Typography>
    </Box>
  );
}

export default EmptySearch;
