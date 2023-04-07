import '../App.css';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import EmptySearch from './EmptySearch';
import ErrorAlert from './ErrorAlert';
import Fade from '@mui/material/Fade';
import API from '../api/MoviesAPI';
import Header from './Header';
import SearchBar from './SearchBar';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  function submitSearch(e) {
    // prevent default
    e.preventDefault();

    // if user didn't input a search, don't call API
    if (!searchValue) {
      setShowAlert(true);
      return;
    }

    // set is loading to true
    setIsLoading(true);

    // make API call to get movies
    API.getMovies(searchValue)
      .then((res) => setMovies(res.Search))
      .catch((error) => setShowAlert(true))
      .finally(() => setIsLoading(false));
  }

  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      <Header />
      <main>
        <section>
          <SearchBar
            isLoading={isLoading}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            submitSearch={submitSearch}
          />
        </section>
        <section>
          {!movies && !isLoading && <EmptySearch />}
          {/* {movies && !isLoading && <Results movies={movies} />} */}
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
        </section>
      </main>
      <ErrorAlert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        alertMessage={
          searchValue
            ? 'Uh oh. Something went wrong on our end. Please try again.'
            : 'Please enter a movie title to start the search.'
        }
      />
    </Container>
  );
}

export default App;
