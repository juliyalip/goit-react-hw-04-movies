import Axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

const key = "ccd9adf3aeff9b72683e2101789aada2";

function fetchTrendMovies() {
  return;
  Axios.get(`${baseURL}/trending/movie/day?api_key=${key}`);
}

const apiMovies = { fetchTrendMovies };

export default apiMovies;
