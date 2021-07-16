import React, { useState } from 'react';
import ButtonsHeadersCategori from './ButtonsHeadersCategori';
import Popular from './Popular';

const Main = () => {
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=star%20wars&page=1&include_adult=false`)
  return(
    <div className='main'>
      <ButtonsHeadersCategori setUrl={setUrl}/>
      <Popular url={url}/>
    </div>
  )
}

export default Main;