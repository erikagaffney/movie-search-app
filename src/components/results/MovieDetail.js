import '../../App.css';
import API from '../../api/MoviesAPI';
import MovieGenre from './MovieGenre';
import MovieRatings from './MovieRatings';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typeography from '@mui/material/Typography';

import { useEffect, useState } from 'react';

function MovieDetail({ imdbID }) {
  // movie details returned from the movie by ID call in the API
  const [movieDetails, setMovieDetails] = useState({
    plot: '',
    language: '',
    rated: '',
    ratings: [],
    genre: '',
    otherDetails: {}
  });
  // loading state for the movie details
  const [detailsLoading, setDetailsLoading] = useState(true);
  // error on loading the details
  const [error, setError] = useState(false);

  function setDefaultValue(detail, name) {
    if (!detail || detail.toLowerCase() === 'n/a')
      return `No ${name} available.`;

    return detail;
  }

  // Set details based on what's available
  function extractMovieDetails(res) {
    let {
      Plot: plot,
      Language: language,
      Rated: rated,
      Ratings: ratings,
      Genre: genre,
      ...otherDetails
    } = res;

    plot = setDefaultValue(plot, 'plot');
    language = setDefaultValue(language, 'language');
    rated = setDefaultValue(rated, 'rating');

    setMovieDetails({ plot, language, rated, ratings, genre, otherDetails });
  }

  function fetchMovieDetails() {
    setDetailsLoading(true);
    setError(false);
    API.getMovieDetails(imdbID)
      .then((res) => (res.Error ? setError(true) : extractMovieDetails(res)))
      .catch(() => setError(true))
      .finally(() => setDetailsLoading(false));
  }

  useEffect(() => {
    // make API call to get movie details when first rendered
    fetchMovieDetails();
  }, [imdbID]);

  if (error) {
    return (
      <Alert
        severity="error"
        sx={{ m: 2 }}
        action={
          <Button color="inherit" size="small" onClick={fetchMovieDetails}>
            TRY AGAIN
          </Button>
        }
      >
        Unable to load movie details.
      </Alert>
    );
  }

  return (
    <>
      {detailsLoading && <Skeleton sx={{ backgroundClor: 'primary.light' }} />}
      {movieDetails?.genre !== 'N/A' && (
        <MovieGenre genre={movieDetails?.genre} />
      )}
      <TableContainer component={Paper} sx={{ my: 1 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Rated</TableCell>
              <TableCell align="center" sx={{ px: 0 }}>
                Language
              </TableCell>
              <TableCell align="center">Critic Ratings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="movie details">
              <TableCell align="center">
                <Typeography component="span" variant="body2">
                  {detailsLoading ? <Skeleton /> : movieDetails.rated}
                </Typeography>
              </TableCell>
              <TableCell align="center">
                <Typeography component="span" variant="body2" sx={{ p: 0 }}>
                  {detailsLoading ? <Skeleton /> : movieDetails.language}
                </Typeography>
              </TableCell>
              <TableCell align="center" key="movie ratings">
                {detailsLoading ? (
                  <Skeleton height={100} className="ratings-loader" />
                ) : (
                  <MovieRatings ratings={movieDetails.ratings} />
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ py: 2 }}>
        <Typeography component="p" variant="body1" gutterBottom>
          Plot:
        </Typeography>
        <Typeography component="p" variant="body2">
          {detailsLoading ? <Skeleton /> : movieDetails.plot}
        </Typeography>

        {/* <Button variant="text" sx={{ pl: 0, mt: 1 }}>
          {detailsLoading ? <Skeleton /> : 'See more details'}
        </Button> */}
      </Box>
    </>
  );
}

export default MovieDetail;
