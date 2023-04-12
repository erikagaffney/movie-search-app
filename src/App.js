import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

import './App.css';
import API from './api/MoviesAPI';
import EmptySearch from './components/EmptySearch';
import ErrorAlert from './components/ErrorAlert';
import Header from './components/Header';
import MovieTable from './components/MovieTable';
import NoResults from './components/NoResults';
import SearchBar from './components/SearchBar';

import { useState } from 'react';

let isFirstLoad = true;
let currentSearch = '';

function App() {
  // loading state for the movies call
  const [isLoading, setIsLoading] = useState(false);
  // the movie results from the API
  const [results, setResults] = useState({
    movies: null,
    count: 0,
    reason: ''
  });
  // error alert for failed API call
  const [showAlert, setShowAlert] = useState(false);
  // previous searches to search for
  const [previousSearches, setPreviousSearches] = useState([]);

  function addSearchToPrevious(count) {
    const searches = [...previousSearches];
    if (searches.find(({ value }) => value === currentSearch)) {
      return;
    }

    if (searches.length > 5) {
      searches.pop();
    }

    searches.unshift({ value: currentSearch, count });
    setPreviousSearches([...searches]);
  }

  function handleSuccess({
    Search: movies,
    totalResults: count = 0,
    Error: reason
  }) {
    reason || addSearchToPrevious(count);
    setResults({ movies, count, reason });
  }

  function onSearch(searchValue, pageNumber = 1) {
    currentSearch = searchValue;
    setIsLoading(true);
    API.getMovies(searchValue, pageNumber)
      .then(handleSuccess)
      .catch(() => setShowAlert(true))
      .finally(() => {
        setIsLoading(false);
        isFirstLoad = false;
      });
  }
  const updatePage = onSearch.bind(null, currentSearch);

  return (
    <Container maxWidth="md" sx={{ mb: 5 }}>
      <Header />
      <main>
        <section>
          <Box sx={isLoading ? { mb: 0 } : { mb: 4.5 }}>
            <SearchBar isLoading={isLoading} onSearch={onSearch} />
          </Box>
        </section>
        <section>
          {isLoading && <LinearProgress sx={{ my: 2 }} />}
          {isFirstLoad && <EmptySearch />}
          {!isFirstLoad &&
            (results.count > 0 ? (
              <MovieTable results={results} updatePage={updatePage} />
            ) : (
              <NoResults
                reason={results.reason}
                previousSearches={previousSearches}
                onSearch={onSearch}
              />
            ))}
        </section>
      </main>
      <ErrorAlert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        alertMessage="Uh oh. Something went wrong on our end. Please try again."
      />
    </Container>
  );
}

export default App;
