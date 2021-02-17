import { Component } from "react";
import Axios from "axios";
import { Link, Route } from "react-router-dom";

import Cast from "../component/Cast";
import Reviews from "../component/Reviews";

class MovieDetailsPage extends Component {
  state = {
    id: null,
    title: null,
    popularity: null,
    overview: null,
    poster_path: null,
    release_date: null,
  };

  async componentDidMount() {
    const { moviesId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${moviesId}?api_key=ccd9adf3aeff9b72683e2101789aada2`
    );
    console.log(response.data);
    this.setState({ ...response.data });
  }

  handeGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push({ pathname: "/movies" });
  };

  render() {
    console.log(this.props.match.url);

    const {
      title,
      popularity,
      overview,
      poster_path,
      release_date,
    } = this.state;

    return (
      <>
        <button type="button" onClick={this.handeGoBack}>
          Go back
        </button>
        <h1>страница фильма</h1>
        <div className="container">
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
          />
          <div className="context">
            <p>{release_date}</p>
            <h1> {title}</h1>
            <p>popularity: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
        </div>
        <hr></hr>
        <p>Additional information</p>
        <ul>
          <li>
            <h3>
              <Link to={`${this.props.match.url}/cast`}>Cast</Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
            </h3>
          </li>
        </ul>
        <hr></hr>

        <Route
          path={`${this.props.match.path}/cast`}
          render={(props) => <Cast {...props} />}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={(props) => <Reviews {...props} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
