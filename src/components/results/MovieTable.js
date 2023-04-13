import '../../App.css';
import MoviePoster from './MoviePoster';
import MovieDetail from './MovieDetail';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlined from '@mui/icons-material/KeyboardArrowUpOutlined';
import Pagination from '@mui/material/Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

function MovieRow({ movie }) {
  const { Title: title, Year: year, imdbID: imdbId, Poster: poster } = movie;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={`${imdbId} HighLevel`} sx={{ minHeight: '125px' }}>
        <TableCell
          sx={{
            pr: { xs: 0, sm: 1 },
            p: 1,
            display: { xxs: 'none', xs: 'table-cell' }
          }}
          className="movie-poster-container"
        >
          <MoviePoster poster={poster} />
        </TableCell>
        <TableCell
          sx={{
            px: 0,
            py: 1
          }}
        >
          <Typography variant="h6" component="p" color="text.secondary">
            {title}
          </Typography>
          {year && (
            <Typography variant="body" component="p" color="text.secondary">
              Released In: {year}
            </Typography>
          )}
        </TableCell>
        <TableCell sx={{ py: 0, pr: 1, width: '60px' }}>
          <IconButton
            aria-label={`${open ? 'collapse' : 'expand'} details`}
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow key={imdbId + ' Detail'}>
        <TableCell sx={{ p: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <MovieDetail imdbID={imdbId} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function MovieTable({ results: { movies, count }, updatePage }) {
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => setPageNumber(1), [count]);

  const renderedMovies = movies?.map((movie) => (
    <MovieRow movie={movie} key={movie.imdbID} />
  ));

  function scrollToTop(event) {
    const anchor = (event?.target?.ownerDocument || document).querySelector(
      '#anchor'
    );

    anchor &&
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
  }

  function onPageChange(event, value) {
    setPageNumber(value);
    updatePage(value);
    scrollToTop(event);
  }

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        color="text.secondary"
        mb={4}
        id="anchor"
      >
        {count} Results
      </Typography>
      <TableContainer>
        <Table aria-label="movie search results">
          <TableHead>
            <TableRow>
              <TableCell
                component="th"
                sx={{
                  p: 1,
                  display: { xxs: 'none', xs: 'table-cell' }
                }}
              >
                Movie Poster
              </TableCell>
              <TableCell
                component="th"
                sx={{
                  px: 0,
                  py: 1
                }}
              >
                Movie Title
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{renderedMovies}</TableBody>
        </Table>
      </TableContainer>
      {count > 10 && (
        <Pagination
          sx={{ py: 3, '& > ul': { justifyContent: 'center' } }}
          count={Math.ceil(count / 10)}
          page={pageNumber}
          onChange={onPageChange}
          color="secondary"
        />
      )}
    </>
  );
}

export default MovieTable;
