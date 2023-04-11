import Container from '@mui/material/Container';

import '../App.css';
import API from '../api/MoviesAPI';
import Content from './Content';
import ErrorAlert from './ErrorAlert';
import Header from './Header';
import SearchBar from './SearchBar';

import { useState } from 'react';

function App() {
  // loading state for the movies call
  const [isLoading, setIsLoading] = useState(false);
  // the movie results from the API
  const [movies, setMovies] = useState(null);
  // error alert for failed API call
  const [showAlert, setShowAlert] = useState(false);
  // reason for no results
  const [noResultsReason, setNoResultsReason] = useState('');

  function triggerSearch(searchValue) {
    // set is loading to true
    setIsLoading(true);

    // make API call to get movies
    API.getMovies(searchValue)
      .then((res) => {
        if (!res.Search) {
          setNoResultsReason(res.Error);
          setMovies([]);
        } else {
          setMovies(res.Search);
          setNoResultsReason('');
        }
      })
      .catch(() => setShowAlert(true))
      .finally(() => setIsLoading(false));
  }

  return (
    <Container maxWidth="md" sx={{ mb: 5 }}>
      <Header />
      <main>
        <section>
          <SearchBar isLoading={isLoading} triggerSearch={triggerSearch} />
        </section>
        <Content
          movies={movies}
          isLoading={isLoading}
          noResultsReason={noResultsReason}
        />
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
