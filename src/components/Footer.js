import React from 'react';
import './../scss/footer.scss';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <>
      <footer  className='footer'>
          <div className='content'>
            <div className='footerContainer'>
              <div className='footerBlock'>
                <a href="mailto: info@zp-am.de">E-Mail: info@zp-am.de</a>
                <p>Zahnarztpraxis A. Czapla - Manukyan</p>
                <address>Fontanestraße 18, 12049 Berlin</address>
              </div>
              <div className='footerBlock footerRight'>
                <a href="tel:+49 (0)30 621 36 54">Telefon: +49 (0)30 621 36 54</a>
                <a href="tel:+49 (0)30 627 055 26">Telefax: +49 (0)30 627 055 26</a>
              </div>
            </div>
              <p>Copyright © AIanalytx. 2020 • All rights reserved.</p>
              <p>Impressum & Datenschutzerklärung</p>
          </div>
      </footer>
    </>
  );
}

export default Footer;



