import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import firebase from 'firebase';
import Footer from './Footer';
import Header from './Header';


const LogIn = () => {
  const [login,setLogin]=useState()
  const [pass,setPass]=useState()
  const [user, setUser] = useState()

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

  const signIn = () => {

    auth.signInWithEmailAndPassword(login, pass)
      .then((res) => {
        localStorage.setItem('token', res.user.refreshToken);
      })
      .catch ((error) => {
      })
  }
  return(
    <div className='logIn'>
      <Header/>
      <div className='main'>
        <div className='LogInGeneral'>
          <div className='LogInContent'>
            <h2>Войти в свою учётную запись</h2>
            <p>Чтобы пользоваться правкой и возможностями рейтинга TMDb, а также получить персональные рекомендации, необходимо войти в свою учётную запись. Если у вас нет учётной записи, её регистрация является бесплатной и простой. <Link to='/logup'>Нажмите здесь</Link>, чтобы начать.</p>
            <p>Если Вы зарегистрировались, но не получили письмо для подтверждения, <Link to='/resend-email-verification'>нажмите здесь</Link>, чтобы отправить письмо повторно.</p>
          </div>
          <div className='LogInInputs'>
            <label>Имя пользователя</label>
            <input
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            type='text'
            />
            <label>Пароль</label>
            <input
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            type='text'
            />
          </div>
          <div className='LogInButton'>
            <button onClick={() => signIn()}>Войти</button>
            <Link to='/reset-password'>Сбросить пароль</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LogIn;