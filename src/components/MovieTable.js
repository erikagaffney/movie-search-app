import '../App.css';
import MovieDetail from './MovieDetail';
import MoviePoster from './MoviePoster';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlined from '@mui/icons-material/KeyboardArrowUpOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

function MovieRow({ movie }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={`${movie.imdbID} HighLevel`} sx={{ minHeight: '125px' }}>
        <TableCell
          sx={{
            pr: { xs: 0, sm: 1 },
            p: 1,
            display: { xxs: 'none', xs: 'table-cell' }
          }}
          className="movie-poster-container"
        >
          <MoviePoster movie={movie} />
        </TableCell>
        <TableCell
          sx={{
            px: 0,
            py: 1
          }}
        >
          <Typography variant="h6" component="p" color="text.secondary">
            {movie.Title}
          </Typography>
          {movie.Year && (
            <Typography variant="body" component="p" color="text.secondary">
              Released In: {movie.Year}
            </Typography>
          )}
        </TableCell>
        <TableCell sx={{ py: 0, pr: 1, width: '60px' }}>
          <IconButton
            aria-label="expand details"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow key={movie.imdbID + ' Detail'}>
        <TableCell sx={{ p: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <MovieDetail movie={movie} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function MovieTable({ movies }) {
  const renderedMovies = movies?.map((movie) => (
    <MovieRow movie={movie} key={movie.imdbID} />
  ));

  return (
    <>
      <Typography variant="h4" component="h1" color="text.secondary" my={4}>
        {movies?.length} Results
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
    </>
  );
}

export default MovieTable;
