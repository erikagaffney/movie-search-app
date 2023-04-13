import '../App.css';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { inputLabelClasses } from '@mui/material/InputLabel';

type Props = {
  onSearch: (search: string) => void;
  isLoading: boolean;
};

function SearchBar({ onSearch, isLoading }: Props) {
  // the value of the search
  const [searchValue, setSearchValue] = useState<string>('');
  // error to show when input is empty
  const [error, setError] = useState<boolean>(false);

  function submitSearch(e: React.FormEvent): void {
    // prevent full page reload
    e.preventDefault();

    // if not a search value, show the input error
    // don't call the trigger search or API
    if (!searchValue) {
      setError(true);
      return;
    }

    setError(false);
    onSearch(searchValue);
    setSearchValue('');
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
          InputLabelProps={{
            sx: {
              [`&.${inputLabelClasses.shrink}`]: {
                // set the color of the label when shrinked for ADA purposes
                color: 'primary.dark'
              }
            }
          }}
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
