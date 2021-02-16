import { Component } from "react";

export default class Form extends Component {
  state = {
    query: "",
  };

  hangleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.query.trim() === "") {
      alert("Введите что-нибудь в поиск");
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: " " });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="qery"
            value={this.state.query}
            onChange={this.hangleChange}
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}
