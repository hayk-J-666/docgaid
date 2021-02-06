import React from 'react';
import './../scss/noMatch.scss';
import { Link } from 'react-router-dom';



function NoMatch(props) {

  return (
    <>
      <section id='error-404'>
        <h3>Oooops...</h3>
        <h1>404</h1>
        <h2>ERROR</h2>
        <h4>Sorry, page not found</h4>
        <Link to='/'>
          <button className='web-button-404'>Home Page</button>
        </Link>
      </section>
    </>
  );
}

export default NoMatch;
