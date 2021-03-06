import { Component } from "react";

import APImovie from "../servise/api";

export default class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const { moviesId } = this.props.match.params;
    const response = await APImovie.fetchCast(moviesId);
    this.setState({ actors: response.data.cast.slice(0, 3) });
  }

  render() {
    const { actors } = this.state;

    return (
      <>
        {actors && (
          <ul>
            {actors.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                  alt={name}
                  className="actors"
                />
                <p>{name}</p>
                <p>character: {character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
