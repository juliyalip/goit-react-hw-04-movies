import { Route, Switch } from "react-router-dom";
import React from "react";

import Layout from "./component/Layout";
import HomePage from "./view/HomePage";
import Movies from "./view/MoviesPage";
import MovieDetailsPage from "./view/MovieDetailsPage";

const App = () => (
  <>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/movies/:moviesId" component={MovieDetailsPage} />

        <Route path="/movies" exact component={Movies} />
      </Switch>
    </Layout>
  </>
);

export default App;
