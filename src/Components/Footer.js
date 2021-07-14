import React from 'react';

const Footer = () => {

  return(
    <div className='footer'>
      <div className='mainFooter'>
        <div className='block-left'>
          <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' alt='logo'/>
          <a href=''>ВСТУПИТЬ В СООБЩЕСТВО</a>
        </div>
        <div className='block'>
          <h3>ГЛАВНОЕ</h3>
          <ul type='none'>
            <li><a href=''>О TMDb</a></li>
            <li><a href=''>Связаться с нами</a></li>
            <li><a href=''>Форумы поддержки</a></li>
            <li><a href=''>API</a></li>
            <li><a href=''>Статус системы</a></li>
          </ul>
        </div>
        <div className='block'>
        <h3>УЧАСТВУЙТЕ</h3>
          <ul type='none'>
            <li><a href=''>Писание об участии</a></li>
            <li><a href=''>Сторонние приложения</a></li>
            <li><a href=''>Добавить новый фильм</a></li>
            <li><a href=''>APДобавить новый сериалI</a></li>
          </ul>
        </div>
        <div className='block'>
        <h3>СООБЩЕСТВО</h3>
          <ul type='none'>
            <li><a href=''>Руководства</a></li>
            <li><a href=''>Обсуждения</a></li>
            <li><a href=''>Доска почета</a></li>
            <li><a href=''>Twitter</a></li>
          </ul>
        </div>
        <div className='block'>
        <h3>О ПРАВЕ</h3>
          <ul type='none'>
            <li><a href=''>Условия использования</a></li>
            <li><a href=''>API Правила использования</a></li>
            <li><a href=''>Политика конфиденциальности</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;

