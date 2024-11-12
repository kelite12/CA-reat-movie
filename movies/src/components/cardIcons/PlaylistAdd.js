import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from "@mui/icons-material/PlaylistAdd";

const PlaylistAdd = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handlePlaylistAdd = (e) => {
    e.preventDefault();
    context.PlaylistAdd(movie);
  };

  return (
    <IconButton aria-label="PlaylistAdd" onClick={handlePlaylistAdd}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlaylistAdd;