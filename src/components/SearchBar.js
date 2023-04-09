import '../App.css';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';

function SearchBar({ searchValue, setSearchValue, submitSearch, isLoading }) {
  return (
    <form autoComplete="off" onSubmit={submitSearch}>
      <Grid container spacing={0} mt={7} alignItems="center" wrap="nowrap">
        <TextField
          fullWidth
          className="search-text-field"
          disabled={isLoading}
          label="Search movie title..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
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
    </form>
  );
}

export default SearchBar;
