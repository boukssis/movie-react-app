import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
}

export default Home;
