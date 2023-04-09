import '../App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function EmptySearch() {
  return (
    <Box
      className="empty-search-callout"
      sx={{ mx: { xxs: 1, sm: 'auto' }, maxWidth: { sm: '300px' } }}
      py={8}
      my={8}
      backgroundColor="secondary.main"
      borderRadius="50% 20% / 10% 40%"
    >
      <Typography
        variant="h4"
        component="h2"
        color="text.secondary"
        textAlign="center"
        mx={5}
      >
        Search for a movie to begin!
      </Typography>
    </Box>
  );
}

export default EmptySearch;
