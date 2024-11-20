import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieRecommendations } from "../api/tmdb-api";
import MovieList from "../components/movieList"; 

const RecommendationsPage = () => {
  const { id } = useParams(); 
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    getMovieRecommendations(id)
      .then((data) => {
        setRecommendations(data); 
        setLoading(false); 
      })
      .catch((error) => console.error("Error fetching recommendations:", error));
  }, [id]);

  if (loading) return <p>Loading recommendations...</p>; 

  return (
    <div>
      <h2>Recommended Movies</h2>
      
      <MovieList movies={recommendations} />
    </div>
  );
};

export default RecommendationsPage;
