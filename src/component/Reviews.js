import { Component } from "react";
import Axios from "axios";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { moviesId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=ccd9adf3aeff9b72683e2101789aada2`
    );
    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>name: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
