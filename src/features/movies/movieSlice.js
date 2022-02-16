import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/APIs/MovieApi";
import { APIKey } from "../../common/APIs/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const resp = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );

    return resp.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
    "movies/fetchAsyncSeries",
    async () => {
      const seriesText = "Harry";
      const resp = await movieApi.get(
        `?apiKey=${APIKey}&s=${seriesText}&type=series`
      );
  
      return resp.data;
    }
  );
  

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
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
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
