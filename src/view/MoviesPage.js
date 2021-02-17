import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import APImovie from "../servise/api";
import getQueryParams from "../utils/getQueryParams";
import Form from "../component/Form";

class Movies extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    // Проверка при первом рендере, если свойство query имеет значение
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      console.log("есть квери, можно фечить");
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=ccd9adf3aeff9b72683e2101789aada2`
        )
        .then((response) => this.setState({ movies: response.data.results }));

      // return
    }
    // axios.get(`https://api.themoviedb.org/3/search/movie?query=cat&api_key=ccd9adf3aeff9b72683e2101789aada2`)
    //     .then(response => this.setState({ movies: response.data.results }))  // заполняем шаблон других фильмов
  }

  componentDidUpdate(prevProps, prevState) {
    const params = getQueryParams(this.props.location.search); // получаем объект со свойством query из url
    console.log(params);
    const { query: prevQuery } = getQueryParams(prevProps.location.search); // предыдущее значение из search деструктуризировано из объекта
    const { query: nextQuery } = getQueryParams(this.props.location.search); // текущее значение из search деструктуризировано из объекта
    console.log("prevParams", prevQuery);
    console.log("nextParams", nextQuery);

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });

      APImovie.findMovies(nextQuery)
        .then((response) => this.setState({ movies: response.data.results }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    }); // добавляет запрос поиска в url
  };

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;

    return (
      <>
        <Form onSubmit={this.handleChangeQuery} />

        {loading && (
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        )}

        {movies.length > 0 && (
          <>
            <ul>
              {movies.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    to={{
                      pathname: `${match.url}/${id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}

export default Movies;
