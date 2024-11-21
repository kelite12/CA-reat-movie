import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";

const TrendingPage = () => {
  const { data, error, isLoading, isError } = useQuery("trending", getTrendingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
        return null;
      }}
    />
  );
};

export default TrendingPage;
