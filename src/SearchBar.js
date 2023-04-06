import './App.css';
import Grid from '@mui/material/Grid';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

function SearchBar({ searchValue }) {
  return (
    <form autoComplete="off" className="search-form">
      <Grid
        container
        spacing={0}
        alignItems="center"
        wrap="nowrap"
        sx={{ mt: 4 }}
      >
        <TextField
          fullWidth
          className="search-text-field"
          label="Search movie title..."
          value={searchValue}
          id="search-movies"
          sx={{ borderRadius: '10px 0 0 10px' }}
          InputProps={{
            endAdornment: searchValue && (
              <InputAdornment position="end">
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <IconButton
          aria-label="search"
          type="submit"
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: '0 6px 6px 0',
            p: 2
          }}
        >
          <SearchOutlinedIcon sx={{ color: 'white' }} />
        </IconButton>
      </Grid>
    </form>
  );
}

export default SearchBar;
