import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import firebase from 'firebase';
import Header from './Header';
import Footer from './Footer';


const LogUp = () => {
  const [user, setUser] = useState()
  const [login,setLogin]=useState()
  const [pass,setPass]=useState()


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth.uid,
        login: userAuth.login,
        pass: userAuth.pass
      };
      if (userAuth) {
        setUser(user);
        firebase
          .database()
          .ref(`users/${user.uid}`)
          .on("value", (res) => {
            const allUser = res.val();
          });
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const save = (uid) => {
    let newTemplate = firebase.database().ref(`/users/${uid}`);
    newTemplate.update({
      login: login,
      pass: pass,
      uid: uid
    });
  }

  const signUp = () => {
    auth.createUserWithEmailAndPassword(login, pass)
    .then((res) => {
      localStorage.setItem('token', res.user.refreshToken);
      save(res.user.uid)
    })
    .catch ((error) => {
    })
  }
  return(
    <div className='LogUp'>
      <Header/>
      <div class='mainUp'>
        <div className='LogUpGeneral'>
          <div className='LogUpLeft'>
            <h3>Преимущества членства</h3>
            <div className='LogUpTable'>
              <ul>
                <li>
                  <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-5d342631f0752609bcce3a844f9ba24f1c95d2d06b1674b1ba146d35f9cdce7a.svg' alt='logo'/>
                  <p> Найдите что посмотреть в ваших потоковых сервисах, на которые вы подписаны</p>
                </li>
                <li>
                  <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-5d342631f0752609bcce3a844f9ba24f1c95d2d06b1674b1ba146d35f9cdce7a.svg' alt='logo'/>
                  <p> Журналировать отслеживаемые фильмы и телепередачи</p>
                </li>
                <li>
                  <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-5d342631f0752609bcce3a844f9ba24f1c95d2d06b1674b1ba146d35f9cdce7a.svg' alt='logo'/>
                  <p> Отслеживать избранные фильмы и сериалы и получать на их основе рекомендации</p>
                </li>
                <li>
                  <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-5d342631f0752609bcce3a844f9ba24f1c95d2d06b1674b1ba146d35f9cdce7a.svg' alt='logo'/>
                  <p> Создание и ведение персонального списка отслеживания</p>
                </li>
                <li>
                  <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-5d342631f0752609bcce3a844f9ba24f1c95d2d06b1674b1ba146d35f9cdce7a.svg' alt='logo'/>
                  <p> Создание собственных смешанных списков (фильмы и ТВ)</p>
                </li>
                <li>
                  <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-5d342631f0752609bcce3a844f9ba24f1c95d2d06b1674b1ba146d35f9cdce7a.svg' alt='logo'/>
                  <p> Участие в обсуждениях фильмов и телепередач</p>
                </li>
                <li>
                  <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-5d342631f0752609bcce3a844f9ba24f1c95d2d06b1674b1ba146d35f9cdce7a.svg' alt='logo'/>
                  <p> Внесение и улучшение информации в нашей базе данных</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='LogUpRight'>
            <div className='LogUpContent'>
              <h2>Зарегистрировать учётную запись</h2>
              <p>Создание учётной записи свободно и просто. Заполните форму ниже, чтобы начать. Для продолжения требуется JavaScript.</p>
            </div>
            <div className='LogUpInputs'>
              <label>Имя пользователя</label>
              <input
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              type='text'
              />
              <label>Пароль (минимум 4 символа)</label>
              <input
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type='text'
              />
              <label>Подтверждение пароля</label>
              <input
              type='text'
              />
              <label>Эл. почта</label>
              <input
              type='text'
              />
              <p>Нажимая кнопку «Зарегистрироваться» ниже, я подтверждаю, что я прочитал и согласен с Условиями использования TMDb и Политикой конфиденциальности.</p>
            </div>
            <div className='LogUpButton'>
              <button onClick={() => signUp()}>Регистрация</button>
              <Link to='/home'>Отменить</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LogUp;