import { Component } from "react";
import Axios from "axios";

export default class Cast extends Component {
  state = {
    actors: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ccd9adf3aeff9b72683e2101789aada2`
    );
    console.log(response.cast);
  }

  render() {
    return <h1>Actors</h1>;
  }
}
