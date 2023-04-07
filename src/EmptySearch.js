import Grid from '@mui/material/Grid';
import GridItem from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './App.css';
import SearchBar from './SearchBar';
import { styled } from '@mui/material/styles';

const AccentBox = styled('div')(({ theme }) => {
  console.log(theme);
  return theme.mixins.toolbar;
});

function EmptySearch({ searchValue }) {
  return (
    <section>
      <Box
        sx={{
          py: 8,
          my: 2,
          mx: 1,
          backgroundColor: 'secondary.main',
          borderRadius: '50% 20% / 10% 40%'
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="text.secondary"
          sx={{ textAlign: 'center', mx: 5 }}
        >
          Search for a movie to begin!
        </Typography>
      </Box>
      <SearchBar searchValue={searchValue} />
    </section>
  );
}

export default EmptySearch;
