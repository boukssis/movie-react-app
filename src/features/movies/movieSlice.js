import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/APIs/MovieApi";
import { APIKey } from "../../common/APIs/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Spider-man";
    const resp = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );

    return resp.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const seriesText = "Friends";
    const resp = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );

    return resp.data;
  }
);

export const fetchAsyncMovieOrSerie = createAsyncThunk(
  "movies/fetchAsyncMovieOrSerie",
  async (id) => {
    const resp = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);

    return resp.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
  
    removeSelectMovieOrShow:(state)=>{
      state.selectedMovieOrShow={}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: (state, { payload }) => {
      console.log("Rejected");
    },

    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrSerie.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShow = ((state)=>state.movies.selectedMovieOrShow)
 

export default movieSlice.reducer;
