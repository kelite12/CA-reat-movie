import React, { useState } from "react";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Pagination from "@mui/material/Pagination"; // 引入分页组件
import { getMovies } from "../api/tmdb-api";


const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);

  // 定义分页相关的状态
  const [page, setPage] = useState(1);
  const moviesPerPage = 5; // 每页显示 5 部电影

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  // 计算当前页的电影
  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (event, value) => {
    setPage(value); // 更新当前页
  };

  // 本地存储用户喜欢的电影
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <div>
      {/* 显示当前页的电影 */}
      <PageTemplate
        title="Discover Movies"
        movies={currentMovies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />

      {/* 添加分页组件 */}
      <Pagination
        count={Math.ceil(movies.length / moviesPerPage)} // 总页数
        page={page} // 当前页码
        onChange={handlePageChange} // 页码变化时更新状态
        color="primary"
        variant="outlined"
        shape="rounded"
        sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      />
    </div>
  );
};

export default HomePage;
