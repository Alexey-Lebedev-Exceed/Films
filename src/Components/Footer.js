import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

  return(
    <div className='footer'>
      <div className='mainFooter'>
        <div className='block-left'>
          <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' alt='logo'/>
          <Link to='/logup'>ВСТУПИТЬ В СООБЩЕСТВО</Link>
        </div>
        <div className='block'>
          <h3>ГЛАВНОЕ</h3>
          <ul type='none'>
            <li><Link to='/about'>О TMDb</Link></li>
            <li><Link to='/about/staying-in-touch'>Связаться с нами</Link></li>
            <li><Link to='/talk'>Форумы поддержки</Link></li>
            <li><Link to='/documentation/api'>API</Link></li>
            <li><Link to='/'>Статус системы</Link></li>
          </ul>
        </div>
        <div className='block'>
        <h3>УЧАСТВУЙТЕ</h3>
          <ul type='none'>
            <li><Link to='/bible'>Писание об участии</Link></li>
            <li><Link to='/apps'>Сторонние приложения</Link></li>
            <li><Link to='/movie/new'>Добавить новый фильм</Link></li>
            <li><Link to='/tv/new'>APДобавить новый сериалI</Link></li>
          </ul>
        </div>
        <div className='block'>
        <h3>СООБЩЕСТВО</h3>
          <ul type='none'>
            <li><Link to='/documentation/community/guidelines'>Руководства</Link></li>
            <li><Link to='/discuss'>Обсуждения</Link></li>
            <li><Link to='/leaderboard'>Доска почета</Link></li>
            <li><Link to='https://twitter.com/themoviedb'>Twitter</Link></li>
          </ul>
        </div>
        <div className='block'>
        <h3>О ПРАВЕ</h3>
          <ul type='none'>
            <li><Link to='/terms-of-use'>Условия использования</Link></li>
            <li><Link to='/documentation/api/terms-of-use'>API Правила использования</Link></li>
            <li><Link to='/privacy-policy'>Политика конфиденциальности</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;

