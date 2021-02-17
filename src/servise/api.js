import Axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

const key = "ccd9adf3aeff9b72683e2101789aada2";

function fetchTrendMovies() {
  return Axios.get(`${baseURL}/trending/movie/day?api_key=${key}`);
}

function fetchDeitailMovie(id) {
  return Axios.get(`${baseURL}/movie/${id}?api_key=${key}`);
}

function fetchCast(id) {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ccd9adf3aeff9b72683e2101789aada2`
  );
}

function findMovies(movie) {
  return Axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=ccd9adf3aeff9b72683e2101789aada2`
  );
}

function fethReviews(id) {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ccd9adf3aeff9b72683e2101789aada2`
  );
}

const apiMovies = {
  fetchTrendMovies,
  fetchDeitailMovie,
  fetchCast,
  findMovies,
  fethReviews,
};

export default apiMovies;
