import React, {useEffect} from 'react'
import movieApi from "../../common/APIs/MovieApi"
import {APIKey} from "../../common/APIs/MovieApiKey"
import {useDispatch} from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
import MovieListing from '../MovieListing/MovieListing'


function Home() {

  const dispatch = useDispatch()
useEffect(()=>{
  const movieText ="Harry"
  const fetchMovies= async ()=>{
    const resp= await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((err)=>{
      console.log(err)
    })
    dispatch(addMovies(resp.data))
  }
  fetchMovies()
},[])

  return (
    <div>
   
       <MovieListing />
    
      </div>
  )
}

export default Home