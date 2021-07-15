import React from 'react';

const Welcome = () => {
  return(
    <div className='welcome'>
      <div className='welcome-main'>
        <div className='welcome-header'>
          <h2>Добро пожаловать.</h2>
          <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
        </div>
        <div className='welcome-input'>
          <input type='text' placeholder='Найти фильм, сериал, персону......'></input>
          <button>Поиск</button>
        </div>
      </div>
    </div>
  )
}

export default Welcome;