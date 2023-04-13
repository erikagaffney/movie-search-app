// MOVE TO env
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = `http://www.omdbapi.com/?type=movie&apikey=${apiKey}`;

async function getMovies(searchText: string, pageNumber: number) {
  const response = await fetch(baseUrl + `&s=${searchText}&page=${pageNumber}`);
  return response.json();
}

async function getMovieDetails(movieId: string) {
  const response = await fetch(baseUrl + `&i=${movieId}`);
  return response.json();
}

const api = {
  getMovies,
  getMovieDetails
};

export default api;