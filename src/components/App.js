import Container from '@mui/material/Container';

import '../App.css';
import API from '../api/MoviesAPI';
import ErrorAlert from './ErrorAlert';
import Header from './Header';
import MovieTable from './MovieTable';
import SearchBar from './SearchBar';

import { useState } from 'react';

function App() {
  // the value of the current search (in the search bar)
  const [searchValue, setSearchValue] = useState('');
  // loading state for the movies call
  const [isLoading, setIsLoading] = useState(false);
  // the movie results from the API
  const [movies, setMovies] = useState(null);
  // error alert for empty search or failed API call
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
      .catch(() => setShowAlert(true))
      .finally(() => setIsLoading(false));
  }

  return (
    <Container maxWidth="md" sx={{ mb: 5 }}>
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
          <MovieTable movies={movies} isLoading={isLoading} />
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
