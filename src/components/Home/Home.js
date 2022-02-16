import React, {useEffect} from 'react'
import movieApi from "../../common/APIs/MovieApi"
import {APIKey} from "../../common/APIs/MovieApiKey"


function Home() {
useEffect(()=>{
  const movieText ="Harry"
  const fetchMovies= async ()=>{
    const resp= await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((err)=>{
      console.log(err)
    })
    console.log("resp",resp);
  }
  fetchMovies()
},[])

  return (
    <div>
      <h1>
        Home
      </h1>
      </div>
  )
}

export default Home