import { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import APImovies from "../servise/api";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=ccd9adf3aeff9b72683e2101789aada2"
    );
    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    console.log(this.props.match.url);

    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: this.props.location },
                }}
              >
                {" "}
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
