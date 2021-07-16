import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const urlLogo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg';

  return(
    <div className='mainNavigation'>
      <div className='containerLeftRight'>
      <div className='leftNavigation'>
        <img src={urlLogo} alt='logo'/>
        <ul className="topmenu">
          <li className="submenu-link">Фильмы
            <ul className="submenu">
              <li>Популярные</li>
              <li>Смотрят сейчас</li>
              <li>Ожидаемые</li>
              <li>Лучшие</li>
            </ul>
          </li>
          <li className="submenu-link">Сериалы
            <ul className="submenu">
              <li>Популярные</li>
              <li>В эфире сегодня</li>
              <li>По телевидению</li>
              <li>Лучшие</li>
            </ul>
          </li>
          <li className="submenu-link">Люди
            <ul className="submenu">
              <li>Популярные люди</li>
            </ul>
          </li>
          <li className="submenu-link">Еще
            <ul className="submenu">
              <li>Обсуждения</li>
              <li>Доска почета</li>
              <li>Поддержка</li>
              <li>API</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='rightNavigation'>
      <Link to=''>
          <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg' alt='plus'/>
        </Link>
        <div className='language'>RU</div>
        <Link to='/login'>Войти</Link>
        <Link to='/logup'>Присоединиться к TMDB</Link>
        <Link to='/search'>
          <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg' alt='search'/>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Header;

