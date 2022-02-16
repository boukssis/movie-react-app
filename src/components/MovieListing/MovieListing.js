import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import  MovieCard  from "../MovieCard/MovieCard";
import './MovieListing.scss'
function MovieListing() {
  const movies = useSelector(getAllMovies);
   let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((element, index) => (
        <MovieCard key={index} movie={element} />
    ))
    ) : (
      <div className="movie-errors">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wraper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );  
}

export default MovieListing;
