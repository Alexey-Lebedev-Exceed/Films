import React, { useState, useEffect } from 'react';
import PopularFilmsList from './PopularFilmsList';
import axios from 'axios';

const Popular = ({ url }) => {
  const [allFilms, setAllFilms] = useState([])

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