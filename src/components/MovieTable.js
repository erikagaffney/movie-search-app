import '../App.css';
import EmptySearch from './EmptySearch';
import MovieRow from './MovieRow';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';

function MovieTable({ movies, isLoading }) {
  if (isLoading) {
    return (
      <Fade
        in={isLoading}
        style={{
          transitionDelay: isLoading ? '800ms' : '0ms'
        }}
        unmountOnExit
      >
        <Box height="40" textAlign="center" mt={8}>
          <CircularProgress />
        </Box>
      </Fade>
    );
  } else if (!movies || movies.length === 0) {
    return <EmptySearch />;
  }

  return (
    <>
      <Typography variant="h4" component="h2" color="text.secondary" my={4}>
        {movies.length} Results
      </Typography>
      <TableContainer>
        <Table aria-label="movie search results">
          <TableBody>
            {movies.map((movie) => (
              <MovieRow movie={movie} key={movie.imdbID} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MovieTable;
