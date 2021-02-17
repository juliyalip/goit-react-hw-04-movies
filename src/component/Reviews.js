import { Component } from "react";

import APImovie from "../servise/api";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { moviesId } = this.props.match.params;
    const response = await APImovie.fethReviews(moviesId);
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
        {!reviews && "we don't have many reviews"}
      </>
    );
  }
}
