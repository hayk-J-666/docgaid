import React from 'react';
import './../scss/home.scss';
import Welcome from './../components/Welcome'
import ColorPage from './../components/ColorPage'
import Box from './../components/boxes'
import Footer from './../components/Footer'
import Contacts from './../components/Contacts'
import Weniger from '../components/Weniger';

function Home(props) {
  return (
    <>
      <section className='pageContainer'>
                <Welcome/>
                <ColorPage/>
                <Box/>
                <Weniger/>
                <Contacts/>
                <Footer/>
      </section>
    </>
  );
}

export default Home;
