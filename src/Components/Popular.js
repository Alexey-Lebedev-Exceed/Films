import React, { useState, useEffect } from 'react';
import PopularFilmsList from './PopularFilmsList';
import axios from 'axios';



const Popular = () => {
  const [allFilms, setAllFilms] = useState([])

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=star%20wars&page=1&include_adult=false`;

  useEffect(() => {
    const fetchData = () => {
      axios.get(url)
        .then(res => {
          setAllFilms(res.data.results)
        })
        .catch(err => {
          console.log(err.res)
        })
    }
    fetchData();
  })
  return(
    <div className='popular'>
      <PopularFilmsList allFilms={allFilms}/>
    </div>
  )
}

export default Popular;