import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
}

export default Home;
