import '../App.css';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlined from '@mui/icons-material/KeyboardArrowUpOutlined';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { useState } from 'react';

function MovieRow({ movie }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={`${movie.imdbID} HighLevel`} sx={{ minHeight: '125px' }}>
        <TableCell
          sx={{
            pr: { xs: 0, sm: 1 },
            py: 1,
            pl: 1,
            display: { xxs: 'none', xs: 'table-cell' }
          }}
          className="movie-poster-container"
        >
          <MoviePoster movie={movie} />
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          align="left"
          sx={{
            px: 0,
            py: 1
          }}
        >
          <Typography variant="h6" component="p" color="text.secondary">
            {movie.Title}
          </Typography>
          <Typography variant="body" component="p" color="text.secondary">
            {'Released In: ' + movie.Year}
          </Typography>
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
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default MovieRow;
