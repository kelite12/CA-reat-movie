
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTemplate from '../components/templateMovieListPage';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = 'YOUR_KEY_GOES_HERE';
    const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`;

    useEffect(() => {
        axios.get(UPCOMING_MOVIES_URL)
            .then(response => {
                const allMovies = response.data.results;

                
                const filterDate = new Date(new Date().getFullYear(), 9, 1);

               
                const filteredMovies = allMovies.filter(movie => {
                    const releaseDate = new Date(movie.release_date);
                    return releaseDate >= filterDate;
                });

                setMovies(filteredMovies);
            })
            .catch(error => console.error("Error fetching upcoming movies:", error));
    }, []);
    
           const addToPlaylist = (movieId) => true
    return (
        <PageTemplate
          title="UpComing Movies"
          movies={movies}
          action={(movie) => {
            return <addToPlaylistIcon movie={movie} />
          }}

        />
        
    );
};

export default UpcomingMoviesPage;
