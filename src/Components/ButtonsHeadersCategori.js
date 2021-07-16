import React from 'react';
import Popular from './Popular';

const ButtonsHeadersCategori = ({ setUrl }) => {
  const onlineChange = () => {
    setUrl(`https://www.themoviedb.org/remote/panel?panel=popular_scroller&group=on-tv`)
  }

  return(
    <div >
      <h2>Что популярно</h2>
      <div>
        <button onClick={() => onlineChange()}>Онлайн</button>
        <button>По ТВ</button>
        <button>Напрокат</button>
        <button>В кинотеатрах</button>
      </div>
    </div>
  )
}

export default ButtonsHeadersCategori;

// https://api.themoviedb.org/3/movie/now_playing?api_key=aab385760ca6fce33987decb57c7b65f&language=en-US&page=1