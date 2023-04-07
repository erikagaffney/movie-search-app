// MOVE TO env
const apiKey = '***REMOVED***';
const baseUrl = `http://www.omdbapi.com/?type=movie&page=1&apikey=${apiKey}`;

async function getMovies(searchText) {
  const response = await fetch(baseUrl + `&s=${searchText}`);
  return response.json();
}

async function getMovieDetails(movieId) {
  const response = await fetch(baseUrl + `&i=${movieId}`);
  return response.json();
}

export default {
  getMovies,
  getMovieDetails
};
