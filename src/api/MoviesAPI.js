// MOVE TO env
const apiKey = '623ba810';
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
