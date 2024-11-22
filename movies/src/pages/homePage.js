import React, { useState } from "react";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Pagination from "@mui/material/Pagination"; 
import { getMovies } from "../api/tmdb-api";


const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);

  
  const [page, setPage] = useState(1);
  const moviesPerPage = 5; 

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  
  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (event, value) => {
    setPage(value); 
  };

  
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <div>
      
      <PageTemplate
        title="Discover Movies"
        movies={currentMovies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />

      
      <Pagination
        count={Math.ceil(movies.length / moviesPerPage)} 
        page={page} 
        onChange={handlePageChange}
        color="primary"
        variant="outlined"
        shape="rounded"
        sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      />
    </div>
  );
};

export default HomePage;
