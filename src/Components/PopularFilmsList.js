import React from 'react';

const PopularFilmsList = ({ allFilms }) => {
  return(
    <div className='popular-films'>
      {
        allFilms.map((item, index) => {
          return(
            <div key={item.id} className='film'>
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} alt='film'/>
          </div>
          )
        })
      }
    </div>
  )
}

export default PopularFilmsList;
