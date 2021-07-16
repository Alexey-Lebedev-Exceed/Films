import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Welcome from './Welcome';

const Home = () => {
  return(
    <div>
      <Header/>
      <Welcome/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home;