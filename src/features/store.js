import {configureStore} from '@reduxjs/toolkit'
import moviesreducers from './movies/movieSlice'
export const store =configureStore({
    reducer:{
        movies:moviesreducers
    }
})  