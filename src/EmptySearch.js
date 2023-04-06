import Grid from '@mui/material/Grid';
import GridItem from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './App.css';
import SearchBar from './SearchBar';

function EmptySearch({ searchValue }) {
  return (
    <section className="empty-search-container">
      <Grid container direction="column" sx={{ mt: 6 }}>
        <GridItem
          container
          spacing={0}
          alignItems="center"
          sx={{
            height: 200,
            p: 3,
            mb: 3,
            backgroundColor: 'secondary.main',
            borderRadius: '50% 20% / 10% 40%'
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            color="text.dark"
            sx={{ textAlign: 'center', ml: 2, mr: 2 }}
          >
            Search for a movie to begin!
          </Typography>
        </GridItem>
        <GridItem>
          <SearchBar searchValue={searchValue} />
        </GridItem>
      </Grid>
    </section>
  );
}

export default EmptySearch;
