import '../App.css';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';

import { useState } from 'react';

function SearchBar({ triggerSearch, isLoading }) {
  // searchBarValue
  const [searchValue, setSearchValue] = useState('');
  // error to show when input is empty
  const [error, setError] = useState(false);

  function submitSearch(e) {
    e.preventDefault();

    if (!searchValue) {
      setError(true);
      return;
    }

    setError(false);
    triggerSearch(searchValue);
  }

  return (
    <Grid
      container
      spacing={0}
      mt={7}
      alignItems="flex-start"
      wrap="nowrap"
      component="form"
      autoComplete="off"
      onSubmit={submitSearch}
      noValidate
    >
      <Grid item flexGrow={1}>
        <TextField
          fullWidth
          id="searchBar"
          className="search-text-field"
          disabled={isLoading}
          required
          label="Enter a movie title"
          value={searchValue}
          error={error}
          helperText={error && 'Please enter a movie title to start the search'}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Grid>
      <Grid item>
        <IconButton
          aria-label="search"
          className="btn-search-submit"
          type="submit"
          disabled={isLoading}
          sx={{
            '&:hover': { backgroundColor: 'primary.dark' },
            '&:disabled': { backgroundColor: 'grey' },
            backgroundColor: 'primary.main',
            borderRadius: '0 6px 6px 0',
            p: 2
          }}
        >
          <SearchOutlinedIcon sx={{ color: 'white' }} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default SearchBar;
